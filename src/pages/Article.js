import Navbar from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

const ArticleCard = () => {
    
    return (
        <div className="row justify-content-center mt-4">
                <div className="card p-5">
                    <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src="https://i.ibb.co/px8JS8j/gambar1-jpg.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                        <h5 className="card-title">Diet Sehat</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sint officia quibusdam totam cum, quod, doloremque quo deserunt laboriosam tempora dicta iusto. Inventore expedita vero doloremque, fuga ab explicabo suscipit.</p>
                        <a href ="https://vivahealth.co.id/article/detail/12261/mitos-dan-fakta-diet" className="btn btn-primary">Selengkapnya</a>
                        <p className="card-text"><small className="text-muted">Diposting 19 menit lalu</small></p>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

const ArticlePage = () => {
    const imgs = ["/jumbotron/1.png", "/jumbotron/2.png"];

    return ( 
        <>
            <Navbar/>
            <CarouselComp imgs={imgs} />
            <div className='container'>
                {[1,2,3].map(() => {
                    return <ArticleCard/>
                })}
            </div>
            <FooterComp/>
        </>
     );
}
 
export default ArticlePage;