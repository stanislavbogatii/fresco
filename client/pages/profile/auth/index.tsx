import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';
import Link from 'next/link';
import { useState } from 'react';

type AccordionState = {
  [key: string]: boolean;
};

const ProfileAuth = () => {
  const [accordionState, setAccordionState] = useState<AccordionState>({
    resetPassword: false,
    verificationSession: false,
  });

  const toggleAccordion = (item: string) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <ProfileLayout title="Autentificare">
      <div className="profile-auth">
        <div className="profile-auth__password-item">
          <strong className="profile-auth__title">Parolă</strong>
          <span className="profile-auth__descr">******************</span>
          <button
            className="profile-auth__btn"
            type="button"
            onClick={() => toggleAccordion('resetPaassword')}
          >
            Redefinește parola
          </button>
          <form className={`reset-password ${accordionState.resetPaassword ? 'active' : ''}`}>
            <div className="reset-password__inner" style={{ minHeight: '0' }}>
              <label className="reset-password__label">
                <span className="reset-password__text">Parola actuală</span>
                <input className="reset-password__input input" type="password" />
              </label>
              <label className="reset-password__label">
                <span className="reset-password__text">Parolă nouă</span>
                <input className="reset-password__input input" type="password" />
              </label>
              <strong className="reset-password__descr">
                Parola ta trebuie să conțină cel puțin:
              </strong>
              <ul className="reset-password__list">
                <li className="reset-password__item">8 caractere</li>
                <li className="reset-password__item">1 literă mică</li>
                <li className="reset-password__item">1 număr</li>
                <li className="reset-password__item">1 literă majusculă</li>
              </ul>
              <button className="reset-password__btn btn" type="submit">
                Salvează parola
              </button>
            </div>
          </form>
        </div>
        <div className="profile-auth__password-item">
          <strong className="profile-auth__title">Gestionarea sesiunii</strong>
          <span className="profile-auth__descr">Există 1 sesiuni active</span>
          <button
            className="profile-auth__btn"
            type="button"
            onClick={() => toggleAccordion('verificationSession')}
          >
            Verifică sesiunile
          </button>
          <div className={`session ${accordionState.verificationSession ? 'active' : ''}`}>
            <div className="session__inner" style={{ minHeight: '0' }}>
              <span className="session__text">Sesiunea curentă</span>
              <div className="session__box">
                <strong className="session__title">Desktop</strong>
                <dl className="session__list">
                  <div className="session__item">
                    <dt>Ultima accesare:</dt>
                    <dd>acum 1 zi</dd>
                  </div>
                  <div className="session__item">
                    <dt>Chrome, Windows, IP:</dt>
                    <dd>109.185.162.94</dd>
                  </div>
                  <div className="session__item">
                    <dt>Prima accesare:</dt>
                    <dd>11 martie 2025 la 21:05</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="profile__link" href={routes.profile}>
        profil
      </Link>
    </ProfileLayout>
  );
};

export default ProfileAuth;
