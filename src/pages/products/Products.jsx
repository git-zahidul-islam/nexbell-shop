import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Toggle filter visibility
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Filter products based on search, category, and price
  const filteredProducts = products.filter((product) => {
    // Filter by search term
    const matchesSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by category
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // Filter by price range
    const matchesPrice =
      (priceRange.min === "" || product.price >= Number(priceRange.min)) &&
      (priceRange.max === "" || product.price <= Number(priceRange.max));

    return matchesSearchTerm && matchesCategory && matchesPrice;
  });

  // Filter by price function
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter by category
  const handleCheckboxChange = (category) => {
    const isChecked = selectedCategories.includes(category);
    const updatedCategories = isChecked
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data?.products);

      // Get unique categories
      const uniqueCategories = [
        ...new Set(res.data.products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    };
    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-6 md:pr-5 md:px-0 px-2">
      {/* Hamburger Menu for mobile */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="text-2xl p-2 bg-gray-200 rounded"
        >
          &#9776;
        </button>

        {/* Search bar */}
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          name="search"
          id="search"
          placeholder="Search products"
          className="p-2 rounded outline-none border border-black/45"
        />
      </div>

      {/* Sidebar - Fullscreen on Mobile */}
      <div
        className={`fixed inset-0 z-50 bg-white px-5 transition-transform duration-300 md:w-[15%] md:relative md:translate-x-0 h-screen md:h-auto ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsFilterOpen(false)}
          className="absolute top-4 right-4 text-2xl p-2 bg-gray-200 rounded md:hidden"
        >
          &times;
        </button>

        {/* Filters */}
        <div className="py-5">
          {/* Search bar for larger screens */}
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="md:block hidden p-2 rounded outline-none border border-black/45 w-[175px]"
          />

          {/* Filter by category */}
          <div className="py-5">
            <h2 className="text-lg font-bold mb-1">Filter by Category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`id-${category}`}
                    className="mr-2"
                    value={category}
                    onChange={() => handleCheckboxChange(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  <label htmlFor={`id-${category}`} className="text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Filter by price */}
          <div>
            <h2 className="text-lg font-bold mb-2">Filter by Price</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="min-price" className="block text-gray-700">
                  Min Price
                </label>
                <input
                  type="number"
                  id="min-price"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter min price"
                />
              </div>
              <div>
                <label htmlFor="max-price" className="block text-gray-700">
                  Max Price
                </label>
                <input
                  type="number"
                  id="max-price"
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                  placeholder="Enter max price"
                />
              </div>
              <button
                onClick={() => console.log("Filter applied")}
                className="w-full bg-[#f58515e7] text-white p-2 hover:bg-[#F58515]"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products display */}
      <div className="w-full md:w-[85%] mb-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 mt-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                    to={`products/${product.id}`}
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
      </div>
    </section>
  );
};

export default Products;
