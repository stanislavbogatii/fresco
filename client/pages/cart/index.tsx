import Link from 'next/link';
import Image from 'next/image';

import { routes } from '@/utils/routes';

import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';

import cartImage from '@/asset/images/cart-empty.svg';
import Head from 'next/head';

const crumb: BreadcrumbModel[] = [
  {
    pageName: 'Home',
    url: '/',
  },
  {
    pageName: 'Coș',
    url: '/cart',
  },
];

const Cart = () => {
  return (
    <>
      <Head>
        <title>FRESCO | Coș</title>
      </Head>
      <section className="cart section">
        <div className="container">
          <BreadcrumbComponent props={crumb} />
          <div className="cart__empty">
            <h1 className="cart__title">
              Coșul tău
            </h1>
            <p className="cart__text">
              Probabil că nu ați comandat încă nimic.
            </p>
            <Image className="cart__img" src={cartImage} width={300} height={300} alt="cart empty" />
            <Link className="cart__link btn-primary" href={routes.catalog}>După cumpărături</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;
