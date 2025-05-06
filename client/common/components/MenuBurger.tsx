import Link from 'next/link';
import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
import { useUserInfoContext } from "@/context/UserInfoContext";
import { signout } from '@/modules/register/services/RegisterServcie';

const MenuBurger = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const router = useRouter();
  const { user, fetchUserInfo } = useUserInfoContext();

  const handleDeconect = async (e: any) => {
    e.preventDefault();
    await signout();
    document.cookie = "access_token=; path=/; max-age=0";
    fetchUserInfo();
    router.push(routes.home);
  }

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
          <span className="sr-only">close menu</span>
        </button>
        <div className="menu-burger__content" onClick={(e) => e.stopPropagation()}>
          <ul className="menu-burger__items">
            <li className="menu-burger__item">
              <Link className="menu-burger__link" href="tel:+37362042038">
                +373 62 042 038
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--favourite" href={routes.favorites} onClick={onClose}>
                Favorite
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--basket" href={routes.cart} onClick={onClose}>
                Coș
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--profile" href={routes.profile} onClick={onClose}>
                Contul meu
              </Link>
            </li>
            <li className="menu-burger__item">
              <Link className="menu-burger__link menu-burger__link--catalog" href={routes.catalog} onClick={onClose}>
                Catalog de produse
              </Link>
            </li>
          </ul>
          <ul className="menu-burger__elements">
            <li className="menu-burger__element">
              <Link onClick={onClose} className="menu-burger__linkage" href={routes.about}>
                Despre noi
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link onClick={onClose} className="menu-burger__linkage" href="">
                Furnizori
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link onClick={onClose} className="menu-burger__linkage" href="">
                Noutati
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link onClick={onClose} className="menu-burger__linkage" href={routes.contact}>
                Contact
              </Link>
            </li>
            <li className="menu-burger__element">
              <Link onClick={onClose} className="menu-burger__linkage" href="">
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
              {user ? (
                <Link onClick={(e) => {
                  handleDeconect(e);
                  onClose();
                }} className="menu-burger__exit" href="#">
                  Ieși
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MenuBurger;
