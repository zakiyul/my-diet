import { useState, useContext } from 'react';
import axios from 'axios';

import { ArticleContext } from '../context/ArticleContext';
import config from '../global/config';

const FormAddArticle = () => {
    const [article, setArticle] = useState({});
    const [articleImg, setArticleImg] = useState();
    const { handleClose, setArticles } = useContext(ArticleContext)

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
            payload.set(key, value)
        })
        payload.append("image", articleImg);
        
        axios({
            method: 'POST',
            url: `${config.BASE_URL}/api/articles/`,
            headers: {},
            data: payload
        })
         .then((res) => {
             console.log(res);
             setArticles(prevState => {
                return [res.data, ...prevState]
             });
             handleClose();
             window.location.reload(false);
         })
         .catch((e) => {
             console.log(e)
         })
        console.log(payload)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Judul</label>
                <input onChange={handleChange} type="text" className="form-control" name="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Link Artikel</label>
                <input onChange={handleChange} type="text" name="link" id="link" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">image</label>
                <input type="file" name="image" onChange={handleImage} id="image" className="form-control" />
            </div>
            <button type='submit' className="btn btn-primary">add new article</button>
        </form>
     );
}
 
export default FormAddArticle;