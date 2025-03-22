import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/reset.css'
import '../styles/spinner.css';
import '../styles/completePayment.css';
import '../styles/MyOrders.css';
import '../styles/Footer.css';
import '../styles/Header.css';
import '../styles/cart.css';
import '../styles/checkout.css';
import '../styles/form.css';
import '../styles/globals.css';
import '../styles/util.css';
import '../styles/searchForm.css'
import '../styles/loginForm.css'
import '../styles/register.css'
import '../styles/createProfile.css'
import '../styles/categories.css'
import '../styles/category.css'
import '../styles/promo.css'
import '../styles/edges.css'
import '../styles/edge.css'
import '../styles/productCard.css'
import '../styles/news.css'
import '../styles/partners.css'
import '../styles/socialJoin.css'
import '../styles/filterbar.css'
import '../styles/consultant.css'
import '../styles/aboutContent.css'
import '../styles/faqBox.css'
import '../styles/feedbackForm.css'
import '../styles/contactBlock.css'
import '../styles/userProfileLeftSideBar.css'
import '../styles/userInfo.css'
import '../styles/profileEdit.css'
import '../styles/profileAuth.css'
import '../styles/profileOrganization.css';
import '../styles/profileOffer.css';
import '../styles/offerCreate.css';
import '../styles/mainBanner.css';

import Layout from '@/common/components/Layout';
import { AppProvider } from '@/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer style={{ marginTop: '70px' }} />
    </AppProvider>
  );
}

export default MyApp;
