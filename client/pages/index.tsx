import { NextPage } from 'next';

import { Banner, Category, FeaturedProduct } from 'modules/home/components';

import Edges from '@/modules/home/components/Edges'; 
import Popular from '@/modules/home/components/Popular';
import News from '@/modules/home/components/News';
import Partners from '@/modules/home/components/Partners';

const Home: NextPage = () => {
  return (
    <div className="homepage-container">

      <Banner />

      <Edges />

      <Popular />

      <Category />

      <FeaturedProduct />

      <News />

      <Partners />

     </div>
  );
};
export default Home;
