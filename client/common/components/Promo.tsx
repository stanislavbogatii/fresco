import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import firstPromo from '../../asset/images/promo-1.webp';

const Promo = () => {
  return (
    <article className="promo">
      <Link href="#" className="promo__link">
        <Image className="promo__img" src={firstPromo} width={950} height={506} alt="promo" />
      </Link>
    </article>
  );
};

export default Promo;
