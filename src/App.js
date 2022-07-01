import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Article from './pages/Article';
import ResultAnalysis from './pages/Result-analysis';
import Analysis from './pages/Analysis';
import DetailProduct from './pages/DetailProduct';

import { AuthProvider } from './context/AuthContext';


import Dashboard from './adminPage/Dashboard';
import ProductPageAdmin from './adminPage/ProductPage';
import ArticlePage from './adminPage/ArticlePage';
import Login from './adminPage/Login';

import './App.css';
import EditProduct from './adminPage/EditProduct';
import EditArticle from './adminPage/EditArticel';

const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
          <div style={{minHeight:'100vh'}}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="produk" element={<ProductPage/>} />
              <Route path="artikel" element={<Article/>} />
              <Route path="analisis" element={<Analysis/>} />
              <Route path="hasil-analisis" element={<ResultAnalysis/>} />
              <Route path="produk/:productId" element={<DetailProduct/>} />
              
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<Dashboard/>}  />
              <Route path="admin/product" element={<ProductPageAdmin />} />
              <Route path="admin/article" element={<ArticlePage/>} />
              <Route path="admin/product/edit/:productId" element={<EditProduct />} />
              <Route path="admin/article/edit/:articleId" element={<EditArticle />} />
            </Routes>
          </div> 
        </AuthProvider>
      </BrowserRouter>
  );
}
 
export default App;