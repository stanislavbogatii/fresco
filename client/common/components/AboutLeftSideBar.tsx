import Link from "next/link";
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';
// import { useUserInfoContext } from "@/context/UserInfoContext";

const AboutLeftSideBar = () => {
  const router = useRouter();
  // const { user, fetchUserInfo } = useUserInfoContext();
  return (
    <ul className="about__list">
      <li className="about__list-item">
        <strong className="about__list-title">Suport clienti</strong>
        <ul className="about__items">
          <li className="about__item">
            <Link className="about__link" href={routes.register}>
              Creeaza cont
            </Link>
          </li>
          <li className="about__item">
            <Link className="about__link" href={routes.contact}>
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
        <strong className="about__list-title">fresco.md</strong>
        <ul className="about__items">
          <li className="about__item">
            <Link className="about__link" href={routes.about}>
              Despre noi
            </Link>
          </li>
          <li className="about__item">
            <Link className="about__link" href={routes.terms_and_conditions}>
              Termeni si conditii
            </Link>
          </li>
          <li className="about__item">
            <Link className="about__link" href={routes.privacy_policy}>
              Politica de confidentialitate
            </Link>
          </li>
          <li className="about__item">
            <Link className="about__link" href={routes.cookies_policy}>
              Politica de cookies
            </Link>
          </li>
          {/* <li className="about__item">
            <Link className="about__link" href="#">
              Integritate Macromex
            </Link>
          </li> */}
        </ul>
      </li>
    </ul>
  )
}

export default AboutLeftSideBar
