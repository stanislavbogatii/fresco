import React from 'react';

import Link from 'next/link';

const AboutContent = () => {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__inner">
          <ul className="about__list">
            <li className="about__list-item">
              <strong className="about__list-title">Suport clienti</strong>
              <ul className="about__items">
                <li className="about__item">
                  <Link className="about__link" href="/register">
                    Creeaza cont
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
            <li className="about__list-item">
              <strong className="about__list-title">Intrebari frecvente</strong>
              <ul className="about__items">
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Informatii generale
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Informatii produse
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Cont client
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Comenzi
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Livrari
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Facturi si plati
                  </Link>
                </li>
              </ul>
            </li>
            <li className="about__list-item">
              <strong className="about__list-title">bocado.ro</strong>
              <ul className="about__items">
                <li className="about__item">
                  <Link className="about__link" href="/about">
                    Despre noi
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Termeni si conditii
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Politica de confidentialitate
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Politica de cookies
                  </Link>
                </li>
                <li className="about__item">
                  <Link className="about__link" href="#">
                    Integritate Macromex
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="about__content">
            <h1 className="about__main-title">Despre noi</h1>
            <ul className="about__content-list">
              <li className="about__content-item">
                <strong className="about__content-title">
                  Experti in gasirea celor mai bune solutii pentru domeniul HoReCa.
                </strong>
                <p className="about__text">
                  Bocado este initiativa Macromex ce vine in intampinarea specialistilor HoReCa,
                  ajutandu-i cu solutii profesionale prin care sa-si usureze munca, timpul petrecut
                  in bucatarie, si sa creasca in mod real calitatea serviciilor.
                </p>
                <p className="about__text">
                  De 30 ani, Macromex este printre liderii din industria de produse alimentare pe
                  segmentul de produse congelate si refrigerate si un jucator de top in Horeca.
                  Experienta in domeniu, pasiunea de a fi mereu cu un pas inainte, profesionalismul
                  intregii echipe, calitatea produselor, curajul de a ne asuma riscuri si viteza de
                  reactie la oportunitatile si schimbarile pietei au determinat o evolutie constanta
                  si sustinuta a companiei. Vrem sa impartasim cu tine toate aceste experiente,
                  „bocado” cu „bocado”, asa ca iti oferim preparate pe care sa le transformi rapid
                  si facil in mancaruri spectaculoase, bine gatite si sanatoase.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">
                  Viziunea noastra, sustinuta de identitate
                </strong>
                <p className="about__text">
                  Nu intamplator am ales numele Bocado - tradus din portugheza, „bocado” inseamna
                  „bucatica”, insa, folosit in expresii, „bocado” devine un lucru rafinat. Un
                  concept care se leaga strans de misiunea noastra: aceea de a pune laolalta
                  „bucatele” pentru a crea lucruri rafinate.
                </p>
                <p className="about__text">
                  Iar cand spunem „misiunea noastra”, o facem pentru ca stim ca doar impreuna putem
                  ridica standardele de gust si calitate.
                </p>
                <p className="about__text">
                  Speram ca, in viitor, sa extindem atat portofoliul de furnizori relevanti pentru
                  domeniul HoReCa si ne dorim sa formam o comunitate a profesionistilor din domeniu,
                  care se sustin reciproc. Aceasta este viziunea si promisiunea noastra.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">
                  Impartasim pasiunea pentru mancarea excelenta
                </strong>
                <p className="about__text">
                  Ingredientele principale pe care le adaugam in relatia cu clientii nostri s-au
                  dovedit a fi o reteta de succes, asa ca o aplicam in continuare. Imbinam
                  experienta noastra, ambitia de a oferi mereu solutii si produse care depasesc
                  asteptarile, calitatea superioara a produselor, curajul de a ne asuma riscuri si
                  viteza de reactie la oportunitatile si schimbarile pietei. Acestea sunt lucrurile
                  care ne-au determinat si sustinut evolutia.
                </p>
                <p className="about__text">
                  Succesul tau este important pentru noi, iar pentru ca tu sa oferi clientilor o
                  mancare excelenta atunci cand pasesc in restaurant, suntem aici sa-ti oferim toate
                  ingredientele de care ai nevoie pentru a-i impresiona.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Servicii excelente</strong>
                <p className="about__text">
                  Imbunatatim permanent experienta de utilizare a site-ului, de la crearea initiala
                  a contului si trimiterea comenzilor, pana la livrare si servicii.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Distributie nationala</strong>
                <p className="about__text">
                  Iti asiguram calitatea produselor inainte, in timpul si dupa livrarea
                  door-to-door, cu autoutilitare frigorifice si congelatoare.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Produse de top</strong>
                <p className="about__text">
                  Te aprovizionam cu produse de la furnizori si branduri cu notorietate si toate
                  informatiile de care ai nevoie despre acestea.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Comenzi rapide</strong>
                <p className="about__text">
                  Iti garantam mai putin stres in procesul de plasare a comenzilor prin rapiditatea
                  platformei noastre.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Transparenta si control</strong>
                <p className="about__text">
                  Iti oferim toate beneficiile de user management prin platforma noastra securizata
                  pentru o vedere de ansamblu a echipei tale.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Suport si asistenta</strong>
                <p className="about__text">
                  Te sprijinim cu echipa de consultanti, mereu pregatita sa te asiste cu prezentari
                  live de produse.
                </p>
              </li>
              <li className="about__content-item">
                <strong className="about__content-title">Dezvoltare sustenabila</strong>
                <p className="about__text">
                  Ne ajutam reciproc, hranindu-ne nevoia de a sustine dezvoltarea pe plan local,
                  fiind o companie 100% romaneasca.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
