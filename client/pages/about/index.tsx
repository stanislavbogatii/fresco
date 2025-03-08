import Head from 'next/head';

import AboutContent from './components/AboutContent';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <AboutContent />
    </>
  );
};

export default About;
