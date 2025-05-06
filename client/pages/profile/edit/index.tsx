import ProfileLayout from '@/common/components/ProfileLayout';
import { Input } from '@/common/items/Input';
import { OptionSelect } from '@/common/items/OptionSelect';
import { UserInfoContext, useUserInfoContext } from '@/context/UserInfoContext';
import { toastError, toastSuccess } from '@/modules/catalog/services/ToastService';
import { GenderEnum } from '@/modules/customer/models/GenderEnum';
import { Customer } from '@/modules/profile/models/Customer';
import { EditUserDto } from '@/modules/profile/models/EditUserDto';
import { updateCustomer } from '@/modules/profile/services/ProfileService';
import { routes } from '@/utils/routes';

import Link from 'next/link';
import { useEffect } from 'react';
import { RegisterOptions, FieldValues, UseFormRegisterReturn, useForm } from 'react-hook-form';

const ProfileEdit = () => {
  const { user, fetchUserInfo } = useUserInfoContext();
  const { handleSubmit, register, setValue } = useForm<EditUserDto>();

  const handleEdit = async (data: EditUserDto) => {
    const response = await updateCustomer(data);
    if (response) {
      toastSuccess('Success updated profile');
      fetchUserInfo();
    } else {
      toastError('Error updated profile');
    }
  };

  useEffect(() => {
    if (user) {
      setValue('firstName', user?.profile.firstName);
      setValue('lastName', user?.profile.lastName);
      setValue('phone', user?.profile.phone);
      setValue('gender', user?.profile.gender);
    }
  }, [user]);

  return (
    <ProfileLayout title="Editează profilul">
      <div className="profile-edit">
        <form className="profile-edit__form" onSubmit={handleSubmit(handleEdit)}>
          <label className="profile-edit__label">
            <Input
              className="profile-edit__input input"
              type="text"
              placeholder="Optional"
              labelText={'Prenume'}
              field={'firstName'}
              register={register} />
          </label>
          <label className="profile-edit__label">
            <Input
              className="profile-edit__input input"
              type="text"
              placeholder="Optional"
              labelText={'Nume'}
              field={'lastName'}
              register={register} />
          </label>
          <label className="profile-edit__label">
            <Input
              className="profile-edit__input input"
              type="tel"
              placeholder="Optional"
              labelText={'Telephon'}
              field={'phone'}
              register={register} />
          </label>
          <label className="profile-edit__label">
            <OptionSelect
              className="profile-edit__select profile-edit__input input" labelText={'Gen'} field={'gender'} register={register} options={Object.entries(GenderEnum).map(([key, value]) => ({ id: key, name: value }))} placeholder='Optional' />
          </label>
          <button className="profile-edit__btn btn" type="submit">
            Salvează modificările
          </button>
        </form>
      </div>
      <Link className="profile__link" href={routes.profile}>
        Datele mele
      </Link>
    </ProfileLayout>
  );
};

export default ProfileEdit;
