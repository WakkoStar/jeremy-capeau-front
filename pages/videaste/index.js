import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/VideoPage.module.scss';
import PlayPic from '../../assets/logos/play.png';
import { BASE_URL, fetchDataFromAPI } from '../../utils/dataFetcher';

export default function VideoPage({
  titre_partie_principale,
  titre_partie_secondaire,
  video_partie_principale,
  videos_partie_secondaire,
}) {
  const img = require('../../assets/logos/play.png').default.src;
  console.log(img)
  
  const VideoPart = ({ src, link, text = '' }) => {
    return (
      <div className={styles.videoPart}>
        <Link href={link} passHref>
          <a rel='noreferrer' target='_blank'>
            <div className={styles.linkPreview}>
              <div className={styles.floatingDiv}>
                <img
                  src={img}
                  alt='play'
                />
              </div>
              <img src={src} alt="video"/>
            </div>
          </a>
        </Link>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.mainPartContainer}>
          <h2>{titre_partie_principale}</h2>
          <VideoPart
            src={`${video_partie_principale.miniature.url}`}
            link={video_partie_principale.video_link}
            text={video_partie_principale.description}
          />
        </div>

        <div className={styles.secondPartContainer}>
          <h2>{titre_partie_secondaire}</h2>
          {videos_partie_secondaire.map(
            ({ miniature, description, id, video_link }) => (
              <VideoPart
                key={id}
                src={`${miniature.url}`}
                text={description}
                link={video_link}
              />
            )
          )}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const initialState = {
    id: 0,
    titre_partie_principale: '',
    titre_partie_secondaire: '',
    video_partie_principale: {
      id: 0,
      video_link: '',
      description: '',
      miniature: {
        name: '',
        url: '',
      },
    },
    videos_partie_secondaire: [],
  };
  const videoPage = await fetchDataFromAPI('/page-videos', initialState);
  return {
    props: { ...videoPage },
    revalidate: 60, 
  };
}
