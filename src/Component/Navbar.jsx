import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "@/Context/CartContext";
import { AuthContext } from "@/Context/AuthContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-commerce</h1>

      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>

        <Link to="/cart">Cart ({cartItems.length})</Link>

        {user && <p className="text-sm">{user}</p>}

        {!user && <Link to="/login">Login</Link>}

        {user && (
          <button onClick={logout} className="border px-3 py-1 rounded-lg">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
