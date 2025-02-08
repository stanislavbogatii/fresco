import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import firstSlide from '../../../asset/images/main-slider/slide-1.jpg';
import secondSlide from '../../../asset/images/main-slider/slide-2.webp';
import thirdSlide from '../../../asset/images/main-slider/slide-3.webp';
import fourthSlide from '../../../asset/images/main-slider/slide-4.jpg';
import fifthSlide from '../../../asset/images/main-slider/slide-5.webp';
import sixthSlide from '../../../asset/images/main-slider/slide-6.jpg';

const Banner = () => {
  return (
    <div className="container-fluid section">
      <div className="main-banner">
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
                src={fifthSlide}
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
                src={sixthSlide}
                width={936}
                height={490}
                alt="promo banner"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
