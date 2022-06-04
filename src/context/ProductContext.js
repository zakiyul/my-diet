import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [showModalAddProduct, setShowModalAddProduct] = useState(false);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/items/');
        setProducts(response.data)
    };
    const handleClose = () => setShowModalAddProduct(false);
    const handleShow = () => setShowModalAddProduct(true);

    useEffect(() => {
        getProducts();
    },[])

    return (
        <ProductContext.Provider value={{ products, showModalAddProduct, handleClose, handleShow }}>
            {props.children}
        </ProductContext.Provider>
    )
}