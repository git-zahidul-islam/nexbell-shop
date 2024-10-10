import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeProduct = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
          const res = await axios.get("https://dummyjson.com/products");
          setProducts(res.data?.products.slice(0, 10));
    
        };
        fetchProducts();
      }, []);

    return (
        <div className="md:w-[90%] w-full mx-auto pb-10">
            <h1 className="md:text-2xl text-xl font-bold">Products</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3 mt-5">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-[#fff] flex flex-col justify-between h-full"
              >
                <div>
                  <img
                    className="w-full h-[224px] object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <p className="text-center text-base font-medium text-black/80 mt-2">
                    {product.category}
                  </p>
                  <h2 className="text-lg font-semibold text-black/95 flex justify-center flex-wrap py-1 text-center">
                    {product.title}
                  </h2>
                </div>
                <div className="pb-[2px]">
                  <strong className="text-black/70 flex justify-center">
                    TK. {product.price}$
                  </strong>
                  <p className="flex justify-center text-sm">
                    Rating: {product.rating}
                  </p>
                </div>
                <div>
                  <Link
                    to={`/products/${product.id}`}
                    className="w-full block text-center bg-[#F58515] font-semibold text-xl text-white/90 py-2"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700">
              No products found
            </p>
          )}
        </div>

          <div className="flex justify-center mt-5">

        <Link to={'/products'} className="bg-[#F58515] px-5 py-2 text-xl font-semibold text-white/90">More</Link>
          </div>
        </div>
    );
};

export default HomeProduct;