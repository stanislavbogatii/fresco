import Image from 'next/image';
import Link from 'next/link';

import User from '../../asset/icons/user-img.svg';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from '@/context/UserInfoContext';
import { signout } from '@/modules/register/services/RegisterServcie';

const UserProfileLeftSideBar = () => {
  const router = useRouter();
  const { user, fetchUserInfo } = useUserInfoContext();

  const handleDeconect = async (e: any) => {
    e.preventDefault();
    await signout();
    document.cookie = "access_token=; path=/; max-age=0";
    fetchUserInfo();
    router.push(routes.home);
  }

  return (
    <aside className="user-sidebar">
      <div className="user-sidebar__user-box">
        <Image className="user-sidebar__img" src={User} width={64} height={64} alt="Calin" />
        <strong className="user-sidebar__welcome">
          <span>Salut,</span> {user?.profile?.firstName}
        </strong>
      </div>
      <ul className="user-sidebar__list">
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile.root || router.pathname === routes.profile.edit
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
              router.pathname === routes.profile.orders ? 'active' : ''
            }`}
            href={routes.profile.orders}
          >
            Comenzile mele
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${router.pathname === routes.profile.auth && 'active'}`}
            href={routes.profile.auth}
          >
            Autentificare
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile.organization && 'active'
            }`}
            href={routes.profile.organization}
          >
            Organizatia mea
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            className={`user-sidebar__link ${
              router.pathname === routes.profile.offer.root ||
              router.pathname === routes.profile.offer.create
                ? 'active'
                : ''
            }`}
            href={routes.profile.offer.root}
          >
            Vanzari
          </Link>
        </li>
        <li className="user-sidebar__item">
          <Link
            onClick={handleDeconect}
            className="user-sidebar__link user-sidebar__link--exit"
            href={routes.profile.offer.root}
          >
            Deconectare
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default UserProfileLeftSideBar;
