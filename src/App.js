import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import HomePage from './pages/HomePage';
import AddCaraPakai from './pages/AddCaraPakai';
import ProductPage from './pages/ProductPage';
import Article from './pages/Article';

import Dashboard from './adminPage/Dashboard';
import ItemPage from './adminPage/ItemPage';
import CaraPakai from './adminPage/CaraPakai';
import Ingredients from './adminPage/Ingredients';

import './App.css';

const App = () => {
  return (
      <BrowserRouter>
        <RecoilRoot>
          <div style={{minHeight:'100vh'}}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="produk" element={<ProductPage/>} />
              <Route path="article" element={<Article/>} />
              <Route path="add-cara-pakai" element={<AddCaraPakai/>} />

              <Route path="admin" element={<Dashboard/>}  />
              <Route path="admin/items" element={<ItemPage/>} />
              <Route path="admin/cara-pakai" element={<CaraPakai/>} />
              <Route path="admin/ingredients" element={<Ingredients/>} />
            </Routes>
          </div> 
        </RecoilRoot>
      </BrowserRouter>
  );
}
 
export default App;