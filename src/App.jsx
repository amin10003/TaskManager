import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Component/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProtectedRoute from "./Component/ProtectedRoute";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
