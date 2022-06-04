import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import TableComp from "../adminLteComponents/TableComp";
import TableProduct from '../adminLteComponents/TableProduct';
import FormAddProduct from '../adminLteComponents/FormAddProduct';

import { ProductContext } from '../context/ProductContext';


const ItemPage = () => {
  const { handleClose, showModalAddProduct} = useContext(ProductContext);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const res = await axios.get('http://localhost:8000/api/products/')
    console.log(res.data);
    setItems(res.data)
  }

  useEffect(() => {
    getItems()
  },[])

  return (
    <div className="wrapper">
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
        <ContentHeader title="Products Item" />
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <TableProduct data={items}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
