import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import ModalDeleteCustom from '../../../common/items/ModalDeleteCustom';
import { deleteCategory, getCategories } from '../../../modules/catalog/services/CategoryService';
import { handleDeletingResponse } from '../../../common/services/ResponseStatusHandlingService';
import { CategoryResponseDto } from '@catalogModels/CategoryResponseDto';

const CategoryList: NextPage = () => {
  const [categories, setCategories] = useState<CategoryResponseDto[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleClose = () => setShowModalDelete(false);
  const handleDelete = () => {
    setShowModalDelete(false);
    deleteCategory(+categoryId).then((response) => {
      handleDeletingResponse(response, categoryName);
      getListCategory();
    });
  };
  function getListCategory(): void {
    getCategories().then((data) => {
      setCategories(data.items);
      setLoading(false);
    });
  }
  useEffect(() => {
    setLoading(true);
    getListCategory();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!categories) return <p>No category</p>;

  const renderCategoriesHierarchy: Function = (
    id: number,
    list: Array<CategoryResponseDto>,
    parentHierarchy: string
  ) => {
    if (!Array.isArray(list)) {
      return <></>;
    }
    
    const renderArr = list.filter((e) => e.parentId == id);
    const newArr = list.filter((e) => e.parentId != id);

    return renderArr
      .sort((a: CategoryResponseDto, b: CategoryResponseDto) => a.code.localeCompare(b.code))
      .map((category: CategoryResponseDto) => {
        return (
          <React.Fragment key={category.id}>
            <tr>
              <td>{category.id}</td>
              <td>
                {parentHierarchy}
                {category.code}
              </td>
              <td>{category?.contents?.find(e => e.langId = 'ro')?.title}</td>

              <td>{category.isActive ? '+' : '-'}</td>
              <td>
                <Link href={`/catalog/categories/${category.id}`}>
                  <button className="btn btn-outline-primary btn-sm" type="button">
                    Edit
                  </button>
                </Link>
                &nbsp;
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => {
                    setCategoryId(category.id);
                    setCategoryName(category.code);
                    setShowModalDelete(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
            {renderCategoriesHierarchy(
              category.id,
              newArr,
              parentHierarchy + category.code + ' >> '
            )}
          </React.Fragment>
        );
      });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <h2 className="text-danger font-weight-bold mb-3">Categories</h2>
        </div>
        <div className="col-md-4 text-right">
          <Link href="/catalog/categories/create">
            <Button>Create Category</Button>
          </Link>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>Title</th>
            <th>Is active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderCategoriesHierarchy(null, categories, '')}</tbody>
      </Table>
      <ModalDeleteCustom
        showModalDelete={showModalDelete}
        handleClose={handleClose}
        nameWantToDelete={categoryName}
        handleDelete={handleDelete}
        action="delete"
      />
    </>
  );
};

export default CategoryList;
