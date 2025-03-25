import Head from 'next/head';
import UserProfileLeftSideBar from './UserProfileLeftSideBar';
type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function ProfileLayout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title ?? 'Profile'}</title>
      </Head>
      <section className="profile">
        <div className="container">
          <div className="profile__inner">
            <UserProfileLeftSideBar />
            <div className="profile__content">
              {title && <h1 className="profile__title">{title}</h1>}
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
