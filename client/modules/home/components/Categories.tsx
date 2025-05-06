import Category from '@/common/components/Category';
import Promo from '@/common/components/Promo';

import promo1 from '@/asset/images/promo/1.svg';
import promo2 from '@/asset/images/promo/2.svg';
import promo3 from '@/asset/images/promo/3.svg';

const promoImages = [
  { image: promo1, alt: 'First promo' },
  { image: promo2, alt: 'Second promo' },
  { image: promo3, alt: 'Third promo' },
];

const Categories = () => {
  return (
    <section className="section categories">
      <div className="">
        <h2 className="title sr-only">Promo section</h2>
        <ul className="categories__promo">
          {promoImages.map((promo, index) => (
            <li className="categories__elem" key={index}>
              <Promo image={promo.image} alt={promo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
