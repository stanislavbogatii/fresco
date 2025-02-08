import Category from '@/common/components/Category';
import Promo from '@/common/components/Promo';

const Categories = () => {
  return (
    <section className="section categories">
      <div className="container">
        <h2 className="title categories__title">Tip produs</h2>
        <ul className="categories__list">
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
          <li className="categories__item">
            <Category />
          </li>
        </ul>
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
