import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

import loginBanner from '../../asset/images/login-banner.png';
import backArrow from '../../asset/icons/back-arrow.svg';

const LoginForm = ({ isOpen, onClose } : {isOpen: boolean, onClose: () => void}) => {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const openAuthForm = () => setIsAuthFormOpen(true);
  const closeAuthForm = () => setIsAuthFormOpen(false);

  useEffect(() => {
    if (isOpen) setStartAnimation(true);
    else setStartAnimation(false)
  }, [isOpen])

  return isOpen && (
    <div className={`login-form ${startAnimation ? 'active' : ''}`} onClick={onClose}>
      <div className="login-form__inner" onClick={(e) => e.stopPropagation()}>
        <Image
          className="login-form__img"
          src={loginBanner}
          width={540}
          height={386}
          alt="login-form-decor"
        />
        <form className="login-form__shape login-form__enter" action="#">
          <strong className="login-form__title">Salut și bine ai revenit!</strong>
          <input className="login-form__input" type="email" placeholder="Email companie" />
          <input className="login-form__input" type="password" placeholder="Adaugă-ti parola" />
          <button className="login-form__btn" type="button" onClick={openAuthForm}>
            Seteaza / Reseteaza parola
          </button>
          <button className="login-form__button" type="submit">
            Autentificare
          </button>
          <Link className="login-form__link flex items-center justify-center" href="/register">
            Solicită un cont nou
          </Link>
        </form>
        <form
          className={`login-form__shape login-form__auth ${isAuthFormOpen ? 'active' : ''}`}
          action="#"
        >
          <strong className="login-form__title">Primește codul de acces prin e-mail</strong>
          <input
            className="login-form__input"
            type="email"
            placeholder="Ex.:example@mail.com"
            required
          />
          <button className="login-form__send btn" type="submit">
            Trimite
          </button>
          <button
            className="login-form__back flex gap-2 items-center"
            type="button"
            onClick={closeAuthForm}
          >
            <Image src={backArrow} width="12" height="12" alt="back-arrow" />
            <span>Inapoi</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
