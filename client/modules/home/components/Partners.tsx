import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import partner from '../../../asset/images/partners/partner.svg';

const Partners = () => {
  return (
    <section className="partners section">
      <h2 className="title">Furnizori Fresco</h2>
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
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            860: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide>
            <article className="partner">
              <Link className="partner__link" href="#">
                <Image
                  className="partner__img"
                  width="220"
                  height="75"
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
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
                  src={partner}
                  alt="ecotravio"
                />
              </Link>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
