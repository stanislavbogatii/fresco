import React from 'react';
import Image from 'next/image';

import RegisterForm from '@/common/components/RegisterForm';

import registerBanner from '../../../asset/images/register-banner.png';

const CreateProfile = () => {
  return (
    <section className="section register">
      <div className="container">
        <Image
          className="banner"
          src={registerBanner}
          width={1440}
          height={295}
          alt="register banner"
        />
        <div className="register__content">
          <p className="register__text">
            Daca vrei sa plasezi o comanda pe bocado.ro, vei avea nevoie de cont. E simplu si merge
            repede, iar dupa ce l-ai creat, vei putea incepe cumparaturile pe site.
          </p>
          <p className="register__text">
            Daca nu ai cont pe bocado.ro, completeaza formularul de mai jos.
          </p>
          <p className="register__text">Acest formular este destinat numai persoanelor juridice.</p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
};

export default CreateProfile;
