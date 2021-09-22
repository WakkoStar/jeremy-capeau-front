import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/PhotoPage.module.scss';
import mockPic from '../../assets/mocks/placeholder.jpg';
import { BASE_URL, fetchDataFromAPI } from '../../utils/dataFetcher';

export default function PhotoPage({ photos }) {
  const PhotoPart = ({ src, link, text = '' }) => {
    return (
      <div className={styles.PhotoPartContainer}>
        <Link href={link} passHref>
          <img src={src} alt={text} />
        </Link>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <Layout>
      <main className={styles.main}>
        {photos &&
          photos.map(({ slug, id, categorie, miniature }) => (
            <PhotoPart
              key={id}
              src={`${BASE_URL}${miniature.url}`}
              link={'/photographe/' + id}
              text={categorie}
            />
          ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const photos = await fetchDataFromAPI('/photos', []);
  return {
    props: { photos },
    revalidate: 60, 
  };
}
