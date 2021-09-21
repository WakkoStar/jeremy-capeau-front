import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

import InstaPic from "../assets/logos/instagram.png";
import FacebookPic from "../assets/logos/facebook.png";
import MailPic from "../assets/logos/mail.png";
import TelPic from "../assets/logos/tel.png";
import { BASE_URL, fetchDataFromAPI } from "../utils/dataFetcher";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [footerLinks, setFooterLinks] = useState([]);
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [mail, setMail] = useState("");
  const [newsletterMail, setNewsletterMail] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI("/a-propos", {});
      setFooterLinks(data.footer_liens);
      setInstagramLink(data.instagram_link);
      setFacebookLink(data.facebook_link);
      setMail(data.mail_personnel);
      setTel(data.tel_personel);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jérémy Capeau - photographe/vidéaste</title>
        <meta
          name="description"
          content="Site, boutique, portfolio, book de Jérémy Capeau. Photographe, vidéaste et monteur dans le Vaucluse, aux Taillades, à Cavaillon, à Avignon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <footer className={styles.footer}>
        <div className={styles.coordContainer}>
          <div>
            <Image src={MailPic} />
            <p>{mail}</p>
          </div>
          <div>
            <Image src={TelPic} />
            <p>{tel}</p>
          </div>
        </div>
        <div className={styles.brandContainer}>
          <Link href={instagramLink} passHref>
            <Image src={InstaPic} />
          </Link>
          <Link href={facebookLink} passHref>
            <Image src={FacebookPic} />
          </Link>
        </div>
        <div className={styles.endContainer}>
          <p>@2021 Jérémy Capeau</p>
        </div>
      </footer>
    </div>
  );
}
