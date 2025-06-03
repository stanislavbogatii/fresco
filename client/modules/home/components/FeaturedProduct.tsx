'use client';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { getProducts } from '@/modules/catalog/services/ProductService';
import { ProductResponseDto } from '@/modules/catalog/models/ProductResponseDto';
import ProductCard from '@/common/components/ProductCard';

import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedProduct = () => {
  const [products, setProducts] = useState<ProductResponseDto[]>([]);

  const loadProducts = async () => {
    const res = await getProducts(1, 20);
    console.log(res);
    setProducts(res.items);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="featured section">
      <Container className="featured-product-container">
        <h2 className="title">Featured Products</h2>

        {products?.length > 0 && (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProduct;
