import AboutLayout from '@/common/components/AboutLayout';

const AboutInfo = () => {
  return (
    <>
      <AboutLayout>
        <div className="about__content">
          <h1 className="about__main-title">Despre noi</h1>
          <ul className="about__content-list">
            <li className="about__content-item">
              {/* <strong className="about__content-title">
                  Experti in gasirea celor mai bune solutii pentru domeniul HoReCa.
                </strong> */}
              <p className="about__text">
                Bine ai venit pe FRESCO.MD, locul unde restaurantele și furnizorii din Republica Moldova își optimizează colaborarea prin tehnologie inteligentă și eficientă. Inspirată de succesul Choco.com, platforma noastră simplifică procesul de aprovizionare, reducând costurile și economisind timp prețios.
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
                Misiunea Noastră
              </strong>
              <p className="about__text">
                Ne dorim să revoluționăm industria HoReCa din Moldova, oferind o soluție digitală modernă, care să conecteze restaurantele și furnizorii într-un mod mai rapid, transparent și avantajos pentru toți. Credem într-un viitor în care comenzile și gestionarea stocurilor devin un proces simplu și intuitiv.
              </p>
              {/* <p className="about__text">
                  Iar cand spunem „misiunea noastra”, o facem pentru ca stim ca doar impreuna putem
                  ridica standardele de gust si calitate.
                </p>
                <p className="about__text">
                  Speram ca, in viitor, sa extindem atat portofoliul de furnizori relevanti pentru
                  domeniul HoReCa si ne dorim sa formam o comunitate a profesionistilor din domeniu,
                  care se sustin reciproc. Aceasta este viziunea si promisiunea noastra.
                </p> */}
            </li>
            <li className="about__content-item">
              <strong className="about__content-title">
                Ce Oferim?
              </strong>
              <p className="about__text">
                Eficiență și Automatizare – Reducem timpul pierdut în comenzi printr-un sistem digital intuitiv.
              </p>
              <p className="about__text">
                Transparență Totală – Oferim acces la informații clare despre produse, prețuri și disponibilitate
              </p>
              <p className="about__text">
                Colaborare Simplificată – Creăm un mediu în care restaurantele și furnizorii pot comunica fără obstacole.                </p>
              <p className="about__text">
                Reducerea Pierderilor – Optimizăm procesul de aprovizionare pentru a evita risipa de resurse.                </p>
            </li>
            <li className="about__content-item">
              <strong className="about__content-title">De ce să Alegi FRESCO.MD?</strong>
              <p className="about__text">
                ✔️ Proces simplificat de comandă și livrare
              </p>
              <p className="about__text">
                ✔️ Acces la o gamă variată de furnizori și produse
              </p>
              <p className="about__text">
                ✔️ Economie de timp și costuri
              </p>
              <p className="about__text">
                ✔️ Suport rapid și dedicat
              </p>
            </li>
            <li className="about__content-item">
              <p className="about__text">
                Suntem aici pentru a aduce inovație și progres în industria alimentară din Moldova. Alătură-te nouă și hai să construim împreună viitorul HoReCa!
              </p>
            </li>

          </ul>
        </div>
      </AboutLayout>
    </>
  );
};

export default AboutInfo;
