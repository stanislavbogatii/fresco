import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ecotravio from '../../../asset/images/partners/ecotravio.webp';

const Partners = () => {
  return (
    <section className="partners section">
      <div className="container">
        <h2 className="title">Furnizori Bocado</h2>
        <div className="partners__container">
          <ul className="partners__list">
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
            <li className="partners__item">
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={ecotravio}
                    alt="ecotravio"
                  />
                </Link>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
