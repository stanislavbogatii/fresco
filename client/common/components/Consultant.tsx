import React from 'react';

import Image from 'next/image';

import consultant from 'asset/images/consultant.jpg';

const Consultant = () => {
  return (
    <div className="consultant">
      <Image className="consultant__img" src={consultant} width={64} height={64} alt="Stanislav" />
      <p className="consultant__text">Bună! Sunt Stanislav. Cu ce te pot ajuta?</p>
    </div>
  );
};

export default Consultant;
