import Link from 'next/link';
import { FC, useState } from 'react';
import ImageWithFallBack from '@/common/components/ImageWithFallback';
import { CartItemGetDetailsVm } from '@/modules/cart/models/CartItemGetVm';
import { formatPrice } from 'utils/formatPrice';
import { PromotionVerifyResult } from '@/modules/promotion/model/Promotion';
import { CartItemResponseDto } from '../models/CartItemResponseDto';
import { routes } from '@/utils/routes';

interface CartItemProps {
  item: CartItemResponseDto;
  isLoading: boolean;
  isSelected: boolean;
  promotionApply?: PromotionVerifyResult;
  handleSelectCartItemChange: (productId: number) => void;
  handleDecreaseQuantity: (itemId: number) => void;
  handleIncreaseQuantity: (itemId: number) => void;
  handleCartItemQuantityOnBlur: (
    productId: number,
    event: React.FocusEvent<HTMLInputElement>
  ) => void;
  handleCartItemQuantityKeyDown: (
    itemId: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  handleOpenDeleteConfirmationModal: (itemId: number) => void;
}
const calculateProductPrice = (
  item: CartItemGetDetailsVm,
  promotionApply?: PromotionVerifyResult
) => {
  let discount = 0;

  // Check if discountType is 'PERCENTAGE' and calculate accordingly
  if (promotionApply?.discountType === 'PERCENTAGE') {
    discount = (item.price * item.quantity * (promotionApply.discountValue ?? 0)) / 100;
  } else {
    discount = promotionApply?.discountValue ?? 0;
  }

  return formatPrice(item.price * item.quantity - discount);
};

const CartItem: FC<CartItemProps> = ({
  item,
  isLoading,
  isSelected,
  promotionApply,
  handleSelectCartItemChange,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleCartItemQuantityOnBlur,
  handleCartItemQuantityKeyDown,
  handleOpenDeleteConfirmationModal,
}) => {
  return (
    <tr key={item.quantity.toString() + item.productId.toString()}>
      <td>
        <label className="item-checkbox-label" htmlFor="select-item-checkbox">
          {''}
          <input
            className="form-check-input item-checkbox"
            type="checkbox"
            checked={isSelected}
            onChange={() => handleSelectCartItemChange(item.productId)}
          />
        </label>
      </td>
      <td className="cart__product__item d-flex align-items-center gap-2">
        <div>
          <Link
            href={{
              pathname: '/redirect',
              query: { productId: item.productId },
            }}
          >
            <ImageWithFallBack
              src={`https://fresco.md${item?.productThumbnail ?? ''}`}
              alt={item.productTitle}
              style={{ width: '120px', height: '120px', cursor: 'pointer', objectFit: 'cover' }}
            />
          </Link>
        </div>  
        <div className="cart__product__item__title pt-0">
          <Link
            href={{
              pathname: routes.product.bySlug(item.productSlug),
            }}
          >
            <h6 className="product-link">{item.productTitle}</h6>
          </Link>
        </div>
      </td>
      <td className="cart__price">
        {promotionApply?.productId === item.productId && (
          <div style={{ textDecorationLine: 'line-through' }}>{formatPrice(item.productPrice)}</div>
        )}

        <div>
          {
            promotionApply?.discountType === 'PERCENTAGE'
              ? formatPrice(item.productPrice - item.productPrice * (promotionApply.discountValue / 100)) // Calculate percentage discount
              : formatPrice(item.productPrice - (promotionApply?.discountValue ?? 0)) // Fixed discount
          }
        </div>
      </td>
      <td className="cart__quantity">
        <div className="pro-qty">
          <div className={`quantity buttons_added ${isLoading ? 'disabled' : ''}`}>
            <button
              id="minus-button"
              type="button"
              className="minus"
              onClick={() => handleDecreaseQuantity(item.id)}
              disabled={isLoading}
            >
              -
            </button>

            <input
              id="quanity"
              type="number"
              step="1"
              min="1"
              max=""
              name="quantity"
              defaultValue={item.quantity}
              onBlur={(e) => handleCartItemQuantityOnBlur(item.id, e)}
              onKeyDown={(e) => handleCartItemQuantityKeyDown(item.id, e)}
              title="Qty"
              className="input-text qty text"
              disabled={isLoading}
            />
            <button
              id="plus-button"
              type="button"
              className="plus"
              onClick={() => {handleIncreaseQuantity(item.id)}}
              disabled={isLoading}
            >
              +
            </button>
          </div>
        </div>
      </td>
      {/* <td className="cart__total">{calculateProductPrice(item, promotionApply)}</td> */}
      <td className="cart__close">
        {' '}
        <button
          className="remove_product"
          onClick={() => handleOpenDeleteConfirmationModal(item.id)}
        >
          <i className="bi bi-x-lg fs-5"></i>
        </button>{' '}
      </td>
    </tr>
  );
};

export default CartItem;
