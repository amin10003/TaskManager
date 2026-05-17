import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, dispatch } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cart Items</h1>

      {cartItems.length === 0 && (
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      )}
      {cartItems.length > 0 && (
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
                <p>Quantity: {item.quantity}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE_QUANTITY",
                        payload: item.id,
                      })
                    }
                    className="border px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      })
                    }
                    className="border px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                {cartItems.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mt-6">
                      Total: ${totalPrice.toFixed(2)}
                    </h2>
                    <Link to="/checkout">
                      <button className="mt-4 border px-6 py-3 rounded-xl">
                        Proceed To Checkout
                      </button>
                    </Link>
                  </>
                )}
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
      )}
    </div>
  );
}

export default Cart;
