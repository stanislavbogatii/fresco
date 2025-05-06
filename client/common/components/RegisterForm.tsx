import { useUserInfoContext } from '@/context/UserInfoContext';
import { CategoryService } from '@/modules/cateogory/services/CategoryServcie';
import { SignUpPostVm } from '@/modules/register/models/SignUpPostVm';
import { signup } from '@/modules/register/services/RegisterServcie';
import { routes } from '@/utils/routes';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../items/Input';
import { toastError } from '@/modules/catalog/services/ToastService';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const router = useRouter();
  const { fetchUserInfo } = useUserInfoContext();
  const { handleSubmit, register, formState: { errors } } = useForm<SignUpPostVm>();


  const handleRegister: SubmitHandler<SignUpPostVm> = async (data: SignUpPostVm, e: any) => {
    e.preventDefault();
    const response = await signup(data);
    if (response?.message) {
      toastError(response.message);
    }

    if (response && response?.access_token) {
      document.cookie = `access_token=${response.access_token}; path=/; max-age=${60 * 60 * 24 * 7}`;
      fetchUserInfo();
      router.push(routes.profile);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)} className="register-form">
        <strong className="register-form__title">Informatii personale</strong>
        
        <div className="register-form__items">
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Email'} 
            field={'email'} 
            error={errors?.email?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'First name'} 
            field={'firstName'} 
            error={errors?.firstName?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Last name'} 
            field={'lastName'} 
            error={errors?.lastName?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label> 
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Phone number'} 
            field={'phone'} 
            error={errors?.phone?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label> 
          <label className="register-form__label">
            <Input 
            type='password'
            className='register-form__input input'
            labelText={'Password'} 
            field={'password'} 
            error={errors?.phone?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
        </div>

        <strong className="register-form__title">Detalii companie </strong>
        <div className="register-form__items">
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Company fiscal code'} 
            field={'companyFiscalCode'} 
            error={errors?.companyFiscalCode?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Company phone number'} 
            field={'companyPhone'} 
            error={errors?.companyPhone?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Company commercial name'} 
            field={'companyCommercialName'} 
            error={errors?.companyCommercialName?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          <label className="register-form__label">
            <Input 
            className='register-form__input input'
            labelText={'Company name'} 
            field={'companyName'} 
            error={errors?.companyName?.message}
            registerOptions={{
              required: {value: true, message: "Required field"}
            }}
            register={register}/>
          </label>
          
          {/* <label className="register-form__label">
            <span className="register-form__text">Password *</span>
            <input
              onChange={(e: any) => setPassword(e.target.value)}
              className="register-form__input input"
              type="password"
              required
            />
          </label> */}
        </div>
        <label className="register-form__label-checkbox">
          <input className="register-form__input-checkbox checkbox" type="checkbox" />
          <span className="register-form__checkbox"></span>
          <span className="register-form__checkbox-text">
            Da, vreau sa ma abonez la newsletter pentru a afla primul despre promotii si noutati
          </span>
        </label>
        <label className="register-form__label-checkbox">
          <input className="register-form__input-checkbox checkbox" type="checkbox" />
          <span className="register-form__checkbox"></span>
          <span className="register-form__checkbox-text">
            Sunt de acord cu Termenii si conditiile si cu prelucrarea datelor cu caracter personal
            conform cu Politica de confidentialitate
          </span>
        </label>
        <button className="register-form__btn btn" type="submit">
          Creeaza cont
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
