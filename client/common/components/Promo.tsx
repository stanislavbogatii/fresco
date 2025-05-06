import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface PromoProps {
  image: StaticImageData;
  alt?: string;
}

const Promo: React.FC<PromoProps> = ({ image, alt = 'promo' }) => {
  return (
    <article className="promo">
      <Link href="#" className="promo__link">
        <Image className="promo__img" src={image} alt={alt} />
      </Link>
    </article>
  );
};

export default Promo;