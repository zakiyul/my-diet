/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../global/config';

import { CKEditor } from '@ckeditor/ckeditor5-react'
import Classic from '@ckeditor/ckeditor5-build-classic';

import { ProductContext } from '../context/ProductContext';

const FormAddProduct = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [productImg, setProductImg] = useState();

    const { setProducts } = useContext(ProductContext)

    const handleChange = e => {
        const {value, name} = e.target;
        setProduct({...product, [name]: value})
    }
    const handleCKEditor = (nama, value) => {
        setProduct({...product, [nama]: value})
    }
    const handleImage = e => {
        const file = e.target.files[0];
        setProductImg(file)
    }
    const handleSubmit = e => {
        e.preventDefault();
        let payload = new FormData();

        Object.entries(product).forEach(([key, value]) => {
            payload.set(key, value);
        });

        if (productImg) {
            payload.set("image", productImg)
        } else {
            delete payload.delete("image")
        }

        axios.patch(`${config.BASE_URL}/api/products/${props.product_id}`, payload)
         .then(res => {
            console.log(res);
            setProducts(prevState => {
                return [res.data, ...prevState]
             });
            navigate('/admin/product',{ replace: true });
         })
         .catch(e => console.log(e))
    }
    const getProduct = async () => {
        const res = await axios.get(`${config.BASE_URL}/api/products/${props.product_id}`);
        setProduct(res.data);
    }

    useEffect(() => {
        getProduct();
    },[])

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Nama</label>
                <input onChange={handleChange} type="text" className="form-control" name="nama" value={product.nama} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Harga</label>
                <input onChange={handleChange} type="number" name="harga" id="harga" className="form-control" value={product.harga} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Rating</label>
                <input onChange={handleChange} type="number" name="rating" id="rating" max={5} className="form-control" value={product.rating} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Deskripsi</label>
                <textarea onChange={handleChange} name="deskripsi" id="" cols="30" rows="10" className="form-control" value={product.deskripsi} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Cara Pakai</label>
                <CKEditor
                    name="caraPakai"
                    data={product.caraPakai ? product.caraPakai : ''}
                    editor={ Classic } 
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        handleCKEditor("caraPakai", data)
                    }} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">Ingredients</label>
                <CKEditor
                    name="ingredients"
                    data={product.ingredients ? product.ingredients : ''}
                    editor={ Classic } 
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        handleCKEditor("ingredients", data)
                    }} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="">image</label>
                <input type="file" name="image" onChange={handleImage} id="image" className="form-control" />
                <small>current image: <a href={`${config.BASE_URL}/${product.image}`}>{product.nama}</a> </small>
            </div>
            <button type='submit' className="btn btn-primary">edit product</button>
        </form>
     );
}
 
export default FormAddProduct;