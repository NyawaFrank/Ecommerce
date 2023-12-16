
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Mens' element={<ShopCategory category="men" />}/>
          <Route path='/Womens' element={<ShopCategory category="women"/>}/>
          <Route path='/Kids' element={<ShopCategory category="kid"/>}/>
          <Route path='/Product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/LoginSignup' element={<LoginSignup/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
