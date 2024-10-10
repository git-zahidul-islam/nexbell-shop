import { useState } from "react";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  // filter price fun
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleApplyFilter = () => {
    console.log(`Min Price: ${priceRange.min}, Max Price: ${priceRange.max}`);
  };

  //   filter by category
  const handleCheckboxChange = (category) => {
    const isChecked = selectedCategories.includes(category);
    const updatedCategories = isChecked
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    console.log(updatedCategories); // Log the selected categories
  };

  return (
    <section className="min-h-screen flex gap-5 pr-5">
      {/* left side ber */}
      <div className="w-[15%] border-r border-black px-4 h-screen">
        {/* filter by category */}
        <div className="py-5">
          <h2 className="text-lg font-bold mb-1">Filter by Category</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category.id}`}
                  className="mr-2"
                  value={category.name}
                  onChange={() => handleCheckboxChange(category.name)}
                  checked={selectedCategories.includes(category.name)}
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="text-gray-700"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* sorting by price */}
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
              onClick={handleApplyFilter}
              className="w-full bg-[#f58515e7] text-white p-2 rounded hover:bg-[#F58515]"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* products show ber */}
      <div className="w-[85%]">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-7">
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
            {/* product 1 */}
            <div className="space-y-3">
                <div className="bg-green-400 h-32 w-full"></div>
                <p className="text-lg font-semibold text-black/95">StyView 19 inch Movitor</p>
                <strong className="block text-black/70">Price: 119$</strong>
            </div>
        </div>
      </div>
    </section>
  );
};

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Books" },
  { id: 5, name: "Beauty" },
];

export default Products;
