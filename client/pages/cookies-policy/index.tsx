import AboutLayout from "@/common/components/AboutLayout";
import Link from "next/link";
import Head from "next/head";

const CookiesPolicy = () => {
  return (
    <>
    <Head>
      <title>FRESCO | Politica de cookie</title>
    </Head>
    <AboutLayout title="Politica de cookies">
      <ul className="about__content-list">
        <li className="about__content-item">
          <strong className="about__content-title">
            Politica de utilizare Cookie
          </strong>
          <p className="about__text">
            Politica de utilizare cookie este un document de informare a utilizatorilor despre prezența cookie-urilor pe site-ul web al <Link href="/">FRESCO.MD</Link>, operat de societatea VIALIT GROUP S.R.L. Informațiile prezentate în continuare au scopul de a aduce la cunoștința utilizatorului mai multe detalii despre plasarea, utilizarea și administrarea cookie-urilor utilizate de platforma noastră.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Ce este un cookie?
          </strong>
          <p className="about__text">
            Un cookie este un fișier text care conține informații descărcate pe dispozitivul dvs. atunci când vizitați un site web. Acest cookie este trimis înapoi la fiecare vizită ulterioară către site-ul web de origine sau către alt site web care îl recunoaște. Cookie-urile permit unui site web să recunoască un dispozitiv și să ofere o experiență mai eficientă și personalizată.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Tipuri de cookie-uri utilizate
          </strong>
          <p className="about__text">
            <b>Cookie-uri strict necesare</b> – Esențiale pentru funcționarea corectă a site-ului și utilizarea acestuia conform destinației.
          </p>
          <p className="about__text">
            <b>Cookie-uri de performanță</b> – Utilizate în scopuri statistice pentru a analiza traficul și comportamentul utilizatorilor pe site.
          </p>
          <p className="about__text">
            <b>Cookie-uri funcționale</b> – Permit reținerea preferințelor utilizatorilor pentru o experiență personalizată.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Durata de viață a cookie-urilor
          </strong>
          <p className="about__text">
            Cookie-urile pot fi temporare (șterse după închiderea browserului) sau persistente (rămân stocate pentru o perioadă mai lungă, până la ștergerea manuală de către utilizator).
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Importanța cookie-urilor
          </strong>
          <p className="about__text">
            Asigură o navigare eficientă și personalizată.
          </p>
          <p className="about__text">
            Permit reținerea preferințelor utilizatorilor.
          </p>
          <p className="about__text">
            Ajută la îmbunătățirea serviciilor prin analizarea modului de utilizare a site-ului.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Gestionarea și ștergerea cookie-urilor
          </strong>
          <p className="about__text">
            Utilizatorii pot modifica setările browserului pentru a bloca sau șterge cookie-urile în orice moment. Limitarea utilizării cookie-urilor poate afecta anumite funcționalități ale site-ului.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Actualizări ale Politicii de Cookie
          </strong>
          <p className="about__text">
            Această politică poate suferi modificări periodice. Orice actualizare va fi publicată pe această pagină și va înlocui versiunea anterioară.
          </p>
        </li>
        <li className="about__content-item">
          <p className="about__text">
            Pentru mai multe informații despre utilizarea cookie-urilor pe <Link href="/">FRESCO.MD</Link>, vă rugăm să ne contactați.
          </p>
        </li>
      </ul>
    </AboutLayout>
    </>
  )
}

export default CookiesPolicy;
