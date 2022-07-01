import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import TableProduct from '../adminLteComponents/TableProduct';
import FormAddProduct from '../adminLteComponents/FormAddProduct';
import FormEditProduct from '../adminLteComponents/FormEditProduct';

import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';

const ProductPage = () => {
  const { handleClose, handleCloseEditProduct, showModalAddProduct, showModalEditProduct, products} = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  return (
    <div className="wrapper">
      {!user && <Navigate to="/login" replace /> }
      <Navbar />
      <MainSide />
      <div className="content-wrapper">

        <Modal size='lg' show={showModalAddProduct} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddProduct/>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <Modal size='lg' show={showModalEditProduct} onHide={handleCloseEditProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormEditProduct id={1}/>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleCloseEditProduct}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <ContentHeader title="Products Item" />
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <TableProduct data={products}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
