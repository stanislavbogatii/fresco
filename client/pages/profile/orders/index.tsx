import ProfileLayout from '@/common/components/ProfileLayout';
import { routes } from '@/utils/routes';

import Link from 'next/link';
import Image from 'next/image';

import masterCard from '../../../asset/icons/mastercard.png';
import productFirst from '../../../asset/images/products/1.webp';
import productSecond from '../../../asset/images/products/2.webp';
import productThird from '../../../asset/images/products/3.webp';

const ProfileOrders = () => {
  return (
    <ProfileLayout title="Comenzile mele">
      <div className="orders">
        <div className="orders__top">
          <div className="orders__data">
            <strong className="orders__title">Data comenzii</strong>
            <time className="orders__time" dateTime="2024-11-26">
              26 noiembrie 2024
            </time>
          </div>
          <div className="orders__total">
            <strong className="orders__title">Total</strong>
            <div className="orders__box-price">
              <span className="orders__price">1.076,25 RON</span>
              <Image
                className="orders__price-img"
                src={masterCard}
                width={30}
                height={20}
                alt="master card"
              />
            </div>
          </div>
          <div className="orders__state">
            <strong className="orders__number"># 1479190774245-01</strong>
            <div className="orders__status">Comandă în curs de pregătire</div>
          </div>
        </div>
        <ul className="orders__list">
          <li className="orders__item">
            <article className="product-item">
              <Link className="product-item__img-link" href="#">
                <Image src={productFirst} width={50} height={50} alt="Aripi de pui pane" />
              </Link>
              <div className="product-item__content">
                <Link className="product-item__link" href="#">
                  <strong className="product-item__title">Aripi de pui pane</strong>
                </Link>
                <time className="product-item__time" dateTime="2024-11-29">
                  Livrare până pe 29.11.2024
                </time>
                <div className="product-item__box">
                  <span className="product-item__quantity">48 buc</span>
                  <span className="product-item__price">90,98 RON</span>
                </div>
              </div>
            </article>
          </li>
          <li className="orders__item">
            <article className="product-item">
              <Link className="product-item__img-link" href="#">
                <Image
                  src={productSecond}
                  width={50}
                  height={50}
                  alt="Cartofi Dippers
"
                />
              </Link>
              <div className="product-item__content">
                <Link className="product-item__link" href="#">
                  <strong className="product-item__title">Cartofi Dippers</strong>
                </Link>
                <time className="product-item__time" dateTime="2024-11-29">
                  Livrare până pe 29.11.2024
                </time>
                <div className="product-item__box">
                  <span className="product-item__quantity">48 buc</span>
                  <span className="product-item__price">90,98 RON</span>
                </div>
              </div>
            </article>
          </li>
          <li className="orders__item">
            <article className="product-item">
              <Link className="product-item__img-link" href="#">
                <Image
                  src={productThird}
                  width={50}
                  height={50}
                  alt="Lasagna cu carne de vita si sos de rosii"
                />
              </Link>
              <div className="product-item__content">
                <Link className="product-item__link" href="#">
                  <strong className="product-item__title">
                    Lasagna cu carne de vita si sos de rosii
                  </strong>
                </Link>
                <time className="product-item__time" dateTime="2024-11-29">
                  Livrare până pe 29.11.2024
                </time>
                <div className="product-item__box">
                  <span className="product-item__quantity">48 buc</span>
                  <span className="product-item__price">90,98 RON</span>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <Link className="profile__link" href={routes.profile}>
        Întoarcere
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOrders;
