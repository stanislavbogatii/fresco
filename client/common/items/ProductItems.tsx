import { ProductResponseDto } from '@/modules/catalog/models/ProductResponseDto';
import ProductCard from 'common/components/ProductCard';
import { ProductThumbnail } from 'modules/catalog/models/ProductThumbnail';

type Props = {
  products: ProductResponseDto[];
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
