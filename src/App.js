import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Article from './pages/Article';
import ResultAnalysis from './pages/Result-analysis';

import Dashboard from './adminPage/Dashboard';
import ProductPageAdmin from './adminPage/ProductPage';
import ArticlePage from './adminPage/ArticlePage';

import './App.css';
import Analysis from './pages/Analysis';

const App = () => {
  return (
      <BrowserRouter>
        <RecoilRoot>
          <div style={{minHeight:'100vh'}}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="produk" element={<ProductPage/>} />
              <Route path="artikel" element={<Article/>} />
              <Route path="analisis" element={<Analysis/>} />
              <Route path="hasil-analisis" element={<ResultAnalysis/>} />

              <Route path="admin" element={<Dashboard/>}  />
              <Route path="admin/items" element={<ProductPageAdmin />} />
              <Route path="admin/cara-pakai" element={<ArticlePage/>} />
            </Routes>
          </div> 
        </RecoilRoot>
      </BrowserRouter>
  );
}
 
export default App;