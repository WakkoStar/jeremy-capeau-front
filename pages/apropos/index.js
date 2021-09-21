import Layout from '../../components/Layout';
import styles from '../../styles/AproposPage.module.scss';
import mockPic from '../../assets/mocks/placeholder.jpg';
import Image from 'next/image';
import { BASE_URL, fetchDataFromAPI } from '../../utils/dataFetcher';
export default function AproposPage({ photo, description }) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.TitleContainer}>
          <img src={`${BASE_URL}${photo.url}`} alt={photo.name} />
          <h2>à propos</h2>
        </div>
        <p>{description}</p>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const initialState = {
    photo: {
      url: '',
      name: '',
    },
    description: '',
  };
  const aboutMe = await fetchDataFromAPI('/a-propos', initialState);
  return {
    props: { ...aboutMe },
  };
}
