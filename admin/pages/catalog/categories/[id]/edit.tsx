import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Category } from '../../../../modules/catalog/models/Category';
import {
  getCategories,
  getCategory,
  updateCategory,
} from '../../../../modules/catalog/services/CategoryService';
import { CATEGORIES_URL, ResponseStatus } from '../../../../constants/Common';
import { handleUpdatingResponse } from '../../../../common/services/ResponseStatusHandlingService';
import { useForm } from 'react-hook-form';
import { uploadMedia } from '../../../../modules/catalog/services/MediaService';
import { toast } from 'react-toastify';
import { isValidFile, validTypes } from '../../../../modules/catalog/components/ChooseThumbnail';
import ChooseImageCommon from '../../../../common/components/ChooseImageCommon';
import styles from '../../../../styles/ChooseImage.module.css';
import { Language } from '@catalogModels/Language';
import { getLanguages } from '@catalogServices/LanguagesService';
import { Tab, Tabs } from 'react-bootstrap';

type Image = {
  id: number;
  url: string;
};

const CategoryEdit: NextPage = () => {
  const router = useRouter();
  const { setValue, handleSubmit, register } = useForm<Category>();
  const { id } = router.query;
  var slugify = require('slugify');
  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category>();
  const [slug, setSlug] = useState<string>();
  const [imageId, setImageId] = useState<number>();
  const [categoryImage, setCategoryImage] = useState<Image | null>();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [tabKey, setTabKey] = useState<string>('');

  const handleSubmitEdit = async (data: any, event: any) => {
    event.preventDefault();
    // if (event.target.parentCategory.value == 0) event.target.parentCategory.value = null;
    const parentId = event?.target?.parentId?.value && event?.target?.parentId?.value != '-1' ? +event?.target?.parentId?.value : null;
    const category = {
      code: event?.target?.code?.value,
      isActive: event?.target?.isActive?.checked,
      parentId: parentId,
      contents: data.categoryContent,
    };

    if (id) {
      const response = await updateCategory(+id, category);
      console.log(response)
      if (response.status === ResponseStatus.SUCCESS) {
        router.replace(CATEGORIES_URL);
      }
      handleUpdatingResponse(response);
    }
  };
  const renderSeletedCategory: Function = (
    category: Category,
    currentCategory: Category,
    parentHierarchy: string
  ) => {
    if (category.id === currentCategory?.parentId) {
      return (
        <option selected value={category.id} key={category.id}>
          {parentHierarchy + category.code}
        </option>
      );
    }
    return (
      <option value={category.id} key={category.id}>
        {parentHierarchy + category.code}
      </option>
    );
  };

  const renderCategoriesHierarchy: Function = (
    id: number,
    list: Array<Category>,
    parentHierarchy: string,
    currentCategory: Category
  ) => {
    let renderArr = list.filter((e) => e.parentId == id);
    const newArr = list.filter((e) => e.parentId != id);
    renderArr = renderArr.sort((a: Category, b: Category) => a.code.localeCompare(b.code));
    return renderArr.map((category: Category) => {
      return (
        <React.Fragment key={category.id}>
          {renderSeletedCategory(category, currentCategory, parentHierarchy)}
          {renderCategoriesHierarchy(
            category.id,
            newArr,
            parentHierarchy + category.code + ' >> ',
            currentCategory
          )}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    if (id)
      getCategory(+id).then((data) => {
        setCategory(data);
        // setSlug(data.slug);
        console.log(data);

        // if (data.categoryImage) {
        //   setImageId(data.categoryImage.id);
        //   setCategoryImage(data.categoryImage);
        // }
      });
  }, [id]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
    getLanguages().then((data) => {
      setLanguages(data);
      setTabKey(data[0].langId);
    });
  }, []);

  // const onChangeProductImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!event) {
  //     return;
  //   }

  //   const fileList = event.target.files;
  //   const isAllValidImage =
  //     fileList && Array.from(fileList).every((file) => isValidFile(file, validTypes));

  //   if (!isAllValidImage) {
  //     toast.error('Please select an image file (jpg or png)');
  //     return;
  //   }
  //   try {
  //     const file = fileList[0];
  //     const res = await uploadMedia(file);
  //     const url = URL.createObjectURL(file);
  //     setValue?.('imageId', res.id);
  //     setImageId(res.id);
  //     setCategoryImage({
  //       id: res.id,
  //       url,
  //     });
  //   } catch (e) {
  //     toast.error('Upload image failed');
  //   }
  // };

  // const onDeleteImage = () => {
  //   setCategoryImage(null);
  //   setImageId(undefined);
  // };

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(handleSubmitEdit)} name="form">
            <div className="mb-3">
              <label className="form-label" htmlFor="code">
                Code
              </label>
              <input
                {...register('code')}
                className="form-control"
                type="text"
                id="code"
                name="code"
                defaultValue={category?.code}
                required
              />
            </div>
            <Tabs activeKey={tabKey} onSelect={(e: any) => setTabKey(e)} >
              {languages.map((lang, index) => {
                setValue(`categoryContent.${index}.langId`, lang.langId);
                setValue(`categoryContent.${index}.title`, category?.categoryContent[index]?.title)
                setValue(`categoryContent.${index}.slug`, category?.categoryContent[index]?.slug)
                setValue(`categoryContent.${index}.description`, category?.categoryContent[index]?.description)
                return (
                  <Tab key={lang.langId} eventKey={lang.langId} title={lang.langId} style={{ border: '1px solid #dee2e6', borderTop: 'none', padding: '10px', borderRadius: '.25rem' }}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor={`categoryContent.${index}.title`}>
                        Title
                      </label>
                      <input
                        {...register(`categoryContent.${index}.title`)}
                        className="form-control"
                        type="text"
                        id={`categoryContent.${index}.title`}
                        name={`categoryContent.${index}.title`}
                        // defaultValue={category?.categoryContent[index]?.title}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor={`categoryContent.${index}.slug`}>
                        Slug
                      </label>
                      <input
                        {...register(`categoryContent.${index}.slug`)}
                        className="form-control"
                        type="text"
                        id={`categoryContent.${index}.slug`}
                        name={`categoryContent.${index}.slug`}
                        // defaultValue={category?.categoryContent[index]?.slug}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor={`categoryContent.${index}.description`}>
                        Description
                      </label>
                      <textarea
                        {...register(`categoryContent.${index}.description`)}
                        className="form-control"
                        id={`categoryContent.${index}.description`}
                        // defaultValue={category?.categoryContent[index]?.description}
                        name={`categoryContent.${index}.description`}
                      />
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
            <div className="mb-3 mt-3">
              <label className="form-label" htmlFor="parentCategory">
                Parent category
              </label>
              <select className="form-control" id="parentId" name="parentCategory">
                <option value={-1}>Top</option>
                {renderCategoriesHierarchy(null, categories, '', category)}
              </select>
            </div>

            {/* <div className="mb-3">
              <label className="form-label" htmlFor="metaKeywords">
                Meta Keywords
              </label>
              <input
                className="form-control"
                type="text"
                id="metaKeywords"
                name="metaKeywords"
                defaultValue={category?.metaKeywords}
              />
            </div> */}
            {/* <div className="mb-3">
              <label className="form-label" htmlFor="metaDescription">
                Meta Description
              </label>
              <textarea
                className="form-control"
                id="metaDescription"
                name="metaDescription"
                defaultValue={category?.metaDescription}
              />
            </div> */}
            {/* <div className="mb-3">
              <label className="form-label" htmlFor="displayOrder">
                Display Order
              </label>
              <input
                className="form-control"
                type="number"
                defaultValue={category?.displayOrder}
                min={0}
                id="displayOrder"
                name="displayOrder"
              />
            </div> */}
            <div className="d-flex">
              <label
                className="form-check-label mr-3"
                htmlFor="isActive"
                style={{ marginRight: '15px' }}
              >
                isActive
              </label>
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  defaultChecked={category?.isActive}
                />
              </div>
            </div>
            {/* {!categoryImage && (
              <div className="mb-3">
                <label className={styles['image-label']} htmlFor="category-image">
                  Choose category image
                </label>
              </div>
            )} */}
            {/* <input
              hidden
              type="file"
              multiple
              id="category-image"
              onChange={(event) => onChangeProductImage(event)}
            /> */}
            {/* {categoryImage && (
              <div className="mb-3">
                <ChooseImageCommon
                  id="category-image"
                  url={categoryImage.url}
                  onDeleteImage={onDeleteImage}
                />
              </div>
            )} */}
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
    </>
  );
};
export default CategoryEdit;
