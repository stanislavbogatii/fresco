import Head from "next/head"
import { string } from "yup"
import AboutLeftSideBar from "./AboutLeftSideBar"

type Props = {
  children: React.ReactNode;
  title?: string;
}

const AboutLayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ?? 'FRESCO | Despre noi'}</title>
      </Head>
      <section className="about section">
        <div className="container">
          <div className="about__inner">
            <AboutLeftSideBar></AboutLeftSideBar>
            <div className="about__content">
              {title && <h1 className="about__main-title">{title}</h1>}
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutLayout
