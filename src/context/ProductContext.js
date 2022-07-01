import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import config from '../global/config';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [showModalAddProduct, setShowModalAddProduct] = useState(false);
    const [showModalEditProduct, setShowModalEditProduct] = useState(false);
    const [showBMI, setShowBMI] = useState(false);
    const [productId, setProductId] = useState(null);

    const getProducts = async () => {
        const response = await axios.get(`${config.BASE_URL}/api/products/`);
        setProducts(response.data)
    };

    const handleClose = () => setShowModalAddProduct(false);
    const handleShow = () => setShowModalAddProduct(true);
    const handleCloseEditProduct = () => setShowModalEditProduct(false);
    const handleShowEditProduct = () => setShowModalEditProduct(true);
    const handleCloseBMI = () => setShowBMI(false);
    const handleShowBMI = () => {
        // console.log('clicked')
        setShowBMI(true)
    };

    useEffect(() => {
        getProducts();
    },[])

    return (
        <ProductContext.Provider value={{
            products,
            showModalAddProduct,
            showModalEditProduct,
            showBMI,
            productId,
            setProducts,
            setProductId,
            handleClose,
            handleShow,
            handleCloseBMI,
            handleShowBMI,
            handleCloseEditProduct,
            handleShowEditProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}