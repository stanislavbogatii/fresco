import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';

import Link from 'next/link';

const ProfileOfferCreate = () => {
  return (
    <ProfileLayout title="Salvați oferta">
      <form className="offer-create">
        <label className="offer-create__label">
          <span className="offer-create__text">Nume</span>
          <input className="offer-create__input input" type="text" placeholder="Numele ofertelor" />
        </label>
        <label className="offer-create__label">
          <span className="offer-create__text">Descriere</span>
          <textarea className="offer-create__textarea input"></textarea>
        </label>
        <div className="offer-create__box">
          <ul className="offer-create__list">
            <li className="offer-create__list-item">Cod ref.</li>
            <li className="offer-create__list-item">Articol</li>
            <li className="offer-create__list-item">Preț</li>
            <li className="offer-create__list-item">Cantitate</li>
            <li className="offer-create__list-item">Multiplicator unitar</li>
            <li className="offer-create__list-item">Cantitate totală</li>
            <li className="offer-create__list-item">Total</li>
          </ul>
        </div>
        <span className="offer-create__nothing">Nimic de aratat</span>
        <div className="offer-create__box-items">
          <ul className="offer-create__items">
            <li className="offer-create__item">
              <span className="offer-create__item-head">Subtotal</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Livrare</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Reduceri</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Taxe</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Total</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
          </ul>
        </div>
        <label className="offer-create__label-checkbox">
          <input className="offer-create__input-checkbox checkbox" type="checkbox" required />
          <span className="offer-create__checkbox"></span>
          <span className="offer-create__checkbox-text">Ștergeți coșul după salvare</span>
        </label>
        <button className="offer-create__btn btn" type="button">
          Salvați
        </button>
      </form>
      <Link className="profile__link" href={routes.profile_offer}>
        Înapoi
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOfferCreate;
