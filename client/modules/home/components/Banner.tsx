import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import firstSlide from '../../../asset/images/main-slider/slide-1.webp';
import secondSlide from '../../../asset/images/main-slider/slide-2.webp';
import thirdSlide from '../../../asset/images/main-slider/slide-3.webp';
import fourthSlide from '../../../asset/images/main-slider/slide-4.webp';

const Banner = () => {
  return (
    <section className="main-banner section">
      <div className="container-fluid">
        <div className="main-banner__inner">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            effect={'coverflow'}
            slidesPerView={2}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 0,
                },
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                },
              },
            }}
          >
            <SwiperSlide>
              <Link className="swiper-link" href="#">
                <Image
                  className="swiper-img"
                  src={firstSlide}
                  width={936}
                  height={490}
                  alt="promo banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper-link" href="#">
                <Image
                  className="swiper-img"
                  src={secondSlide}
                  width={936}
                  height={490}
                  alt="promo banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper-link" href="#">
                <Image
                  className="swiper-img"
                  src={thirdSlide}
                  width={936}
                  height={490}
                  alt="promo banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper-link" href="#">
                <Image
                  className="swiper-img"
                  src={fourthSlide}
                  width={936}
                  height={490}
                  alt="promo banner"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper-link" href="#">
                <Image
                  className="swiper-img"
                  src={thirdSlide}
                  width={936}
                  height={490}
                  alt="promo banner"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
