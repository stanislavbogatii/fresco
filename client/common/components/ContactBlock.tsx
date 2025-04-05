import React from 'react';

import Link from 'next/link';

const ContactBlock = () => {
  return (
    <div className="contact-block">
      <div className="contact-block__info">
        <strong className="contact-block__title">Program comenzi telefonice si suport</strong>
        <ul className="contact-block__list">
          <li className="contact-block__list-item contact-block__list-item--time">
            Luni - Vineri: 09:00 - 18:00 <span>Sambata - Duminica: INCHIS</span>
          </li>
          <li className="contact-block__list-item contact-block__list-item--tel">
            <Link className="contact-block__list-link" href="tel:+37362042038">
              +373 62 042 038
            </Link>
          </li>
          <li className="contact-block__list-item contact-block__list-item--email">
            <Link className="contact-block__list-link" href="mailto:nubchenko@gmail.com">
              nubchenko@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact-block__details">
        <strong className="contact-block__title">Detalii companie</strong>
        <dl className="contact-block__items">
          <div className="contact-block__item">
            <dt>Cod fiscal:</dt>
            <dd>RO5052558</dd>
          </div>
          <div className="contact-block__item">
            <dt>Nr. Reg. Comert:</dt>
            <dd>J1993028161408</dd>
          </div>
          <div className="contact-block__item">
            <dt>Sediu social:</dt>
            <dd> Calea Dorobanti nr.32, etaj 6-8</dd>
          </div>
          <div className="contact-block__item">
            <dt>Banca:</dt>
            <dd>BRD - Groupe Societe Generale</dd>
          </div>
          <div className="contact-block__item">
            <dt>Cont:</dt>
            <dd>RO62 BRDE 450S V010 5030 4500</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ContactBlock;
