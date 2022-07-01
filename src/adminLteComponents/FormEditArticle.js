/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import config from '../global/config';

import { ArticleContext } from '../context/ArticleContext';

const FormAddProduct = (props) => {
    const [article, setArticle] = useState({});
    const [articleImg, setArticleImg] = useState();

    const { articleId, setArticelId, handleClose, setArticles } = useContext(ArticleContext)

    const handleChange = e => {
        const {value, name} = e.target;
        setArticle({...article, [name]: value})
    }
    const handleImage = e => {
        const file = e.target.files[0];
        setArticleImg(file)
    }
    const handleSubmit = e => {
        e.preventDefault();
        let payload = new FormData();

        Object.entries(article).forEach(([key, value]) => {
            payload.set(key, value);
        });

        if (articleImg) {
            payload.set("image", articleImg)
        } else {
            delete payload.delete("image")
        }

        axios.patch(`${config.BASE_URL}/api/articles/${articleId}`, payload)
         .then(res => {
            console.log(res);
            setArticles(prevState => {
                return [res.data, ...prevState]
            })
            handleClose();
            setArticelId(null);
            window.location.reload(false);
         })
         .catch(e => console.log(e))
    }
    const getProduct = async () => {
        const res = await axios.get(`${config.BASE_URL}/api/articles/${articleId}`);
        setArticle(res.data);
    }

    useEffect(() => {
        getProduct();
    },[])

    return ( 
        <form onSubmit={handleSubmit}>
             <div className="mb-3">
                <label>Judul</label>
                <input onChange={handleChange} type="text" className="form-control" name="title" value={article.title} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Link Artikel</label>
                <input onChange={handleChange} type="text" name="link" id="link" className="form-control" value={article.link} />
            </div>
            <div className="mb-3">
                <label htmlFor="">image</label>
                <input type="file" name="image" onChange={handleImage} id="image" className="form-control" />
                <small>current image: <a href={`${config.BASE_URL}/${article.image}`}>{article.nama}</a> </small>
            </div>
            <button type='submit' className="btn btn-primary">edit article</button>
        </form>
     );
}
 
export default FormAddProduct;