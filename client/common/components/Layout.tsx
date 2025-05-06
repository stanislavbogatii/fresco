import Head from 'next/head';

import AuthenticationInfo from './AuthenticationInfo';
import Footer from './common/Footer';
import Header from './common/Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>FRESCO</title>
        <meta name="description" content="Yet another shop storefront" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </Head>
      <div className="wrapper">
        <Header>
          <AuthenticationInfo />
        </Header>
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
