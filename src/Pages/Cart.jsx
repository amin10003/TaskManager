import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

function Cart() {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cart Items</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 flex gap-4 items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 object-contain"
            />

            <div className="space-y-2">
              <h2 className="font-semibold">{item.title}</h2>

              <p className="font-bold">${item.price}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.id,
                  })
                }
                className="border px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
