import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProfileOrganization = () => {
  const [isUserFormOpen, setIsUserFormOpen] = useState<boolean>(false);

  const openLoginForm = () => setIsUserFormOpen(true);
  const closeLoginForm = () => setIsUserFormOpen(false);

  useEffect(() => {
    if (isUserFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <ProfileLayout title="Informatii organizatie">
      <div className="profile-organization">
        <dl className="profile-organization__dl">
          <div className="profile-organization__item">
            <dt>Nume companie:</dt>
            <dd>BRUTARIA FERMECATA SRL</dd>
          </div>
          <div className="profile-organization__item">
            <dt>Rol:</dt>
            <dd>Administrator</dd>
          </div>
          <div className="profile-organization__item">
            <dt>CUI:</dt>
            <dd>RO46297598</dd>
          </div>
        </dl>
        <p className="profile-organization__text">
          De aici poti administra utilizatorii companiei tale.
        </p>
        <p className="profile-organization__text">
          Poti adauga utilizatori noi, poti atribui roluri si adrese de livrare pentru fiecare
          utilizator, sau la nevoie, ii poti sterge.
        </p>
        <p className="profile-organization__text">
          Daca un coleg isi face cont si solicita access in compania ta, vei primi o notificare pe
          e-mail, iar contul va aparea cu statusul “In asteptare”. Noul utilizator va putea utiliza
          contul, dupa ce il aprobi si ii atribui un rol
        </p>
        <div className="profile-organization__inner">
          <div className="profile-organization__users-info">
            <ul className="profile-organization__titles">
              <li className="profile-organization__title">Email</li>
              <li className="profile-organization__title">Rol</li>
              <li className="profile-organization__title">Status</li>
              <li className="profile-organization__title">Editare</li>
              <li className="profile-organization__title">Alocare adrese</li>
            </ul>
            <ul className="profile-organization__user-items">
              <li className="profile-organization__user-item">nubchenko@gmail.com</li>
              <li className="profile-organization__user-item">
                <strong>Administrator</strong>
              </li>
              <li className="profile-organization__user-item">Aprobat</li>
              <li className="profile-organization__user-item">-</li>
              <li className="profile-organization__user-item">-</li>
            </ul>
            <ul className="profile-organization__user-items">
              <li className="profile-organization__user-item">example@gmail.com</li>
              <li className="profile-organization__user-item">
                <strong>Contabilitate</strong>
              </li>
              <li className="profile-organization__user-item">Aprobat</li>
              <li className="profile-organization__user-item">-</li>
              <li className="profile-organization__user-item">-</li>
            </ul>
          </div>
          <button className="profile-organization__add btn" type="button" onClick={openLoginForm}>
            Adauga utilizator
          </button>
          <div
            className={`profile-organization__poppup ${isUserFormOpen ? 'active' : ''}`}
            onClick={closeLoginForm}
          >
            <form
              className="profile-organization__poppup-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <strong className="profile-organization__poppup-title">Utilizator nou</strong>
              <label className="profile-organization__poppup-label">
                <span className="profile-organization__poppup-text">Adresa de email</span>
                <input
                  className="profile-organization__poppup-input input"
                  type="email"
                  placeholder="Ex.: nubchenko@gmail.com"
                />
              </label>
              <label className="profile-organization__poppup-label">
                <span className="profile-organization__poppup-text">Rol</span>
                <select className="profile-organization__poppup-select input">
                  <option className="profile-organization__poppup-option" value="">
                    Rol
                  </option>
                  <option className="profile-organization__poppup-option" value="Contabilitate">
                    Contabilitate
                  </option>
                  <option className="profile-organization__poppup-option" value="Achizitii">
                    Achizitii
                  </option>
                  <option className="profile-organization__poppup-option" value="In asteptare">
                    In asteptare
                  </option>
                  <option className="profile-organization__poppup-option" value="Administrator">
                    Administrator
                  </option>
                </select>
              </label>
              <button className="profile-organization__poppup-btn btn" type="submit">
                Adauga utilizator
              </button>
            </form>
          </div>
        </div>
      </div>
      <Link className="profile__link" href={routes.profile}>
        profil
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOrganization;
