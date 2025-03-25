import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';

import Link from 'next/link';

const ProfileOffer = () => {
  return (
    <ProfileLayout title="Lista mea de oferte">
      <div className="profile-offer">
        <div className="profile-offer__inner">
          <div className="profile-offer__box">
            <ul className="profile-offer__list">
              <li className="profile-offer__list-item">Nume </li>
              <li className="profile-offer__list-item">Reduceri</li>
              <li className="profile-offer__list-item">Livrare</li>
              <li className="profile-offer__list-item">Taxe</li>
              <li className="profile-offer__list-item">Total</li>
              <li className="profile-offer__list-item">Creat</li>
            </ul>
          </div>
        </div>
        <span className="profile-offer__text">Nimic de arătat.</span>
        <Link className="profile-offer__link btn" href={routes.profile_offer_create}>
          Nou
        </Link>
      </div>
      <Link className="profile__link" href={routes.profile}>
        Profil
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOffer;
