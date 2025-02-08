import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../asset/images/logo.svg';

const Logo = () => {
  return (
    <Link className="logo" href="/">
      <Image src={logo} width={162} height={30} alt="logo" />
    </Link>
  );
};

export default Logo;
