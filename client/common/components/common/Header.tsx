import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Logo from '../Logo';
import SearchForm from '../SearchForm';
import LoginForm from '../LoginForm';

import addUserIcon from '../../../asset/icons/add-user.svg';
import userIcon from '../../../asset/icons/user.png';
import arrowDown from '../../../asset/icons/arrow-down.svg';
import newsIcon from '../../../asset/icons/news-icon.svg';
import offersIcon from '../../../asset/icons/offers-icon.svg';

const Header = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const scrollThreshold = 148;

  const openLoginForm = () => setIsLoginFormOpen(true);
  const closeLoginForm = () => setIsLoginFormOpen(false);

  useEffect(() => {
    if (!hasScrolled) {
      setIsActive(true);
    }

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (!hasScrolled) {
        setHasScrolled(true);
      }

      if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, hasScrolled]);

  return (
    <header className={`header ${isActive ? 'active' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="header__top">
            <Logo />
            <SearchForm />
            <Link className="header__top-link" href="/register">
              <Image src={addUserIcon} width={22} height={22} alt="add user" />
              <span>Vreau cont B2B</span>
            </Link>
            <button className="header__btn" type="button" onClick={openLoginForm}>
              <Image src={userIcon} width={20} height={20} alt="user" />
              <span>Intra in contul tau</span>
            </button>
          </div>
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link" href="#">
                Toate produsele
                <Image src={arrowDown} width={15} height={8} alt="arrow down" />
              </Link>
            </li>
            <li className="header__item">
              <Image src={newsIcon} width={16} height={16} alt="news icon" />
              <Link className="header__link" href="#">
                Noutati
              </Link>
            </li>
            <li className="header__item">
              <Image src={offersIcon} width={16} height={16} alt="offers icon" />
              <Link className="header__link" href="#">
                Oferte Promotionale
              </Link>
            </li>
          </ul>
        </nav>
        <LoginForm isOpen={isLoginFormOpen} onClose={closeLoginForm} />
      </div>
    </header>
  );
};

export default Header;
