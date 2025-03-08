import Category from '@/common/components/Category';
import Promo from '@/common/components/Promo';

const Categories = () => {
  return (
    <section className="section categories">
      <div className="">
        <h2 className="title sr-only">Promo section</h2>
        <ul className="categories__promo">
          <li className="categories__elem">
            <Promo />
          </li>
          <li className="categories__elem">
            <Promo />
          </li>
          <li className="categories__elem">
            <Promo />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
