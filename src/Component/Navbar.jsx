import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-commerce</h1>

      <div className="flex gap-4 text-xl">
        <Link to="/">Home</Link>

        <Link to="/cart">Cart ({cartItems.length})</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
