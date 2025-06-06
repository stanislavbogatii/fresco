import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from "@/context/UserInfoContext";

import Logo from '../Logo';
import SocialJoin from '@/common/components/SocialJoin';

import phone from '../../../asset/icons/phone.svg';
import location from '../../../asset/icons/location.svg';
import email from '../../../asset/icons/message.svg';
import vtexIcon from '../../../asset/icons/vtex.svg';

const Footer = () => {
  const router = useRouter();
  const { user, fetchUserInfo } = useUserInfoContext();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-box">
            <div className="footer__top-logo">
              <Logo />
            </div>
            <SocialJoin />
          </div>
          <ul className="footer__list">
            <li className="footer__elem">
              <strong className="footer__title">Denumire</strong>
              <ul className="footer__items">
                <li className="footer__item">
                  <Link className="footer__link" href={routes.about}>
                    Despre noi
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Produse
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Furnizori
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Clienţi
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href={routes.privacy_policy}>
                    Politica de condidentialitate
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href={routes.terms_and_conditions}>
                    Termeni si conditii
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href={routes.cookies_policy}>
                    Politica de cookies
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__elem">
              <strong className="footer__title">Utile</strong>
              <ul className="footer__items">
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Blog
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Promotii
                  </Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Noutati
                  </Link>
                </li>
              </ul>
            </li>
            <li className="footer__elem">
              <strong className="footer__title">Contact</strong>
              <ul className="footer__items footer__items--contacts">
                <li className="footer__item">
                  <Link className="footer__link" href="#">
                    Detalii companie
                  </Link>
                </li>
                <li className="footer__item">
                  <Image src={location} width={20} height={20} alt="location icon" />
                  <address className="footer__address">str. Florilor, 4b</address>
                </li>
                <li className="footer__item">
                  <Image src={email} width={20} height={20} alt="email icon" />
                  <Link className="footer__link" href="mailto:Victor.lescenco13@gmail.com">
                    Victor.lescenco13@gmail.com
                  </Link>
                </li>
                <li className="footer__item">
                  <Image src={phone} width={20} height={20} alt="phone icon" />
                  <Link className="footer__link footer__link--phone" href="tel:+373 60 104 995">
                    +373 60 104 995
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          {/* <p className="footer__copyright">Copyright © 2024 - Macromex SRL</p> */}
          {/* <p className="footer__powered">
            Powered by
            <Link className="footer__powered-link" href="#">
              <Image
                className="footer__powered-img"
                src={vtexIcon}
                width={66}
                height={24}
                alt="vtex icon"
              />
            </Link>
          </p> */}
          <button className="localization-button">RO</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
