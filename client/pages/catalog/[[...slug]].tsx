import Head from 'next/head';
import Link from 'next/link';

import ProductCard from '@/common/components/ProductCard';
import Filterbar from '@/common/components/Filterbar';

import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProductResponseDto } from '@/modules/catalog/models/ProductResponseDto';
import { getProducts } from '@/modules/catalog/services/ProductService';
import { GetServerSideProps } from 'next';
import { getCategoryBySlug } from '@/modules/catalog/services/CategoryService';
import { CategoryResponseDto } from '@/modules/catalog/models/CategoryResponseDto';
import { routes } from '@/utils/routes';



interface Props {
  category: CategoryResponseDto;
}

const Catalog = ({category}: Props) => {
  const [isFilterbarOpen, setIsFilterbarOpen] = useState(false);
  const router = useRouter();
  const { slug } = router.query;
  const [products, setProducts] = useState<ProductResponseDto[]>([])
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const crumb: BreadcrumbModel[] = [
    {
      pageName: 'Home',
      url: routes.home,
    },
    {
      pageName: 'Catalog de produse',
      url: routes.catalog.root,
    },
    ...(category ? [{
      pageName: category.contents[0].title ?? '',
      url:  routes.catalog.bySlug(category.contents[0].slug ?? ''),
    }] : [])
      
  ];

  const hadnleOpenFilterbar = () => setIsFilterbarOpen(true);
  useEffect(() => {
    setLoading(true);
    getProducts({
      page: 1, 
      limit: 20,
      ...(category ? { categoryId: category.id } : {})
    })
    .then((response) => {
      setProducts(response.items);
      setTotalProducts(response.total);
    })
    .catch((error) => {
      setProducts([]);
      setTotalProducts(0);
    })
    setLoading(false);
  }, [category]);

  return (
    <>
      <Head>
        <title>FRESCO | Catalog {category ? `| ${category.contents[0].title}` : ''} </title>
      </Head>
      <section className="catalog section">
        <div className="catalog-container">
          <div className="catalog__banner">
            <h1 className="catalog__main-title">
              Catalog de produse
            </h1>
            <BreadcrumbComponent props={crumb} />
          </div>
        </div>
        <div className="container">
          <div className="catalog__inner">
            <Filterbar isOpen={isFilterbarOpen} onClose={() => setIsFilterbarOpen(false)} />
            <div className="catalog__content">
              <div className="catalog__nav">
                <p className="catalog__total">
                  {totalProducts} produse găsite
                </p>
                <button className="catalog__open-filterbar" type="button" onClick={hadnleOpenFilterbar}>
                  <span className="sr-only">open filterbar</span>
                </button>
                <div className="catalog__select-box">
                  <select className="catalog__select input">
                    <option value="1">Relevanță</option>
                    <option value="2">Data publicării</option>
                    <option value="3">Reducere</option>
                    <option value="4">Preț: de la mare la mic</option>
                    <option value="5">Pret: de la mic la mare</option>
                    <option value="6">Denumire, crescătoare</option>
                    <option value="7">Denumire, descrescătoare</option>
                  </select>
                </div>
              </div>
              <ul className="catalog__list">
                {products.map(product => {
                  return (
                    <li key={product.id} className="catalog__item">
                      <ProductCard product={product} />
                    </li> 
                  );
                })}

              </ul>

              <ul className="pagination">
                <li className="pagination__item">
                  <Link className="pagination__link active" href="#">
                    1
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    2
                  </Link>
                </li>
                <li className="pagination__item">
                    ...
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    9
                  </Link>
                </li>
                <li className="pagination__item">
                  <Link className="pagination__link" href="#">
                    10
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  
  if (!slug)  return {
      props: {
        category: null,
      },
    };
  
  const category = await getCategoryBySlug(slug); 

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
};

export default Catalog;
