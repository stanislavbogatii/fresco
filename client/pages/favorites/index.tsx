import Link from "next/link";
import Image from "next/image";

import { routes } from "@/utils/routes";

import favoriteImage from "@/asset/images/favorite-empty.jpg";

import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';
import Head from "next/head";

const crumb: BreadcrumbModel[] = [
  {
    pageName: 'Home',
    url: '/',
  },
  {
    pageName: 'Favorite',
    url: '/favorites',
  },
];

const Favorites = () => {
  return (
    <>
    <Head>
      <title>FRESCO | Favorite</title>
    </Head>
    <section className="favorites section">
      <div className="container">
        <BreadcrumbComponent props={crumb} />
        <div className="favorites__empty">
          <h1 className="favorites__title">
            Favorite
          </h1>
          <p className="favorites__text">
            Probabil că nu ați salvat încă nimic.
          </p>
          <Image className="favorites__img" src={favoriteImage} width={300} height={300} alt="favorites empty" />
          <Link className="favorites__link btn-primary" href={routes.catalog}>După cumpărături</Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Favorites;
