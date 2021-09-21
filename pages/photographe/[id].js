import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/PhotoElement.module.scss';
import mockPic from '../../assets/mocks/placeholder.jpg';
import { BASE_URL, fetchDataFromAPI } from '../../utils/dataFetcher';
import HorizontalScroll from 'react-scroll-horizontal';

export default function PhotoElement({ images }) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.PhotoElementContainer}>
          <HorizontalScroll
            reverseScroll={true}
            className={styles.scrollHorizontal}
          >
            {images.map(({ url, id, name }) => (
              <img src={`${BASE_URL}${url}`} key={id} alt={name} />
            ))}
          </HorizontalScroll>
        </div>

        <div className={styles.PhotoElementContainerMobile}>
          {images.map(({ url, id, name }) => (
            <img src={`${BASE_URL}${url}`} key={id} alt={name} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const photos = await fetchDataFromAPI('/photos', []);
  return {
    paths: photos.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const initialState = {
    images: [],
  };
  const gallery = await fetchDataFromAPI(`/photos/${params.id}`, initialState);
  return {
    props: { ...gallery },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
