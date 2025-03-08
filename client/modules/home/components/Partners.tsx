import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import ecotravio from '../../../asset/images/partners/ecotravio.webp';
import agricola from '../../../asset/images/partners/agricola.webp';
import alesano from '../../../asset/images/partners/alesano.webp';
import fresco from '../../../asset/images/partners/fresco.webp';
import macromex from '../../../asset/images/partners/macromex.webp';
import pronat from '../../../asset/images/partners/pronat.webp';
import dionis from '../../../asset/images/partners/dionis.webp';
import kralex from '../../../asset/images/partners/kralex.webp';
import leida from '../../../asset/images/partners/leida.webp';
import fraher from '../../../asset/images/partners/fraher.webp';
import dulcinella from '../../../asset/images/partners/dulcinella.webp';
import lucasBites from '../../../asset/images/partners/lucas-bites.webp';

const Partners = () => {
  return (
    <section className="partners section">
      <div className="container">
        <h2 className="title">Furnizori Bocado</h2>
        <div className="partners__container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={agricola}
                    alt="agricola"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={alesano}
                    alt="alesano"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={fresco}
                    alt="fresco"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={macromex}
                    alt="macromex"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={pronat}
                    alt="pronat"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={dionis}
                    alt="dionis"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={kralex}
                    alt="kralex"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image className="partner__img" width="220" height="75" src={leida} alt="leida" />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={fraher}
                    alt="fraher"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={dulcinella}
                    alt="dulcinella"
                  />
                </Link>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="partner">
                <Link className="partner__link" href="#">
                  <Image
                    className="partner__img"
                    width="220"
                    height="75"
                    src={lucasBites}
                    alt="lucas bites"
                  />
                </Link>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
