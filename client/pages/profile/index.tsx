import ProfileLayout from '@/common/components/ProfileLayout';
import { RouteModule } from 'next/dist/server/future/route-modules/route-module';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';

const ProfileInfo = () => {
  const router = useRouter();
  
  return (
    <ProfileLayout title="Datele mele">
      <div className="user-info">
        <ul className="user-info__list">
          <li className="user-info__item">
            <strong className="user-info__name">Prenume</strong>
            <span className="user-info__text">CALIN</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Nume</strong>
            <span className="user-info__text">RUSU</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">E-mail</strong>
            <span className="user-info__text">calin.rusu10@gmail.com</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Gen</strong>
            <span className="user-info__text">-</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Data nașterii</strong>
            <span className="user-info__text">-</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Telefon</strong>
            <span className="user-info__text">0756225376</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Nume companie</strong>
            <span className="user-info__text">BRUTARIA FERMECATA SRL</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Denumire comercială</strong>
            <span className="user-info__text">MD4478</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Cod fiscal (CUI)</strong>
            <span className="user-info__text">RO46297598</span>
          </li>
          <li className="user-info__item">
            <strong className="user-info__name">Telefon corporativ</strong>
            <span className="user-info__text">-</span>
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
