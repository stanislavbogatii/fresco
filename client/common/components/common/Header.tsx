import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import Logo from '../Logo';
import SearchForm from '../SearchForm';
import LoginForm from '../LoginForm';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from '@/context/UserInfoContext';

const Header = ({ children }: { children?: React.ReactNode }) => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const scrollThreshold = 148;
  const { profile } = useUserInfoContext();

  const openLoginForm = () => setIsLoginFormOpen(true);
  const closeLoginForm = () => setIsLoginFormOpen(false);

  useEffect(() => {
    if (!hasScrolled) {
      setIsActive(true);
    }

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll === 0) {
        setIsActive(true);
        return;
      }

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
            <button className="header__menu-btn" type="button">
              <span className="header__btn-line"></span>
              <span className="header__btn-line"></span>
              <span className="header__btn-line"></span>
              <span className="sr-only">open menu burger</span>
            </button>
            <Logo />
            <SearchForm />
            {profile ? (
              <Link className="header__top-user" href={routes.profile}>
                Salut, Calin!
              </Link>
            ) : (
              <>
                <Link className="header__top-link" href={routes.register}>
                  <span>Vreau cont B2B</span>
                </Link>
                <button className="header__btn" type="button" onClick={openLoginForm}>
                  <span>Intra in contul tau</span>
                </button>
              </>
            )}
          </div>
          <ul className="header__list">
            <li className="header__item">
              <Link className="header__link header__link--about" href={routes.about}>
                Despre noi
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link header__link--partners" href="#">
                Furnizori
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link header__link--news" href="#">
                Noutati
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link header__link--contacts" href={routes.contact}>
                Contact
              </Link>
            </li>
            <li className="header__item">
              <Link className="header__link header__link--offers" href="#">
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
