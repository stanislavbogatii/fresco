import Link from "next/link";
import Image from "next/image";

import errorImage from '../asset/images/donut.svg'; 
import errorShadow from '../asset/images/shadow.svg';

const NotfoundPage = () => {
  return (
    <section className="error section">
      <div className="container">
        <div className="error__inner">
          <div className="error__head">
            <span className="error__num">
              4
            </span>
            <div className="error__img-box">
            <Image className="error__donut" src={errorImage} width={300} height={300} alt="error" />
            <Image className="error__shadow" src={errorShadow} width={200} height={100} alt="error" />
            </div>
            <span className="error__num">
              4
            </span>
          </div>
          <div className="error__box">
            <h1 className="error__title">
              UPPS!
              <span>Pagina nu a fost găsită!!</span>
            </h1>
            <p className="error__text">
              Ne pare rău, dar nu am putut găsi paginile pe care le-ați solicitat. Acest lucru se poate datora faptului că ați introdus o adresă web greșită, care nu a fost găsită.
            </p>
            <Link className="error__link btn-primary" href="/">Reveniți la pagina principală</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotfoundPage;
