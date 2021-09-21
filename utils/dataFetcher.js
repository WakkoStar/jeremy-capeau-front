export const BASE_URL = 'http://192.168.1.24:1337'; //TODO

export const fetchDataFromAPI = async (
  apiEndpoint,
  defaultObject,
  config = {}
) => {
  const res = await fetch(`${BASE_URL}${apiEndpoint}`, config);
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.log('Unable to fetch data for ', apiEndpoint);
  }

  if (!data) {
    return defaultObject;
  } else {
    return data;
  }
};
