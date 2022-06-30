import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import SmallBox from "../adminLteComponents/SmallBox";

import { ArticleContext } from '../context/ArticleContext';
import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { products } = useContext(ProductContext);
  const { articles } = useContext(ArticleContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="wrapper">
      {!user && <Navigate to="/login" replace /> }
      <Navbar />
      <MainSide />
      <div className="content-wrapper">
        <ContentHeader title="Dashboard" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                  <SmallBox title="Products" number={`${products.length}`} color="primary" icon="bag" />
              </div>
              <div className="col-6">
                  <SmallBox title="Articles" number={`${articles.length}`} color="primary" icon="newspaper-outline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
