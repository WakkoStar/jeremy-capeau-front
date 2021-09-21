export const BASE_URL = "https://jeremy-capeau-back-j354g.ondigitalocean.app";
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
    console.log("Unable to fetch data for ", apiEndpoint);
  }

  if (!data) {
    return defaultObject;
  } else {
    return data;
  }
};
