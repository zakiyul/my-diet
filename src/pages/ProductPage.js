import CardComp from '../components/CardComp';
import NavbarComp from '../components/NavbarComp';
import CarouselComp from '../components/CarouselComp';
import FooterComp from '../components/Footer';

const HomePage = () => {
  const imgs = ["/jumbotron/1.png", "/jumbotron/2.png"];

  return (
    <>
      <NavbarComp/>
      <CarouselComp imgs={imgs}/>
      <div className='container my-5'>
        {/* <div className="jumbotron">
            <h1>Make Your Diet Easy</h1>
            <h4>Bersama kami, kamu bisa</h4>
        </div> */}
        <div className="row">
          {[1,2,3,4,5,6,7,8].map(() => {
            return (
              <div className="col-md-3">
                <CardComp/>
              </div>
            )
          })}
        </div>
      </div>
      <FooterComp/>
    </>
  );
};

export default HomePage;
