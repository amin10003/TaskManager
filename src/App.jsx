<<<<<<< HEAD
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Component/Navbar'
import ProductDetails from '.Pages/ProductDetails'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
=======
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Component/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
>>>>>>> 06ef4fc7e157136bbe1020307a44d0aa522411ec

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
