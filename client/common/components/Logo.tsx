import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../asset/logos/LOGO AFISARE MARE.svg';

interface LogoProps {
  profile?: boolean;
}

const Logo = ({profile}: LogoProps) => {
  return (
    <Link className={`logo ${profile ? 'logo-small' : ''}`} href="/">
      <Image src={logo} width={162} height={60} alt="logo" />
    </Link>
  );
};

export default Logo;
