import Head from 'next/head';

import FaqBox from '@/common/components/FaqBox';
import FeedbackForm from '@/common/components/FeedbackForm';
import ContactBlock from '@/common/components/ContactBlock';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <FaqBox />
      <section className="contacts section">
        <div className="container">
          <div className="contacts__inner">
            <ContactBlock />
            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
