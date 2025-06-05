import ProfileLayout from '@/common/components/ProfileLayout';
import { useUserInfoContext } from '@/context/UserInfoContext';
import { ProductResponseDto } from '@/modules/catalog/models/ProductResponseDto';
import { getProducts } from '@/modules/catalog/services/ProductService';
import { routes } from '@/utils/routes';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ProfileOffer = () => {
  const { user } = useUserInfoContext();
  const [products, setProducts] = useState<ProductResponseDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.company) {
      setLoading(true);
      getProducts({companyId: user.company.id})
        .then((data) => {
          setProducts(data.items);
        })
        .catch((error) => {
          setProducts([]);
        });
      setLoading(false);
    }
  }, [user])

  return (
    <ProfileLayout title="Lista mea de oferte">
      <div className="profile-offer">
        <div className="profile-offer__inner">
          <div className="profile-offer__box">
            <ul className="profile-offer__list">
              <li className="profile-offer__list-item">Nume </li>
              <li className="profile-offer__list-item">Articol</li>
              <li className="profile-offer__list-item">Cod Ref.</li>
              <li className="profile-offer__list-item">Categorie</li>
              <li className="profile-offer__list-item">Pret</li>
              <li className="profile-offer__list-item">Reducere</li>
              {/* <li className="profile-offer__list-item">Creat</li> */}
            </ul>
          </div>
        </div>
        {products.length ?
        products.map((product) => {
          return (
            <div key={product.id} className="profile-offer__inner">
              <div className="profile-offer__box">
                <ul className="profile-offer__list">
                  <li className="profile-offer__list-item">{product.contents[0]?.title} </li>
                  <li className="profile-offer__list-item">{product.article}</li>
                  <li className="profile-offer__list-item">{product.codeRef}</li>
                  <li className="profile-offer__list-item">{product?.category?.title ?? '--'}</li>
                  <li className="profile-offer__list-item">{product.price} mdl</li>
                  <li className="profile-offer__list-item">{product.oldPrice ? product.oldPrice - product.price : 0} mdl</li>
                  {/* <li className="profile-offer__list-item">{new Date(product.createdAt).toISOString()}</li> */}
                </ul>
              </div>
            </div>
          )
        })
        : 
        <>
          <span className="profile-offer__text">Nimic de arătat.</span>
        </>
        }
        <Link className="profile-offer__link btn" href={routes.profile_offer_create}>
          Nou
        </Link>
      </div>
      <Link className="profile__link" href={routes.profile}>
        Profil
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOffer;
