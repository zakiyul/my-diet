import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import SmallBox from "../adminLteComponents/SmallBox";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <MainSide />
      <div className="content-wrapper">
        <ContentHeader />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
             {[1,2,3].map(() => {
                 return (
                    <div className="col-lg-4 col-6">
                        <SmallBox title="Products" number="100" color="primary" icon="bag" />
                    </div>
                 )
             })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
