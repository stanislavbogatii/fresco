import React from 'react'

import Image from 'next/image';

import firstEdge from '../../asset/icons/edge-1.svg'

const Edge = () => {
  return (
    <article className="edge">
      <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
      <div className="edge__content">
        <h3 className="edge__title">Gama larga de produse</h3>
        <span className="edge__text"> De la furnizori de top </span>
      </div>
    </article>
  );
}

export default Edge
