import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <div>
      <h1>Cart Page</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div>{item.image}</div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
