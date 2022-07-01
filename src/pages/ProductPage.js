import { useContext, useState } from 'react';
import {FaSearch} from 'react-icons/fa';

import CardComp from '../components/CardComp';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

import { ProductContext } from '../context/ProductContext';

const HomePage = () => {
  const imgs = ["/jumbotron/1.png", "/jumbotron/2.png", "/jumbotron/3.png"];
  const [cariProduk, setCariProduk] = useState();
  const { products, setProducts } = useContext(ProductContext);

  const handleCariChange = e => {
    const { value } = e.target;
    setCariProduk(value);
  }
  const handleCariSubmit = e => {
    e.preventDefault()
    const productFiltered = products.filter(product => {
      return product.nama.toUpperCase().includes(cariProduk.toUpperCase());
    });
    console.log(productFiltered);
    setProducts(productFiltered);
  }

  return (
    <>
      <NavbarComp/>
      <CarouselComp imgs={imgs}/>
      <div className='container my-5'>
        <h2>Produk</h2>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="d-flex">
              <input onChange={handleCariChange} className='form-control' name='cari' placeholder='cari..' type="search" />
              <button onClick={handleCariSubmit} className="btn border bg-light ms-3">
                <FaSearch/>
              </button>
            </div>
          </div>
          <div className="col-md-8 col-0"></div>
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3 col-6">
                <CardComp data={product}/>
              </div>
            )
          })}
        </div>
      </div>
      <FooterComp/>
    </>
  );
};

export default HomePage;
