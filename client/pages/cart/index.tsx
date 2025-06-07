import Link from 'next/link';
import Image from 'next/image';

import { routes } from '@/utils/routes';

import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';

import cartImage from '@/asset/images/cart-empty.svg';
import Head from 'next/head';
import CartItem from '@/modules/cart/components/CartItem';
import { useCallback, useEffect, useState } from 'react';
import { useCartContext } from '@/context/CartContext';
import { CartItemResponseDto } from '@/modules/cart/models/CartItemResponseDto';
import ConfirmationDialog from '@/common/components/dialog/ConfirmationDialog';
import { toastError, toastSuccess } from '@/modules/catalog/services/ToastService';
import { set } from 'react-hook-form';

const crumb: BreadcrumbModel[] = [
  {
    pageName: 'Home',
    url: '/',
  },
  {
    pageName: 'Coș',
    url: '/cart',
  },
];

const Cart = () => {
  const { cart, updateQuantity, removeItem, increaseQuantity, decreaseQuantity } = useCartContext();
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | undefined>();
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setSelectedItems(new Set());
  }, [cart?.items])

  const handleSelectCartItemChange = useCallback((productId: number): void => {
    setSelectedItems(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(productId)) {
        newSelected.delete(productId);
      } else {
        newSelected.add(productId);
      }
      return newSelected;
    });
  }, []);

  const handleIncreaseQuantity = useCallback(async (productId: number) => {
    setIsUpdating(true);
    await increaseQuantity(productId);
    setIsUpdating(false);
  }, [increaseQuantity]);

  const handleDecreaseQuantity = useCallback(async (productId: number) => {
    setIsUpdating(true);
    await decreaseQuantity(productId)
    setIsUpdating(false);
  }, [decreaseQuantity]);

  const handleDeleteItem = () => {
    removeItem(itemToDelete!)
    .then(() => {
      toastSuccess('Produsul a fost sters din cos');
      setIsDialogOpen(false);
      setItemToDelete(undefined);
    })
    .catch((error) => {
      toastError(error.message);
    });
  }

  const handleOpenDeleteConfirmationModal = (itemId: number) => {
    setIsDialogOpen(true);
    setItemToDelete(itemId);
  } 

  const handleCloseDeleteConfirmationModal = () => {
    setIsDialogOpen(false);
  }

  const handleCartItemQuantityKeyDown = (itemId: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      updateQuantity(itemId, Number(event.currentTarget.value));
    }
  }

  // const handleCartItemQuantityKeyDown = (itemId: number, event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     updateQuantity(itemId, Number(event.currentTarget.value));
  //   }
  // }

  return (
    <>
      <ConfirmationDialog 
      ok={handleDeleteItem} 
      isOpen={isDialogOpen}
      okText='Da'
      cancelText='Nu'
      cancel={handleCloseDeleteConfirmationModal}>
        <p>Esti sigur ca vrei sa stergi acest produs din cos?</p>
      </ConfirmationDialog>

      <Head>
        <title>FRESCO | Coș</title>
      </Head>
      <section className="cart section">
        <div className="container">
          <BreadcrumbComponent props={crumb} />
          {cart?.items?.length ? 
            <table className='w-full'>
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qantity</th> 
                  <th>Delete</th> 
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {cart?.items.map(item => {
                  return (
                    <CartItem 
                    key={item.productId} 
                    item={item} 
                    isLoading={isUpdating} 
                    isSelected={selectedItems.has(item.productId)}
                    handleSelectCartItemChange={handleSelectCartItemChange}
                    handleDecreaseQuantity={(itemId) => handleDecreaseQuantity(itemId)} 
                    handleIncreaseQuantity={(itemId) => handleIncreaseQuantity(itemId)} 
                    handleCartItemQuantityOnBlur={(itemId, event) => console.log('he')} 
                    handleCartItemQuantityKeyDown={(itemId, event) => handleCartItemQuantityKeyDown(itemId, event)} 
                    handleOpenDeleteConfirmationModal={(itemId) => handleOpenDeleteConfirmationModal(itemId)} />
                  );
                })}
              </tbody>
            </table> :
          <div className="cart__empty">
            <h1 className="cart__title">
              Coșul tău
            </h1>
            <p className="cart__text">
              Probabil că nu ați comandat încă nimic.
            </p>
            <Image className="cart__img" src={cartImage} width={300} height={300} alt="cart empty" />
            <Link className="cart__link btn-primary" href={routes.catalog.root}>După cumpărături</Link>

          </div>
          }
        </div>
      </section>
    </>
  )
}

export default Cart;
