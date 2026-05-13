import { getSingleProduct } from "@/Services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";

function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(productId);

        setProduct(data);
      } catch (error) {
        setError("Falided product details");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p>{product.description}</p>

          <h2 className="text-xl font-semibold">${product.price}</h2>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
            className="border px-6 py-2 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
