
import { useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';


import ChooseImages from './ChooseImages';
import ChooseThumbnail from './ChooseThumbnail';
import { ProductResponseDto } from '@/modules/catalog/models/ProductResponseDto';
import { CreateProductDto } from '@/modules/catalog/models/CreateProductDto';

type Props = {
  product?: ProductResponseDto;
  setValue: UseFormSetValue<CreateProductDto>;
};

const ProductImage = ({ product, setValue }: Props) => {
  useEffect(() => {
    if (product?.thumbImage) setValue('thumbImage', product.thumbImage);
    if (product?.images) setValue('images', product.images);
  }, []);

  return (
    <>
      <div className="mb-3">
        <h4 className="mb-3">Thumbnail</h4>
        <ChooseThumbnail
          id="main-thumbnail"
          image={
            product?.thumbImage
              ? { id: +product.thumbImage.id, url: product.thumbImage.url }
              : null
          }
          setValue={setValue}
          name="thumbnailMedia"
        />
      </div>
      <div className="mb-3">
        <h4 className="mb-3">ProductResponseDto Image</h4>

        <ChooseImages
          id="main-product-images"
          images={
            product?.images
              ? product.images.map((image: any) => ({
                  id: image.id,
                  url: image.url,
                }))
              : []
          }
          setValue={setValue}
          name="images"
        />
      </div>
    </>
  );
};

export default ProductImage;
