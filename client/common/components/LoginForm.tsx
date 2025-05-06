import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import loginBanner from '../../asset/images/login.png';
import { signin } from '@/modules/register/services/RegisterServcie';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from '@/context/UserInfoContext';

const LoginForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState<boolean>(false);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { fetchUserInfo } = useUserInfoContext();

  const openAuthForm = () => setIsAuthFormOpen(true);
  const closeAuthForm = () => setIsAuthFormOpen(false);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    if (password && email) {
      const data = await signin({email, password});
      // if (data) {
        // document.cookie = `access_token=${data.access_token}; path=/; max-age=${60 * 60 * 24 * 7}`;
        fetchUserInfo();
        onClose();
        router.push(routes.profile);
      // }  
    }
  }

  useEffect(() => {
    if (isOpen) {
      setStartAnimation(true);
      document.body.style.overflow = 'hidden';
    } else {
      setStartAnimation(false);
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`login-form ${startAnimation ? 'active' : ''}`} onClick={onClose}>
      <div className="login-form__inner" onClick={(e) => e.stopPropagation()}>
        <Image
          className="login-form__img"
          src={loginBanner}
          width={540}
          height={386}
          alt="login-form-decor"
        />
        <form className="login-form__shape login-form__enter" onSubmit={handleSignIn}>
          <strong className="login-form__title">Salut și bine ai revenit!</strong>
          <input className="login-form__input" type="email" placeholder="Email companie" onChange={(e:any) => setEmail(e.target.value)}/>
          <input className="login-form__input" type="password" placeholder="Adaugă-ti parola" onChange={(e:any) => setPassword(e.target.value)} />
          <button className="login-form__btn" type="button" onClick={openAuthForm}>
            Seteaza / Reseteaza parola
          </button>
          <button className="login-form__button" type="submit">
            Autentificare
          </button>
          <Link
            className="login-form__link flex items-center justify-center"
            href="/register"
            onClick={handleLinkClick}
          >
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
            <span>Inapoi</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
