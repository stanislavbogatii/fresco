import React from 'react';

import Edge from '@/common/components/Edge';

const Edges = () => {
  return (
    <section className="edges section">
          <div className="">
            <h2 className="title sr-only">Avantajele noastre</h2>
            <ul className="edges__list flex justify-around items-center gap-5">
              <li className="edges__item">
                <Edge />
              </li>
              <li className="edges__item">
                <Edge />
              </li>
              <li className="edges__item">
                <Edge />
              </li>
              <li className="edges__item">
                <Edge />
              </li>
            </ul>
          </div>
        </section>
  );
};

export default Edges;
