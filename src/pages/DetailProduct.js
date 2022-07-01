/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../global/config';
import axios from 'axios';

import Navbar from '../components/NavbarComp';
import FooterComp from '../components/Footer';


const DetailProductPage = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    const getProduct = async () => {
        const response = await axios.get(`${config.BASE_URL}/api/products/${productId}`);
        console.log(response);
        setProduct(response.data);
    }

    useEffect(() => {
        getProduct();
    },[])
    
    return ( 
        <>
            <Navbar/>
            <div className='container p-4' style={{minHeight:'100vh'}}>
                <h2 className='py-3'>{product.nama}</h2>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <img className='img-fluid' src={`${config.BASE_URL}${product.image}`} alt={product.nama} />
                    </div>
                    <div className="col-md-8 col-12">
                        <div>
                            <strong>Deskripsi:</strong>
                            <p>{product.deskripsi}</p>
                        </div>
                        <div>
                            <strong>Cara Pakai:</strong>
                            <p dangerouslySetInnerHTML={{ __html: product.caraPakai }} />
                            {/* <p>{product.caraPakai}</p> */}
                        </div>
                        <div>
                            <strong>Komposisi:</strong>
                            <p dangerouslySetInnerHTML={{ __html: product.ingredients }} />
                            {/* <p>{product.caraPakai}</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp/>
        </>
     );
}
 
export default DetailProductPage;