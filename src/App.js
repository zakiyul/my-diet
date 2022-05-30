import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCaraPakai from './pages/AddCaraPakai';
import ProductPage from './pages/ProductPage';

import Dashboard from './adminPage/Dashboard';
import ItemPage from './adminPage/ItemPage';

import './App.css';

const App = () => {
  return (
      <BrowserRouter>
        <div style={{minHeight:'100vh'}}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="produk" element={<ProductPage/>} />
            <Route path="add-cara-pakai" element={<AddCaraPakai/>} />

            <Route path="admin" element={<Dashboard/>}  />
            <Route path="admin/items" element={<ItemPage/>} />
          </Routes>
        </div> 
      </BrowserRouter>
  );
}
 
export default App;