'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import StarRating from "@/common/components/StarRating";
import BreadcrumbComponent from '../../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../../modules/breadcrumb/model/BreadcrumbModel';

import firstSlide from '@/asset/images/products/1.webp';
import secondSlide from '@/asset/images/products/2.webp';
import thirdSlide from '@/asset/images/products/3.webp';
import fourthSlide from '@/asset/images/products/4.webp';
import Head from "next/head";

import { getProductBySlug } from "@/modules/catalog/services/ProductService";
import { useRouter } from "next/router";
import { Product as ProductModel } from "@/modules/catalog/models/Product";
import { Media } from "@/modules/media/models/Media";

const crumb: BreadcrumbModel[] = [
  { pageName: 'Home', url: '/' },
  { pageName: 'Ingrediente pentru gatit', url: '/catalog' },
  { pageName: 'Legume si fructe', url: '/catalog' },
  { pageName: 'Cartofi', url: '/catalog' },
  { pageName: 'Cartofi wedges condimentati 2.5kg', url: '/' },
];

const slides = [
  { src: firstSlide, alt: "Slide 1" },
  { src: secondSlide, alt: "Slide 2" },
  { src: thirdSlide, alt: "Slide 3" },
  { src: fourthSlide, alt: "Slide 4" },
];

const tabTitles = [
  "Specificatii",
  "Metode de preparare",
  "Ingrediente",
  "Alergeni",
  "Valori nutritionale",
  "Review-uri",
];

