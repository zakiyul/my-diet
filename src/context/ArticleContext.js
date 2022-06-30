import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [showModalAddArticle, setShowModalAddArticle] = useState(false);
    const [showModalEditArticle, setShowModalEditArticle] = useState(false);
    const [articleId, setArticleId] = useState(null);

    const getArticle = async () => {
        const res = await axios.get('https://zakiulfikri.pythonanywhere.com/api/articles/');
        setArticles(res.data);
    };

    const handleClose = () => setShowModalAddArticle(false);
    const handleShow = () => setShowModalAddArticle(true);;
    const handleCloseEditArticle = () => setShowModalEditArticle(false);
    const handleShowEditArticle = () => setShowModalEditArticle(true);
    
    useEffect(() => {
        getArticle();
    },[]);

    return (
        <ArticleContext.Provider value={{
            articles,
            showModalAddArticle,
            showModalEditArticle,
            articleId,
            setArticleId,
            handleClose,
            handleShow,
            handleCloseEditArticle,
            handleShowEditArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}