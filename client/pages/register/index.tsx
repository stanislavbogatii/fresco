import Head from 'next/head';

import CreateProfile from '@/modules/register/components/CreateProfile';

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <CreateProfile />
    </>
  );
};

export default Register;
