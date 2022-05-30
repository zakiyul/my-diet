import CardComp from '../components/CardComp';
import NavbarComp from '../components/NavbarComp';

const HomePage = () => {
  return (
    <div>
      <NavbarComp/>
      <div className='container'>
        <div className="jumbotron">
            <h1>Make Your Diet Easy</h1>
            <h4>Bersama kami, kamu bisa</h4>
        </div>
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
    </div>
  );
};

export default HomePage;
