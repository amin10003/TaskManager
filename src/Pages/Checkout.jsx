import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 flex justify-between"
          >
            <h2>{item.title}</h2>

            <p>
              {item.quantity} × ${item.price}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6">
        Total: ${totalPrice.toFixed(2)}
      </h2>

      <button className="mt-6 border px-6 py-3 rounded-xl">Place Order</button>
    </div>
  );
}

export default Checkout;
