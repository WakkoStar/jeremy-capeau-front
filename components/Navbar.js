import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import accountPic from '../assets/logos/account.png';
import panierPic from '../assets/logos/panier.png';
import closePic from '../assets/logos/croix.png';
import logoPic from '../assets/logos/logo.png';
import menuPic from '../assets/logos/menu.png';

import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseLeave={() => setIsMenuOpened(false)}
    >
      <div className={styles.navContainer}>
        <div className={styles.companyNameContainer}>
          <Link href='/' passHref>
            <Image alt='logo-jeremycapeau' src={logoPic} />
          </Link>
        </div>
        <Image
          alt='navigation'
          src={!isMenuOpened ? menuPic : closePic}
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        />
      </div>
      <div
        className={isMenuOpened ? styles.linksSelected : styles.links}
        onClick={() => setIsMenuOpened(false)}
      >
        <Link href='/videaste' passHref>
          <p>vidéaste</p>
        </Link>
        <Link href='/photographe' passHref>
          <p>photographe</p>
        </Link>
        <Link href='/contact' passHref>
          <p>contact</p>
        </Link>
        <Link href='/apropos' passHref>
          <p>à propos</p>
        </Link>
      </div>
    </div>
  );
}
