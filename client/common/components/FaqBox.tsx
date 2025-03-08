import React from 'react';

import Link from 'next/link';

const FaqBox = () => {
  return (
    <div className="faq-box">
      <strong className="faq-box__title">Raspunsul la intrebarea ta poate exista deja aici</strong>
      <Link className="faq-box__link" href="/about">
        Intrebari frecvente
      </Link>
      <p className="faq-box__text">
        Daca nu gasesti informatia pe care o cauti in sectiunea Intrebari frecvente, ne poti
        contacta telefonic sau prin formularul de mai jos.
      </p>
    </div>
  );
};

export default FaqBox;
