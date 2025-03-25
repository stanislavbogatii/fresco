import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';

import newsBanner from '../../../asset/images/news-banner.webp';

import ProductCard from '@/common/components/ProductCard';

const News = () => {
  return (
    <section className="news section">
      <h2 className="title ">Produse vizualizate recent</h2>
      <div className="product-slider news__slider">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
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
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default News;
