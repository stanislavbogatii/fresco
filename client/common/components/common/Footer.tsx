import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

import Logo from '../Logo';

import vtexIcon from '../../../asset/icons/vtex.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Logo />
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">Copyright © 2024 - Macromex SRL</p>
          <p className="footer__powered">
            Powered by
            <Link className="footer__powered-link" href="#">
              <Image className="footer__powered-img" src={vtexIcon} width={66} height={24} alt="vtex icon" />
            </Link>
          </p>
          <button className="footer__button">RO</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
