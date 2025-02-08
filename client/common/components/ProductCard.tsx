import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import productImage from '../../asset/images/products/1.webp'
import frozenIcon from '../../asset/icons/frozen-ico.svg';

const ProductCard = () => {
  return (
    <article className="product-card">
      <Link className="product-card__link" href="#">
        <Image
          className="product-card__img"
          width="236"
          height="236"
          src={productImage}
          alt="Aripi de pui pane"
        />
      </Link>
      <small className="product-card__article">CO1621 Edenia Chef</small>
      <h3 className="product-card__title">
        <Link href="#">Aripi de pui pane</Link>
      </h3>
      <div className="product-card__info">
        <span className="product-card__weight flex items-center">1kg</span>
        <span className="product-card__frozen">
          <Image
            className="product-card__frozen"
            width="21"
            height="24"
            src={frozenIcon}
            alt="frozen product"
          />
        </span>
      </div>
      <button className="product-card__btn" type="button">
        <i className="product-card__btn-icon">
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22,8.5H19.535l-3.7-5.555a1,1,0,0,0-1.664,1.11L17.132,8.5H6.868L9.832,4.055a1,1,0,0,0-1.664-1.11L4.465,8.5H2a1,1,0,0,0,0,2H3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3v-8h1a1,1,0,0,0,0-2Zm-3,10a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1v-8H19ZM7,17V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm4,0V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm4,0V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Z" />
          </svg>
        </i>
        <span>Intra in cont</span>
      </button>
    </article>
  );
};

export default ProductCard;
