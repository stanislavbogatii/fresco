import Image from 'next/image';
import Link from 'next/link';

import User from '../../asset/icons/user-img.svg';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from '@/context/UserInfoContext';

const UserProfileLeftSideBar = () => {
  const router = useRouter();
  const { fetchUserInfo } = useUserInfoContext();

  const handleDeconect = (e: any) => {
    e.preventDefault();
    document.cookie = "access_token=; path=/; max-age=0";
    fetchUserInfo();
    router.push(routes.home);
  }

  return (
    <aside className="user-sidebar">
      <div className="user-sidebar__user-box">
        <Image className="user-sidebar__img" src={User} width={64} height={64} alt="Calin" />
        <strong className="user-sidebar__welcome">
          <span>Salut,</span> Calin!
        </strong>
      </div>
      <ul className="user-sidebar__list">
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile || router.pathname === routes.profile_edit
                ? 'active'
                : ''
            }`}
            href={routes.profile}
          >
            Datele mele
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile_orders ? 'active' : ''
            }`}
            href={routes.profile_orders}
          >
            Comenzile mele
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${router.pathname === routes.profile_auth && 'active'}`}
            href={routes.profile_auth}
          >
            Autentificare
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile_organization && 'active'
            }`}
            href={routes.profile_organization}
          >
            Organizatia mea
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile_offer ||
              router.pathname === routes.profile_offer_create
                ? 'active'
                : ''
            }`}
            href={routes.profile_offer}
          >
            Oferta comanda
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            onClick={handleDeconect}
            className="user-sidebar__link user-sidebar__link--exit"
            href={routes.profile_offer}
          >
            Deconectare
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default UserProfileLeftSideBar;
