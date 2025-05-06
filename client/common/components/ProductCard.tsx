import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/modules/catalog/models/Product';

const ProductCard = ({ product }: { product: Product }) => {
  return product && product.productContent ? (
    <article className="product-card">
      <Link className="product-card__link" href={`/product/${product?.productContent[0]?.slug}`}>
        <Image
          className="product-card__img"
          width="236"
          height="236"
          src={`https://fresco.md${product?.thumbImage?.url ?? ''}`}
          alt={product?.thumbImage?.url ?? ''}
        />
      </Link>
      <h3 className="product-card__title">
        <Link href={`/product/${product?.productContent[0]?.slug}`}>{product?.productContent[0].title}</Link>
      </h3>
      <small className="product-card__article">{product.article}</small>
      <button className="product-card__btn btn-primary" type="button">
        <i className="product-card__btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M39.582 14.5837H33.332V12.5003C33.332 10.2902 32.4541 8.17057 30.8913 6.60777C29.3285 5.04497 27.2088 4.16699 24.9987 4.16699C22.7886 4.16699 20.6689 5.04497 19.1061 6.60777C17.5433 8.17057 16.6654 10.2902 16.6654 12.5003V14.5837H10.4154C9.86283 14.5837 9.33293 14.8032 8.94223 15.1939C8.55153 15.5846 8.33203 16.1145 8.33203 16.667V39.5837C8.33203 41.2413 8.99051 42.831 10.1626 44.0031C11.3347 45.1752 12.9244 45.8337 14.582 45.8337H35.4154C37.073 45.8337 38.6627 45.1752 39.8348 44.0031C41.0069 42.831 41.6654 41.2413 41.6654 39.5837V16.667C41.6654 16.1145 41.4459 15.5846 41.0552 15.1939C40.6645 14.8032 40.1346 14.5837 39.582 14.5837ZM20.832 12.5003C20.832 11.3953 21.271 10.3354 22.0524 9.55405C22.8338 8.77265 23.8936 8.33366 24.9987 8.33366C26.1038 8.33366 27.1636 8.77265 27.945 9.55405C28.7264 10.3354 29.1654 11.3953 29.1654 12.5003V14.5837H20.832V12.5003ZM37.4987 39.5837C37.4987 40.1362 37.2792 40.6661 36.8885 41.0568C36.4978 41.4475 35.9679 41.667 35.4154 41.667H14.582C14.0295 41.667 13.4996 41.4475 13.1089 41.0568C12.7182 40.6661 12.4987 40.1362 12.4987 39.5837V18.7503H16.6654V20.8337C16.6654 21.3862 16.8849 21.9161 17.2756 22.3068C17.6663 22.6975 18.1962 22.917 18.7487 22.917C19.3012 22.917 19.8311 22.6975 20.2218 22.3068C20.6125 21.9161 20.832 21.3862 20.832 20.8337V18.7503H29.1654V20.8337C29.1654 21.3862 29.3849 21.9161 29.7756 22.3068C30.1663 22.6975 30.6962 22.917 31.2487 22.917C31.8012 22.917 32.3311 22.6975 32.7218 22.3068C33.1125 21.9161 33.332 21.3862 33.332 20.8337V18.7503H37.4987V39.5837Z" fill="#fff" />
          </svg>
        </i>
        <span>Intra in cont</span>
      </button>
    </article>
  ) : null;
};

export default ProductCard;
