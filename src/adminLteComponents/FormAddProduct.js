import { useState } from 'react';
import axios from 'axios';

import { CKEditor } from '@ckeditor/ckeditor5-react'
import Classic from '@ckeditor/ckeditor5-build-classic';

const FormAddProduct = () => {
    const [product, setProduct] = useState({});
    const [productImg, setProductImg] = useState();

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
            payload.set(key, value)
        })
        payload.append("image", productImg);
        
        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/products/',
            headers: {},
            data: payload
        })
         .then((res) => {
             console.log(res)
         })
         .catch((e) => {
             console.log(e)
         })
        console.log(payload)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Nama</label>
                <input onChange={handleChange} type="text" className="form-control" name="nama" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Harga</label>
                <input onChange={handleChange} type="number" name="harga" id="harga" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Rating</label>
                <input onChange={handleChange} type="number" name="rating" id="rating" max={5} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Deskripsi</label>
                <textarea onChange={handleChange} name="deskripsi" id="" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="">Cara Pakai</label>
                <CKEditor
                    name="caraPakai"
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
            </div>
            <button type='submit' className="btn btn-primary">add new product</button>
        </form>
     );
}
 
export default FormAddProduct;