import { useContext } from 'react';

import CardComp from '../components/CardComp';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

import { ProductContext } from '../context/ProductContext';

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const imgs = ["/jumbotron/1.png", "/jumbotron/2.png"];

  return (
    <>
      <NavbarComp/>
      <CarouselComp imgs={imgs}/>
      <div className='container my-5'>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3">
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
