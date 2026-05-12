import { useEffect, useState } from "react";
import { getProducts } from "../Services/Api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const data = await getProducts();

      setProducts(data);
    };
    fecthProducts();
  }, []);

  console.log(products)

  return (
    <>
      <h1 >Products</h1>
    </>
  );
}

export default Home;
