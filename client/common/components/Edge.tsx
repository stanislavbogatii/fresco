import React from 'react';

import Image from 'next/image';

import firstEdge from '../../asset/icons/edge-1.svg';

const Edge = () => {
  return (
    <article className="edge">
      <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
      <h3 className="edge__title">Lorem ipsum dolor sit amet.</h3>
      <span className="edge__text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quos.</span>
    </article>
  );
};

export default Edge;
