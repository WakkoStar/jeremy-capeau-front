import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Sponsor from "../components/Sponsor";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

import Product from "../components/Product";
import { BASE_URL, fetchDataFromAPI } from "../utils/dataFetcher";

export default function Home({
  caroussel_texts,
  carrousel,
  brochure,
  photos,
  produits,
  sponsors,
  codePromo,
}) {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.carouselContainer}>
          <Carousel
            imageUrls={carrousel?.map(({ url }) => `${url}`)}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.carouselTextContainer}>
            <div>
              {caroussel_texts?.map(({ categorie, id }) => (
                <h2 key={id}>{categorie}</h2>
              ))}
            </div>
          </div>
          <Link href={`${brochure?.url || ""}`} passHref>
            <div className={styles.brochureContainer}>
              <h2>Télécharger la brochure ici</h2>
            </div>
          </Link>
        </div>
        <div className={styles.productsContainer}>
          <h2>Boutique Archiv&apos;s</h2>
          <h3>Les nouveautés</h3>
          <div className={styles.productsWrapper}>
            {produits?.map(
              ({ id, nouveau, stock, apercu, type_de_produit, nom }) => (
                <Product
                  id={id}
                  key={id}
                  data={{ nouveau, stock, type_de_produit }}
                  title={nom}
                  src={`${apercu?.url}`}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.imagesContainer}>
          {photos?.map(({ url, id, name }) => (
            <img key={id} src={`${url}`} alt={name} />
          ))}
        </div>
        <div className={styles.sponsorContainer}>
          <h2>Ils m&apos;ont fait confiance</h2>
          <div className={styles.sponsorWrapper}>
            {sponsors?.map(({ id, titre, description, logo }) => (
              <Sponsor
                key={id}
                title={titre}
                description={description}
                src={`${logo?.url}`}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const initialState = {
    caroussel_texts: [],
    carrousel: [],
    brochure: {
      url: "",
    },
    photos: [],
    produits: [],
    sponsors: [],
  };
  const data = await fetchDataFromAPI("/home-page", initialState);

  return {
    props: { ...data }, // will be passed to the page component as props
    revalidate: 60, 
  };
}
