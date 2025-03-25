import { NextPage } from 'next';

import { Banner, Category, FeaturedProduct } from 'modules/home/components';

import Filterbar from '@/common/components/Filterbar';
import Edges from '@/modules/home/components/Edges';
import Popular from '@/modules/home/components/Popular';
import News from '@/modules/home/components/News';
import Partners from '@/modules/home/components/Partners';

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <div className="homepage-container__inner container">
        <Filterbar />
        <div className="homepage-container__content">
          <Edges />
          <Popular />
          <Category />
          <FeaturedProduct />
          <Partners />
          <News />
        </div>
      </div>
    </>
  );
};
export default Home;
