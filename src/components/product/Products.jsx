import { useState, useEffect } from "react";
import getProducts from "../../../public/api/fetchProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 bg-gradient-to-b from-gray-100 to-slate-400 rounded-lg p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden flex flex-col justify-between shadow-lg bg-white"
        >
          <img
            className="w-full h-56 object-cover"
            src={product.images[0]}
            alt={product.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <div className="flex justify-between">
              <span className="text-gray-700 text-base font-semibold">
                Price: ${product.price}
              </span>
              <span className="text-gray-700 text-base font-semibold">
                Stock:
                {product.stock < 50 ? (
                  <span className="text-red-500"> {product.stock}</span>
                ) : (
                  ` ${product.stock}`
                )}
              </span>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 py-2 px-4 text-white font-semibold font-serif rounded-full mb-4 mx-6">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
