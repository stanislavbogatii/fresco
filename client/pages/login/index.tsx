import Head from 'next/head';
import BreadcrumbComponent from '../../common/components/BreadcrumbComponent';
import { BreadcrumbModel } from '../../modules/breadcrumb/model/BreadcrumbModel';
import { Input } from '@/common/items/Input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Login = () => {
  const { register } = useForm();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className='form-page--container'>
        <div className='form-wrapper'>

          <form className='form-container'>
            <Input 
            placeholder='your_email@gmail.com'
            labelText={'Email'}
            field={'email'} 
            register={register}/>
            <Input 
            placeholder='**************'
            labelText={'Password'}
            field={'password'} 
            register={register}/>
          </form>


          <Link 
          href={'/register'}>
            Register
          </Link>

        </div>
      </div>
    </>
  );
};

export default Login;
