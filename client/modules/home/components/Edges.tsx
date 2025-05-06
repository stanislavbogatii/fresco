import React from 'react';

import Edge from '@/common/components/Edge';
import Image from 'next/image';

import firstEdge from '../../../asset/icons/edge-1.svg';
const Edges = () => {
  return (
    <section className="edges section">
      <h2 className="title">De ce noi?</h2>
      <ul className="edges__list">
        <li className="edges__item">
          <article className="edge">
            <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
            <div className="edge__box">
              <h3 className="edge__title">Colaborare Simplificată</h3>
              <span className="edge__text">Comunicare directă între restaurante și furnizori.</span>
            </div>
          </article>
        </li>
        <li className="edges__item">
          <article className="edge">
            <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
            <div className="edge__box">
              <h3 className="edge__title">Reducerea Pierderilor</h3>
              <span className="edge__text">Optimizarea aprovizionării pentru economisirea resurselor.</span>
            </div>
          </article>
        </li>
        <li className="edges__item">
          <article className="edge">
            <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
            <div className="edge__box">
              <h3 className="edge__title">Automatizare</h3>
              <span className="edge__text">Comenzi rapide printr-un sistem ușor de utilizat.</span>
            </div>
          </article>
        </li>
        <li className="edges__item">
          <article className="edge">
            <Image className="edge__img" src={firstEdge} width={28} height={28} alt="edge" />
            <div className="edge__box">
              <h3 className="edge__title">Transparență</h3>
              <span className="edge__text">Informații clare despre produse și prețuri.</span>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Edges;
