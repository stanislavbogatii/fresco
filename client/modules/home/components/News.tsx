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
      <div className="container">
        <div className="news__box">
          <h2 className="title news__title">Noutăți</h2>
          <Link className="news__link" href="#">
            Vezi toate
          </Link>
        </div>
        <div className="product-slider news__slider">
          <Link className="news__slider-link" href="#">
            <Image className='news__slider-banner' src={newsBanner} width={268} height={422} alt="news banner" />
          </Link>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
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
      </div>
    </section>
  );
};

export default News;
