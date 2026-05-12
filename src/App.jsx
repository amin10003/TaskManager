import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Component/Navbar'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'

function App() {
  return (
   <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/product/:id" element={<ProductDetails/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
  </Routes>
   </>
  )
}

export default App