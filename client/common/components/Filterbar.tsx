import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { CategoryResponseDto } from '@/modules/catalog/models/CategoryResponseDto';
import { getCategories } from '@/modules/catalog/services/CategoryService';

type AccordionState = {
  [key: string]: boolean;
};

interface FilterbarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Filterbar: React.FC<FilterbarProps> = ({isOpen, onClose}) => {
  const [categories, setCategories] = useState<CategoryResponseDto[]>();

  const [accordionState, setAccordionState] = useState<AccordionState>({
    ingrediente: true,
    semipreparate: true,
    brutarie: true,
    deserturi: true,
    bauturi: true,
    echipamente: true,
    servire: true,
    consumabile: true,
  });

  useEffect(() => {
    getCategories().then((data) => {
      console.log(data)
      setCategories(data.items);
      let newObjState: AccordionState = {};
      data.items.forEach((category) => {
        newObjState[category.id] = false;
      })
      setAccordionState(newObjState);
    });
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, []);

  const toggleAccordion = (item: number) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <aside className={`filterbar ${isOpen ? 'active' : ''}`}>
      <div className="filterbar__head">
        <strong className="filterbar__head-title">
          Filtre
        </strong>
        <button className="filterbar__close" type="button" onClick={onClose}>
          <span className="sr-only">close filters</span>
        </button>
      </div>
      <ul className="filterbar__components">
        <li className="filterbar__component">
          <strong className="filterbar__title">
            Categorii
          </strong>
          <ul className="filterbar__list">
            {categories?.filter(category => category.parentId === null).map((category, key) => {
              const hasSubcategories = categories.some((category_c) => category_c.parentId === category.id);
              return (
                <li key={key} className="filterbar__item">
                  <button
                    className={`filterbar__btn filterbar__btn--consumabile ${accordionState[category.id] ? 'active' : ''
                      } ${!hasSubcategories ? 'empty' : ''}`}
                    type="button"
                    onClick={() => toggleAccordion(category.id)}
                  >
                    {category.contents[0]?.title}
                  </button>
                  {categories.find((category_c) => category_c.parentId === category.id) &&
                    <div className={`filterbar__accordion ${accordionState[category.id] ? 'active' : ''}`}>
                      <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
                        {categories.filter(category_c => category_c.parentId === category.id).map((category_c, key) => {
                          return (
                            <li key={key} className="filterbar__accordion-item">
                              <Link className="filterbar__accordion-link" href="#">
                                {category_c.contents[0].title}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  }

                </li>
              )
            })}
            {/* <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--ingrediente ${
              accordionState.ingrediente ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('ingrediente')}
          >
            Ingrediente pentru gatit
          </button>
          <div className={`filterbar__accordion ${accordionState.ingrediente ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Carne
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Peste si fructe de mare
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Legume si fructe
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Lactate si oua
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Bacanie
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Produse pe baza de plante
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--semipreparate ${
              accordionState.semipreparate ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('semipreparate')}
          >
            Semipreparate si solutii
          </button>
          <div className={`filterbar__accordion ${accordionState.semipreparate ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Sous-vide
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Pizza si paste
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate cu carne
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate cu peste
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate cu fructe de mare
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate cu legume
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate cu branzeturi si oua
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Semipreparate pe baza de plante
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Mancaruri etnice
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Burgeri vegetarieni
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--brutarie ${
              accordionState.brutarie ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('brutarie')}
          >
            Brutarie si patiserie
          </button>
          <div className={`filterbar__accordion ${accordionState.brutarie ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Brutarie
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Patiserie
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Gogosi
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Aluat si drojdie
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--deserturi ${
              accordionState.deserturi ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('deserturi')}
          >
            Deserturi si inghetata
          </button>
          <div className={`filterbar__accordion ${accordionState.deserturi ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Inghetata ambalata individual
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Inghetata la vascheta
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Deserturi
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Marci de TOP
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--bauturi ${
              accordionState.bauturi ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('bauturi')}
          >
            Bauturi racoritoare
          </button>
          <div className={`filterbar__accordion ${accordionState.bauturi ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Ceai
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--echipamente ${
              accordionState.echipamente ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('echipamente')}
          >
            Echipamente si ustensile
          </button>
          <div className={`filterbar__accordion ${accordionState.echipamente ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Ustensile si accesorii bucatarie
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Echipamente de preparare calda
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Echipamente si utilaje frigorifice
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Mobilier inox
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Echipamente de prelucrare si procesare
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--servire ${
              accordionState.servire ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('servire')}
          >
            Servire si prezentare
          </button>
          <div className={`filterbar__accordion ${accordionState.servire ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Decorare
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Vesela
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Servire bauturi
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Tacamuri
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="filterbar__item">
          <button
            className={`filterbar__btn filterbar__btn--consumabile ${
              accordionState.consumabile ? 'active' : ''
            }`}
            type="button"
            onClick={() => toggleAccordion('consumabile')}
          >
            Consumabile
          </button>
          <div className={`filterbar__accordion ${accordionState.consumabile ? 'active' : ''}`}>
            <ul className="filterbar__accordion-list" style={{ minHeight: '0' }}>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Folii, pungi, saci
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Detergenti profesionali
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Protectie si dezinfectare
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Sapun si comestice
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Articole curatenie si menaj
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Consumabile hartie
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Odorizanti
                </Link>
              </li>
              <li className="filterbar__accordion-item">
                <Link className="filterbar__accordion-link" href="#">
                  Ambalaje de unica folosinta
                </Link>
              </li>
            </ul>
          </div>
        </li> */}
          </ul>
        </li>
        <li className="filterbar__component">
          <strong className="filterbar__title">
            Proprietati
          </strong>
          <ul className="filterbar__elements">
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Bogat in proteine (1)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">De post (5)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Fara arome artificiale (5)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Fara coloranti (5)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Fara lactoza (5)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Vegan (5)</span>
              </label>
            </li>
          </ul>
        </li>
        <li className="filterbar__component">
          <strong className="filterbar__title">
            Tip local
          </strong>
          <ul className="filterbar__elements">
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Bistro (105)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Burgerie (55)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Cafenea (1)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Cantina (83)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Catering (174)</span>
              </label>
            </li>
            <li className="filterbar__element">
              <label>
                <input className="filterbar__checkbox checkbox" type="checkbox" />
                <span className="filterbar__element-checkbox"></span>
                <span className="filterbar__element-text">Evenimente (140)</span>
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Filterbar;
