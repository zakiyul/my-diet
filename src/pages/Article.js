import { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';

import Navbar from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

const ArticleCard = ({ image, title, link }) => {
    
    return (
        <div className="row mt-2">
                <div className="border p-3">
                        <img src={`https://zakiulfikri.pythonanywhere.com/${image}`} className="img-fluid" alt={title} />
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'></p>
                        <a href ={link} target="_blank" rel='noreferrer'>Selengkapnya</a>
                </div>
            </div>
    )
}

const ArticlePage = () => {
    const { articles } = useContext(ArticleContext);
    const imgs = ["/jumbotron/1.png", "/jumbotron/2.png", "/jumbotron/3.png"];
    
    return ( 
        <>
            <Navbar/>
            <CarouselComp imgs={imgs} />
            <div className='container'>
                <h2 className='py-3'>Artikel</h2>
                <div className="row">
                    {articles.map((article) => {
                        return (
                            <div className='col-md-4 col-12 p-3'>
                                <ArticleCard image={article.image} title={article.title} link={article.link} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <FooterComp/>
        </>
     );
}
 
export default ArticlePage;