import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import ModalDeleteCustom from '../../../common/items/ModalDeleteCustom';
import { handleDeletingResponse } from '../../../common/services/ResponseStatusHandlingService';
import { AttributeResponseDto } from '@catalogModels/AttributeResponseDto';
import { deleteAttribute, getAttributes } from '@catalogServices/AttributeService';

const AttributesList: NextPage = () => {
  const [attributes, setAttributes] = useState<AttributeResponseDto[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [attributeId, setAttributeId] = useState(0);
  const [attributeName, setAttributeName] = useState('');
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleClose = () => setShowModalDelete(false);

  const handleDelete = () => {
    setShowModalDelete(false);
    deleteAttribute(+attributeId).then((response) => {
      handleDeletingResponse(response, attributeName);
      getListAttributes();
    });
  };


  function getListAttributes(): void {
    getAttributes().then((data) => {
      setAttributes(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    setLoading(true);
    getListAttributes();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!attributes) return <p>No attributes</p>;

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <h2 className="text-danger font-weight-bold mb-3">Attributes</h2>
        </div>
        <div className="col-md-4 text-right">
          <Link href="/catalog/attributes/create">
            <Button>Create Attribute</Button>
          </Link>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Options</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {attributes.map((attribute) => {
                return (
                    <React.Fragment key={attribute.id}>
                        <tr>
                            <td>{attribute.id}</td>
                            <td>{attribute.name}</td>
                            <td>{attribute.type}</td>
                            <td>{attribute.options}</td>

                            <td>
                                <Link href={`/catalog/attributes/${attribute.id}`}>
                                <button className="btn btn-outline-primary btn-sm" type="button">
                                    Edit
                                </button>
                                </Link>
                                &nbsp;
                                <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => {
                                    setAttributeId(attribute.id);
                                    setAttributeName(attribute.name);
                                    setShowModalDelete(true);
                                }}
                                >
                                Delete
                                </button>
                            </td>
                        </tr>
                    </React.Fragment>
                    );
                })
            }
        </tbody>
      </Table>
      <ModalDeleteCustom
        showModalDelete={showModalDelete}
        handleClose={handleClose}
        nameWantToDelete={attributeName}
        handleDelete={handleDelete}
        action="delete"
      />
    </>
  );
};

export default AttributesList;
