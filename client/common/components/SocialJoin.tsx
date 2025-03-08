import React from 'react'

import Link from 'next/link'
import Image from 'next/image';

import facebook from '../../asset/icons/facebook.svg';
import instagram from '../../asset/icons/instagram.svg';
import youtube from '../../asset/icons/youtube.svg';
import tiktok from '../../asset/icons/tiktok.svg';

const SocialJoin = () => {
  return (
    <div className="social-join">
      <strong className="social-join__title">Urmareste-ne: </strong>
      <ul className="social-join__list">
        <li className="social-join__item">
          <Link className="social-join__link" href="#" target="_blank" rel="noopener noreferrer">
            <Image src={facebook} width={28} height={28} alt="facebook" />
            <span className="sr-only">mergi pe facebook</span>
          </Link>
        </li>
        <li className="social-join__item">
          <Link className="social-join__link" href="#" target="_blank" rel="noopener noreferrer">
            <Image src={instagram} width={28} height={28} alt="instagram" />
            <span className="sr-only">mergi pe instagram</span>
          </Link>
        </li>
        <li className="social-join__item">
          <Link className="social-join__link" href="#" target="_blank" rel="noopener noreferrer">
            <Image src={youtube} width={28} height={28} alt="youtube" />
            <span className="sr-only">mergi pe youtube</span>
          </Link>
        </li>
        <li className="social-join__item">
          <Link className="social-join__link" href="#" target="_blank" rel="noopener noreferrer">
            <Image src={tiktok} width={28} height={28} alt="tiktok" />
            <span className="sr-only">mergi pe tiktok</span>
          </Link>
        </li>
      </ul>
      <p className="social-join__text">
        Aboneaza-te la retelele noastre de socializare si fii primul care afla de cele mai bune oferte!
      </p>
    </div>
  );
}

export default SocialJoin
