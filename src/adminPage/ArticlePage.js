import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import TableArticle from '../adminLteComponents/TabelArticle';
import FormAddArticle from '../adminLteComponents/FormAddArticle';
import FormEditArticle from '../adminLteComponents/FormEditArticle';

import { ArticleContext } from '../context/ArticleContext';
import { AuthContext } from '../context/AuthContext';

const ItemPage = () => {
  const { handleClose, handleCloseEditArticle, showModalAddArticle, showModalEditArticle } = useContext(ArticleContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="wrapper">
      {!user && <Navigate to="/login" replace /> }
      <Navbar />
      <MainSide />
      <div className="content-wrapper">
      <Modal size='lg' show={showModalAddArticle} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddArticle />
            {/* <FormAddProduct/> */}
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <Modal size='lg' show={showModalEditArticle} onHide={handleCloseEditArticle}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormEditArticle/>
          </Modal.Body>
          <Modal.Footer>
            <button className='btn btn-secondary' onClick={handleCloseEditArticle}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <ContentHeader title="Article" />
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <TableArticle />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
