import { routes } from '@/utils/routes';
import Link from 'next/link';
import { useEffect } from 'react';

const MenuBurger = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  })

  return (
    <aside className={`menu-burger ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="menu-burger__inner">
        <button className="menu-burger__close" onClick={onClose}>
          close
        </button>
        <div className="menu-burger__content" onClick={(e) => e.stopPropagation()}>
          <ul className="menu-burger__items">
            <li className="menu-burger__item">
              <Link className="menu-burger__link" href="tel:+37362042038">
                +373 62 042 038
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--favourite" href="#">
                Favorite
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--basket" href="#">
                Coș
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--profile" href={routes.profile} onClick={onClose}>
                Contul meu
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link" href="#">
                Catalog de produse
              </Link>
            </li>
          </ul>
          <ul className="menu-burger__elements">
            <li className="menu-burger__element">
              <Link className="menu-burger__linkage" href="">
                Despre noi
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link className="menu-burger__linkage" href="">
                Furnizori
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link className="menu-burger__linkage" href="">
                Noutati
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link className="menu-burger__linkage" href="">
                Contact
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link className="menu-burger__linkage" href="">
                Oferte Promotionale
              </Link>
            </li>
          </ul>
          <div className="menu-burger__footer">
            <Link className="menu-burger__email" href="mailto:nubchenko@gmail.com">
              nubchenko@gmail.com
            </Link>
            <div className="menu-burger__box">
              <button className="localization-button">RO</button>
              <Link className="menu-burger__exit" href="#">
                Ieși
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MenuBurger;
