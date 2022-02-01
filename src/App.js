
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop'
import Review from './components/Review/Review';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Perched from './components/purched/Purched';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Header/>
      <Routes>
   
      <Route path="/" element={<Products/>}/>
      <Route path="/home" element={<Products/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
      <Route path="/perched" element={<Perched/>}/>
     
    

      </Routes>
      </BrowserRouter>
      
   
    </div>
  );
}

export default App;
