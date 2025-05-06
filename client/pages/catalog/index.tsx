import Head from 'next/head';
import Link from 'next/link';

import ProductCard from '@/common/components/ProductCard';
import Filterbar from '@/common/components/Filterbar';

import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';
import { useState } from 'react';

const crumb: BreadcrumbModel[] = [
  {
    pageName: 'Home',
    url: '/',
  },
  {
    pageName: 'Catalog de produse',
    url: '/catalog',
  },
];

const Catalog = () => {
  const [isFilterbarOpen, setIsFilterbarOpen] = useState(false);

  const hadnleOpenFilterbar = () => setIsFilterbarOpen(true);

  return (
    <>
      <Head>
        <title>FRESCO | Catalog</title>
      </Head>
      <section className="catalog section">
        <div className="catalog-container">
          <div className="catalog__banner">
            <h1 className="catalog__main-title">
              Catalog de produse
            </h1>
            <BreadcrumbComponent props={crumb} />
          </div>
        </div>
        <div className="container">
          <div className="catalog__inner">
            <Filterbar isOpen={isFilterbarOpen} onClose={() => setIsFilterbarOpen(false)} />
            <div className="catalog__content">
              <div className="catalog__nav">
                <p className="catalog__total">
                  290 produse găsite
                </p>
                <button className="catalog__open-filterbar" type="button" onClick={hadnleOpenFilterbar}>
                  <span className="sr-only">open filterbar</span>
                </button>
                <div className="catalog__select-box">
                  <select className="catalog__select input">
                    <option value="1">Relevanță</option>
                    <option value="2">Data publicării</option>
                    <option value="3">Reducere</option>
                    <option value="4">Preț: de la mare la mic</option>
                    <option value="5">Pret: de la mic la mare</option>
                    <option value="6">Denumire, crescătoare</option>
                    <option value="7">Denumire, descrescătoare</option>
                  </select>
                </div>
              </div>
              <ul className="catalog__list">
                {/* <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li>
                <li className="catalog__item">
                  <ProductCard />
                </li> */}
              </ul>
              <ul className="pagination">
                <li className="pagination__item">
                  <Link className="pagination__link active" href="#">
                    1
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    2
                  </Link>
                </li>
                <li className="pagination__item">
                    ...
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    9
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    10
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Catalog;
