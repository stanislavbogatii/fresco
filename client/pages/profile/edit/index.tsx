import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';

import Link from 'next/link';

const ProfileEdit = () => {
  return (
    <ProfileLayout title="Editează profilul">
      <div className="profile-edit">
        <form className="profile-edit__form">
          <label className="profile-edit__label">
            <span className="profile-edit__text">Prenume</span>
            <input className="profile-edit__input input" type="text" placeholder="Optional" />
          </label>
          <label className="profile-edit__label">
            <span className="profile-edit__text">Nume</span>
            <input className="profile-edit__input input" type="text" placeholder="Optional" />
          </label>
          <label className="profile-edit__label">
            <span className="profile-edit__text">Telefon</span>
            <input className="profile-edit__input input" type="tel" placeholder="Optional" />
          </label>
          <label className="profile-edit__label">
            <span className="profile-edit__text">Gen</span>
            <select className="profile-edit__select input">
              <option className="profile-edit__option" value="">
                Optional
              </option>
              <option className="profile-edit__option" value="Masculin">
                Masculin
              </option>
              <option className="profile-edit__option" value="Femenin">
                Femenin
              </option>
            </select>
          </label>
          <label className="profile-edit__label">
            <span className="profile-edit__text">Data nașterii</span>
            <input className="profile-edit__input input" type="text" placeholder="Optional" />
          </label>
          <button className="profile-edit__btn btn" type="submit">
            Salvează modificările
          </button>
        </form>
      </div>
      <Link className="profile__link" href={routes.profile}>
        Datele mele
      </Link>
    </ProfileLayout>
  );
};

export default ProfileEdit;
