import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import slugify from 'slugify';

import { CreateCategoryDto } from '@catalogModels/CreateCategoryDto';
import { createCategory, getCategories } from '@catalogServices/CategoryService';
import { CheckBox, Input, TextArea } from '@commonItems/Input';
import { handleCreatingResponse } from '@commonServices/ResponseStatusHandlingService';
import { CATEGORIES_URL } from 'constants/Common';
import { Language } from '@catalogModels/Language';
import { getLanguages } from '@catalogServices/LanguagesService';
import { Tab, Tabs } from 'react-bootstrap';

const CategoryCreate: NextPage = () => {
  const router = useRouter(); 
  const { handleSubmit, setValue, register, formState: { errors } } = useForm<CreateCategoryDto>();
  const [categories, setCategories] = useState<CreateCategoryDto[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [tabKey, setTabKey] = useState<string>('');

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.items);
    });
    getLanguages().then((data) => {
      setLanguages(data);
      setTabKey(data[0].langId);
    })
  }, []);

  const onHandleSubmit: SubmitHandler<CreateCategoryDto> = async (data: CreateCategoryDto) => {
    data.parentId = data.parentId && +data?.parentId != -1 ? +data.parentId : null
    const response = await createCategory(data);

    if (response.status === 201) {
      router.replace(CATEGORIES_URL);
    }

    handleCreatingResponse(response);
  };

  const renderCategoriesHierarchy: Function = (
    id: number,
    list: Array<CreateCategoryDto>,
    parentHierarchy: string
  ) => {
    let renderArr = list.filter((e) => e.parentId == id);
    const newArr = list.filter((e) => e.parentId != id);
    renderArr = renderArr.sort((a: CreateCategoryDto, b: CreateCategoryDto) => a.code.localeCompare(b.code));
    return renderArr.map((category: CreateCategoryDto) => (
      <React.Fragment key={category.id}>
        <option value={category.id} key={category.id}>
          {parentHierarchy + category.code}
        </option>
        {renderCategoriesHierarchy(category.id, newArr, parentHierarchy + category.code + ' >> ')}
      </React.Fragment>
    ));
  };

  return (
    <div className="row my-5">
      <div className="col-md-8">
        <h2 className="mb-3">Create category</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)} name="form">
          <Input
            error={errors?.code?.message}
            labelText="Code"
            field={`code`}
            register={register}
            registerOptions={{
              required: { value: true, message: 'Code is required' },
            }}
          />
          
          <Tabs activeKey={tabKey} onSelect={(e: any) => setTabKey(e)} >
            {languages.map((lang, index) => {
              setValue(`contents.${index}.langId`, lang.langId);
              return (
                <Tab key={lang.langId} eventKey={lang.langId} title={lang.langId} style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '10px', borderRadius: '.25rem'}}>
                  <div>
                    <div className="mb-3">
                        <input 
                        {...register(`contents.${index}.langId`)}
                        type='hidden' />
                      <Input
                        labelText="Title"
                        error={errors?.contents ? errors?.contents[index]?.title?.message : ''}
                        field={`contents.${index}.title`}
                        register={register}
                        registerOptions={{
                          required: { value: true, message: 'CreateCategoryDto title is required' },
                          onChange: (e) => {
                            setValue(
                              `contents.${index}.slug`,
                              slugify(e.target.value, {
                                lower: true,
                                strict: true,
                              })
                            );
                          },
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <Input
                        error={errors?.contents ? errors?.contents[index]?.slug?.message : ''}
                        labelText="Slug"
                        field={`contents.${index}.slug`}
                        register={register}
                        registerOptions={{
                          required: { value: true, message: 'Slug is required' },
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <TextArea labelText="Description" field={`contents.${index}.description`} register={register} />
                    </div>
                    {/* <div className="mb-3">
                      <Input labelText="Meta Keywords" field="metaKeywords" register={register} />
                    </div>
                    <div className="mb-3">
                      <TextArea labelText="Meta Description" field="metaDescription" register={register} />
                    </div> */}
                  </div>
                </Tab>
              )
            })}
          </Tabs>

          
          
          <div className="mb-3 mt-3">
            <label className="form-label" htmlFor="parentCategory">
              Parent category
            </label>
            <select className="form-control" id="parentCategory" {...register('parentId')}>
              <option value={-1}>Top</option>
              {renderCategoriesHierarchy(null, categories, '')}
            </select>
          </div>
          
          {/* <div className="mb-3">
            <Input
              labelText="Display Order"
              defaultValue={0}
              field="displayOrder"
              register={register}
            />
          </div> */}
          <div className="d-flex">
            <CheckBox
              labelText="Is active"
              field="isActive"
              register={register}
              defaultChecked={false}
            />
          </div>
          {/* <CategoryImage setValue={setValue} id="category-image" image={null} /> */}
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          &emsp;
          <Link href="/catalog/categories">
            <button className="btn btn-outline-secondary" type="button">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
