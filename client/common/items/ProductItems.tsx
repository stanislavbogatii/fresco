import { Product } from '@/modules/catalog/models/Product';
import ProductCard from 'common/components/ProductCard';
import { ProductThumbnail } from 'modules/catalog/models/ProductThumbnail';

type Props = {
  products: Product[];
};

const ProductItems = ({ products }: Props) => {
  return (
    <>
      {products.length > 0 &&
        products.map((product) => <ProductCard product={product} key={product.id} />)}
    </>
  );
};

export default ProductItems;