const AnimatedTab = ({ isActive, children }: { isActive: boolean; children: React.ReactNode }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      requestAnimationFrame(() => setShouldAnimate(true));
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  return (
    <li ref={ref} className={`product__component${shouldAnimate ? " active" : ""}`}>
      <div className="product__component-inner" style={{ minHeight: 0 }}>
        {children}
      </div>
    </li>
  );
};

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [product, setProduct] = useState<ProductModel>();
  const [images, setImages] = useState<Media[]>();
  const router = useRouter();

  const loadProduct = async (slug: string) => {
    getProductBySlug(slug.toString())
    .then((data) => {
      if (data) setProduct(data)
      let medias: Media[] = [];
      if (data.images) {
        medias = [...data.images];
      }
      if (data.thumbImage) {
        medias.push(data.thumbImage);
      }
      setImages(medias);
    })
    .catch((error) => {
      console.log(error)
    });
    // else setProduct(null);
  }

  useEffect(() => {
    const slug = router?.query?.slug;
    if (slug) loadProduct(slug.toString());
  }, [router.query]);

  return product && product.productContent && (
    <>
    <Head>
      <title>FRESCO | Cartofi wedges condimentati 2.5kg</title>
    </Head>
    <section className="product section">
      <div className="container">
        <BreadcrumbComponent props={crumb} />

        <div className="product__top">
          <div className="product__top-preview">
            <div className="product__top-active-image">
              {images && images.length ? 
              <Image
                key={`https://fresco.md${images[activeIndex].url}`}
                src={`https://fresco.md${images[activeIndex].url}`}
                width={300}
                height={300}
                alt={product?.article ?? ''}
                priority
              />
              : null}
            </div>

            <ul className="product__top-btns">
              {images?.map((image, index) => (
                <li
                  key={index}
                  className={`product__top-btn ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={`https://fresco.md${image.url}`}
                    width={100}
                    height={100}
                    alt={image.fileName}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="product__top-content">
            <h1 className="product__top-title">{product?.productContent[0]?.title}</h1>
            <span className="product__article">COD: {product?.article}</span>
            <span className="product__top-weight">60g</span>
            <StarRating />
            <p className="product__top-descr">
              {product?.productContent[0]?.description}
            </p>
            <ul className="product__top-relations">
              <li className="product__top-relation product__top-relation--ice">Produs congelat</li>
              <li className="product__top-relation product__top-relation--romania">Produs in Romania</li>
            </ul>
          </div>
        </div>

        <ul className="product__list">
          {tabTitles.map((title, index) => (
            <li
              key={index}
              className={`product__item ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
              style={{ cursor: "pointer" }}
            >
              {title}
            </li>
          ))}
        </ul>

        <ul className="product__components">
          <AnimatedTab isActive={activeTab === 0}>
            <strong className="product__title">Specificatii</strong>
            <dl className="product__dl">
              <div className="product__element">
                <dt>Temperatura</dt>
                <dd>Congelat</dd>
              </div>
              <div className="product__element">
                <dt>Tip produs</dt>
                <dd>Chifle</dd>
              </div>
              <div className="product__element">
                <dt>Tip faina si ingrediente</dt>
                <dd>Faina alba</dd>
              </div>
              <div className="product__element">
                <dt>Gramaj portie</dt>
                <dd>Mediu (40-130g)</dd>
              </div>
              <div className="product__element">
                <dt>Grad coacere</dt>
                <dd>Copt (Fully Baked)</dd>
              </div>
              <div className="product__element">
                <dt>Mod de preparare</dt>
                <dd>Decongelare</dd>
              </div>
              <div className="product__element">
                <dt>Tip local</dt>
                <dd>Bistro, Burgerie, Cantina, Catering, Evenimente, Pizzeria, Pub, Restaurant, Romanesc, Trattoria</dd>
              </div>
            </dl>
          </AnimatedTab>

          <AnimatedTab isActive={activeTab === 1}>
            <strong className="product__title">Metode de preparare</strong>
            <p className="product__text">Ciabatta se lasa la decongelat, la temperatura camerei, timp de aproximativ 30 de minute. Poate fi consumata imediat dupa decongelare. Valabilitate dupa decongelare 24 ore (temperatura 21°C)</p>
          </AnimatedTab>

          <AnimatedTab isActive={activeTab === 2}>
            <strong className="product__title">Ingrediente</strong>
            <p className="product__text">Faina de GRAU, apa, ulei de rapita, zahar; drojdie, sare iodata (sare, iodat de potasiu), gris (GRAU), GLUTEN (GRAU), antioxidant (acid ascorbic), faina de malt (GRAU).</p>
          </AnimatedTab>

          <AnimatedTab isActive={activeTab === 3}>
            <strong className="product__title">Alergeni</strong>
            <p className="product__text">
              GRAU. Poate sa contina urme de: SOIA.
            </p>
          </AnimatedTab>

          <AnimatedTab isActive={activeTab === 4}>
            <strong className="product__title">Valori nutritionale 100g</strong>
            <dl className="product__dl">
              <div className="product__element">
                <dt>Valoare energetica (kJ)</dt>
                <dd>1163</dd>
              </div>
              <div className="product__element">
                <dt>Valoare energetica (kcal)</dt>
                <dd>275</dd>
              </div>
              <div className="product__element">
                <dt>Grasimi (g)</dt>
                <dd>3.6</dd>
              </div>
              <div className="product__element">
                <dt>din care acizi grasi saturati (g)</dt>
                <dd>0.4</dd>
              </div>
              <div className="product__element">
                <dt>Glucide (g)</dt>
                <dd>51</dd>
              </div>
              <div className="product__element">
                <dt>din care zaharuri (g)</dt>
                <dd>3</dd>
              </div>
              <div className="product__element">
                <dt>Proteine (g)</dt>
                <dd>8.4</dd>
              </div>
              <div className="product__element">
                <dt>Sare (g)</dt>
                <dd>1.3</dd>
              </div>
            </dl>
          </AnimatedTab>

          <AnimatedTab isActive={activeTab === 5}>
            <strong className="product__title">Review-uri</strong>
            <div className="product__review">
              <span className="product__review-total">0</span>
              <div className="product__review-box">
                <StarRating />
                <p className="product__review-text">
                  (0 recenzii)
                </p>
              </div>
            </div>
            <p className="product__text">
              Nicio recenzie.
            </p>
          </AnimatedTab>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Product;
