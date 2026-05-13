function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 space-y-4">
      <div className="h-52 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold line-clamp-2">{product.title}</h2>

        <p className="text-lg font-bold">${product.price}</p>

        <button className="w-full border rounded-lg py-2">View Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
