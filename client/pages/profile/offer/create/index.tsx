import ProductImage from '@/common/components/ProductImage';
import ProfileLayout from '@/common/components/ProfileLayout';
import { Input } from '@/common/items/Input';
import { Select, TextArea } from '@/common/items/TextArea';
import { useUserInfoContext } from '@/context/UserInfoContext';
import { CreateProductDto } from '@/modules/catalog/models/CreateProductDto';
import { FormProduct } from '@/modules/catalog/models/FormProduct';
import { createProduct } from '@/modules/catalog/services/ProductService';
import { toastSuccess } from '@/modules/catalog/services/ToastService';
import { Language } from '@/modules/languages/models/Language';
import { getLanguages } from '@/modules/languages/services/LanguageService';
import { routes } from '@/utils/routes';
import slugify from 'slugify';


import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { FieldValues, Path, PathValue, RegisterOptions, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { getCategories } from '@/modules/catalog/services/CategoryService';
import { CategoryResponseDto } from '@/modules/catalog/models/CategoryResponseDto';

const ProfileOfferCreate = () => {
  const { user } = useUserInfoContext();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [categories, setCategories] = useState<CategoryResponseDto[]>();
  const [tabKey, setTabKey] = useState<string>('');
  const { register, setValue, formState: { errors }, handleSubmit, getValues } = useForm<CreateProductDto>();
  const router = useRouter();

  useEffect(() => {
    getLanguages().then((languages: Language[]) => {
      setLanguages(languages);
      setTabKey(languages[0].langId);
    })
    getCategories().then((data) => {
      console.log(data)
      setCategories(data.items);
    })
  }, [])

  const handleCreate = (data: CreateProductDto) => {
    if (!user || !user?.company) return;
    data = { ...data, companyId: user.company.id};

    createProduct(data)
      .then(() => {
        toastSuccess("Oferta a fost salvata cu succes");
        router.push(routes.profile_offer);
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (
    <ProfileLayout title="Salvați oferta">
      <form className="offer-create" onSubmit={handleSubmit(handleCreate)}>

        <Tabs activeKey={tabKey} onSelect={(e: any) => setTabKey(e)}>
          {languages.map((lang, index) => {
            setValue(`contents.${index}.langId`, lang.langId);
            return (
              <Tab
                style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '10px', borderRadius: '0 0 10px 10px' }}
                key={lang.langId}
                eventKey={lang.langId}
                title={lang.langId.toUpperCase()}>
                <label className="offer-create__label">
                  <Input
                    register={register}
                    registerOptions={{
                      required: index === 0 ? { value: true, message: 'Slug is required for the first language' } : false,                      onChange: (e) => {
                        setValue(
                          `contents.${index}.slug`,
                          slugify(e.target.value, {
                            lower: true,
                            strict: true,
                          })
                        );
                      },
                    }}
                    field={`contents.${index}.title`}
                    className="offer-create__input input"
                    type="text"
                    placeholder="Numele ofertelor"
                    labelText={'Nume'} />
                </label>
                <label className="offer-create__label">
                  <Input
                    registerOptions={{
                        required: index === 0 ? { value: true, message: 'Slug is required for the first language' } : false,
                      }}
                    register={register}
                    field={`contents.${index}.slug`}
                    className="offer-create__input input"
                    type="text"
                    placeholder="Denumirea in URL"
                    labelText={'Slug'} />
                </label>
                <label className="offer-create__label">
                  <TextArea
                    className='offer-create__input input'
                    labelText={'Descriere'}
                    field={`contents.${index}.description`}
                    register={register} />
                </label>
              </Tab>
            )
          })}
        </Tabs>

        <div className='d-flex w-100 gap-4'>
          <label className="offer-create__label mt-3 w-100">
            <Input
              registerOptions={{
                required: { value: true, message: 'Codul articolului este necesar' },
              }}
              register={register}
              field={`article`}
              className="offer-create__input input"
              type="text"
              placeholder="Cod articlu"
              labelText={'Articlu'} />
          </label>

          <label className="offer-create__label mt-3 w-100">
            <Input
              registerOptions={{
                required: { value: true, message: 'Codul de referinta este necesar' },
              }}
              register={register}
              field={`codeRef`}
              className="offer-create__input input"
              type="text"
              placeholder="Cod de referinta"
              labelText={'Codul de referinta'} />
          </label>
        </div>

        <label className="offer-create__label">
          <Input
            registerOptions={{
              required: { value: true, message: 'Pretul este necesar' },
            }}
            register={register}
            field={`price`}
            className="offer-create__input input"
            type="number"
            placeholder="Pret"
            labelText={'Pret'} />
        </label>

        <label className="offer-create__label">
          <Select
            registerOptions={{
              required: { value: true, message: 'Categorie este bligatorie' },
            }}
            register={register}
            field={`categoryId`}
            className="offer-create__input input"
            labelText={'Categorie'} 
            defaultValue={categories?.[0]?.id || ''}
            placeholder='Selecteaza o categorie'
            options={
              categories?.map((category) => ({
                value: category.id,
                label: category.contents[0].title,
              })) || []
            } />
        </label>

        <ProductImage setValue={setValue}/>

        {/* <div className="offer-create__box mt-4">
          <ul className="offer-create__list">
            <li className="offer-create__list-item">Cod ref.</li>
            <li className="offer-create__list-item">Articol</li>
            <li className="offer-create__list-item">Preț</li>
            <li className="offer-create__list-item">Cantitate</li>
            <li className="offer-create__list-item">Multiplicator unitar</li>
            <li className="offer-create__list-item">Cantitate totală</li>
            <li className="offer-create__list-item">Total</li>
          </ul>
        </div>
        <span className="offer-create__nothing">Nimic de aratat</span>
        <div className="offer-create__box-items">
          <ul className="offer-create__items">
            <li className="offer-create__item">
              <span className="offer-create__item-head">Subtotal</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Livrare</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Reduceri</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Taxe</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
            <li className="offer-create__item">
              <span className="offer-create__item-head">Total</span>
              <strong className="offer-create__item-footer">0,00 lei</strong>
            </li>
          </ul>
        </div>
        <label className="offer-create__label-checkbox">
          <input className="offer-create__input-checkbox checkbox" type="checkbox" required />
          <span className="offer-create__checkbox"></span>
          <span className="offer-create__checkbox-text">Ștergeți coșul după salvare</span>
        </label> */}
        <button className="offer-create__btn btn" type="submit">
          Salvați
        </button>
      </form>
      <Link className="profile__link" href={routes.profile_offer}>
        Înapoi
      </Link>
    </ProfileLayout>
  );
};

export default ProfileOfferCreate;
