import ProfileLayout from '@/common/components/ProfileLayout';
import { RouteModule } from 'next/dist/server/future/route-modules/route-module';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from '@/context/UserInfoContext';

const ProfileInfo = () => {
  const router = useRouter();
  const { user } = useUserInfoContext();
  return (
    <ProfileLayout title="Datele mele">
      <div className="user-info">
        <ul className="user-info__list">
          <li className="user-info__item">
            <strong className="user-info__name">Prenume</strong>
            <span className="user-info__text">{user?.profile?.lastName}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Nume</strong>
            <span className="user-info__text">{user?.profile?.firstName}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">E-mail</strong>
            <span className="user-info__text">{user?.email}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Gen</strong>
            <span className="user-info__text">{user?.profile?.gender ?? '-'}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Data nașterii</strong>
            <span className="user-info__text">-</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Telefon</strong>
            <span className="user-info__text">{user?.profile?.phone}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Nume companie</strong>
            <span className="user-info__text">{user?.company?.name}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Denumire comercială</strong>
            <span className="user-info__text">{user?.company?.commercialName}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Cod fiscal (CUI)</strong>
            <span className="user-info__text">{user?.company?.fiscalCode}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Telefon corporativ</strong>
            <span className="user-info__text">{user?.company?.phone}</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Inscripția de stat</strong>
            <span className="user-info__text">-</span>
          </li>
        </ul>
        <Link className="user-info__link" href={routes.profile_edit}>
          Editează
        </Link>
        <Link className="profile__link" href={routes.home}>Homepage</Link>
      </div>
    </ProfileLayout>
  );
};

export default ProfileInfo;
