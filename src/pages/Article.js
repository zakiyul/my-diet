import { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';

import Navbar from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

const ArticleCard = ({ image, title, link }) => {
    
    return (
        <div className="row justify-content-center mt-4">
                <div className="card p-5">
                    <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={`https://zakiulfikri.pythonanywhere.com/${image}`} className="img-fluid" alt={title} />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'></p>
                        <a href ={link} target="_blank" rel='noreferrer' className='btn btn-primary' >Selengkapnya</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

const ArticlePage = () => {
    const { articles } = useContext(ArticleContext);
    const imgs = ["/jumbotron/1.png", "/jumbotron/2.png"];
    
    return ( 
        <>
            <Navbar/>
            <CarouselComp imgs={imgs} />
            <div className='container'>
                <h2>Artikel</h2>
                {articles.map((article) => {
                    return <ArticleCard image={article.image} title={article.title} link={article.link} />
                })}
            </div>
            <FooterComp/>
        </>
     );
}
 
export default ArticlePage;