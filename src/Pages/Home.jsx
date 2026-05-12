import { useEffect, useState } from "react";
import { getProducts } from "../Services/Api";
import ProductCard from "@/Component/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const data = await getProducts();

      setProducts(data);
    };
    fecthProducts();
  }, []);

  console.log(products);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
