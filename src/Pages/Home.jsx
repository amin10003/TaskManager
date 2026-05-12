import { useEffect, useState } from "react";
import { getProducts } from "../Services/Api";
import ProductCard from "@/Component/ProductCard";
import SearchBar from "@/Component/SearchBar";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fecthProducts = async () => {
      const data = await getProducts();

      setProducts(data);
    };
    fecthProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  console.log(products);

  return (
    <>
      <div>
        <div className="p-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
