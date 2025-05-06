import AboutLayout from "@/common/components/AboutLayout";
import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <>
    <Head>
      <title>FRESCO | Termeni si conditii</title>
    </Head>
    <AboutLayout title="Termeni si conditii">
      <ul className="about__content-list">
        <li className="about__content-item">
          <strong className="about__content-title">
            Acceptarea acestor Termeni
          </strong>
          <p className="about__text">
            Bine ați venit pe platforma noastră online dedicată vânzărilor business-to-business. Acești Termeni și Condiții, împreună cu Politica privind Confidențialitatea și Politica privind Modulele Cookie, guvernează utilizarea site-ului web [numele platformei] („Site-ul web”).
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Date despre companie
          </strong>
          <p className="about__text">
            Platforma este deținută și operată de [Numele companiei], cu sediul social în [Adresa completă], înregistrată la Registrul Comerțului sub nr. [Număr de înregistrare], având CUI [Cod unic de identificare] („Compania”).
          </p>
          <p className="about__text">
            Prin utilizarea Site-ului web, sunteți de acord cu aplicabilitatea acestor Termeni. Compania își rezervă dreptul de a modifica oricând acești Termeni, iar utilizatorii sunt sfătuiți să verifice periodic actualizările.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Prevederi generale Marketplace
          </strong>
          <p className="about__text">
            [Platforma] este un marketplace B2B care facilitează interacțiunea dintre furnizori („Comercianți”) și clienți din domeniul HORECA și retail („Clienți”).
          </p>
          <p className="about__text">
            Produsele disponibile pe platformă sunt vândute și livrate fie direct de către [Numele companiei], fie de către Comercianți terți înregistrați în marketplace.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Definiții
          </strong>
          <p className="about__descr">
            <b>„Vânzător”</b> – [Numele companiei] sau Comercianții înregistrați pe platformă.
          </p>
          <p className="about__descr">
            <b>„Client”</b> – persoană juridică ce plasează comenzi prin intermediul platformei.
          </p>
          <p className="about__descr">
            <b>„Comandă”</b> – solicitarea plasată de Client pentru achiziția produselor disponibile.
          </p>
          <p className="about__descr">
            <b>„Contractul de Vânzare”</b> – contractul electronic de achiziție dintre Vânzător și Client.
          </p>
          <p className="about__descr">
            <b>„Produse”</b> – bunuri alimentare și/sau nealimentare disponibile pe platformă.
          </p>
          <p className="about__descr">
            <b>„Utilizator”</b> – orice persoană care accesează site-ul.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Politica de vânzare online
          </strong>
          <p className="about__text">
            Vânzătorii își rezervă dreptul de a accepta, modifica sau anula comenzile plasate pe platformă. Accesul la platformă poate fi restricționat în cazuri de fraudă, încălcarea termenilor sau alte motive întemeiate.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Plasarea comenzilor
          </strong>
          <p className="about__text">
            Clienții trebuie să își creeze un Cont pentru a plasa comenzi. Procesul implică selectarea produselor, adăugarea acestora în coș și finalizarea comenzii prin alegerea metodei de plată și a detaliilor de livrare.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Confirmarea comenzilor
          </strong>
          <p className="about__text">
            Comenzile sunt confirmate printr-un e-mail automat, iar acceptarea finală din partea Vânzătorului este necesară pentru procesarea livrării.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Prețuri și facturare
          </strong>
          <p className="about__text">
            Prețurile produselor sunt vizibile doar pentru utilizatorii înregistrați. Facturile sunt emise electronic și disponibile în contul Clientului.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Modalități de plată
          </strong>
          <p className="about__text">
            Plata se poate efectua prin:
          </p>
          <ul className="about__components">
            <li className="about__component">Card bancar</li>
            <li className="about__component">Transfer bancar</li>
            <li className="about__component">Ramburs, conform condițiilor stabilite cu Vânzătorul</li>
          </ul>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Livrarea
          </strong>
          <p className="about__text">
            Livrarea produselor se face exclusiv pe teritoriul [Țara]. Taxele și termenele de livrare sunt afișate în momentul plasării comenzii.
            Transferul proprietății și riscurilor
          </p>
          <p className="about__text">
            Proprietatea asupra produselor se transferă Clientului la momentul livrării.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Politica de retur și garanție
          </strong>
          <p className="about__text">
            Returul produselor este acceptat doar în cazuri de defecte de fabricație sau vicii ascunse. Garanția este oferită conform legislației aplicabile și specificațiilor fiecărui Comerciant.
            Răspundere
          </p>
          <p className="about__text">
            Compania nu este responsabilă pentru problemele tehnice ale platformei, întârzieri de livrare cauzate de factori externi sau conținutul furnizat de terți.
            Proprietate intelectuală
          </p>
          <p className="about__text">
            Toate drepturile asupra conținutului platformei aparțin [Numele companiei] și nu pot fi utilizate fără acordul explicit al acesteia.
            Promoții și comunicări comerciale
            Clienții pot primi oferte și comunicări comerciale, având posibilitatea de a se dezabona în orice moment.
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Forta majora
          </strong>
          <p className="about__text">
            Compania nu poate fi considerată responsabilă pentru întârzieri sau neexecutări cauzate de evenimente de forță majoră.
            Legea aplicabilă și jurisdicția
          </p>
          <p className="about__text">
            Acești Termeni sunt guvernați de legislația din [Țara], iar orice litigii vor fi soluționate de instanțele competente din [Localitate].
          </p>
        </li>
        <li className="about__content-item">
          <strong className="about__content-title">
            Contact
          </strong>
          <p className="about__text">
            Pentru orice întrebări, ne puteți contacta la [Adresa de e-mail].
          </p>
        </li>
      </ul>
    </AboutLayout>
    </>
  )
}

export default TermsAndConditions;
