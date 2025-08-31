import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Custom Wheels",
  description:
    "Browse our premium collection of custom wheels and rims. Find the perfect wheels for your car, truck, or SUV. Free shipping on orders over $500.",
  keywords:
    "custom wheels for sale, alloy wheels, car rims, truck wheels, SUV wheels, wheel shop",
};

// Mock product data - in a real app, this would come from your database
const products = [
  {
    id: 1,
    name: "Vortex Pro Series",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Alloy",
    size: '18"',
    finish: "Matte Black",
    inStock: true,
  },
  {
    id: 2,
    name: "Chrome Elite",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Chrome",
    size: '20"',
    finish: "Chrome",
    inStock: true,
  },
  {
    id: 3,
    name: "Carbon Fiber Sport",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Carbon Fiber",
    size: '19"',
    finish: "Carbon Fiber",
    inStock: false,
  },
  {
    id: 4,
    name: "Steel Off-Road",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Steel",
    size: '17"',
    finish: "Black",
    inStock: true,
  },
  {
    id: 5,
    name: "Forged Performance",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Forged",
    size: '21"',
    finish: "Gunmetal",
    inStock: true,
  },
  {
    id: 6,
    name: "Classic Spoke",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Alloy",
    size: '18"',
    finish: "Silver",
    inStock: true,
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Shop Custom Wheels
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Discover our premium collection of custom wheels and rims. From
              sleek alloy designs to rugged off-road options, we have the
              perfect wheels for your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none">
                <option value="">All Categories</option>
                <option value="alloy">Alloy</option>
                <option value="chrome">Chrome</option>
                <option value="carbon-fiber">Carbon Fiber</option>
                <option value="steel">Steel</option>
                <option value="forged">Forged</option>
              </select>
              <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none">
                <option value="">All Sizes</option>
                <option value="17">17"</option>
                <option value="18">18"</option>
                <option value="19">19"</option>
                <option value="20">20"</option>
                <option value="21">21"</option>
              </select>
              <select className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none">
                <option value="">All Finishes</option>
                <option value="matte-black">Matte Black</option>
                <option value="chrome">Chrome</option>
                <option value="carbon-fiber">Carbon Fiber</option>
                <option value="black">Black</option>
                <option value="gunmetal">Gunmetal</option>
                <option value="silver">Silver</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 hover:scale-105 hover:transform"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 right-4 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                      Out of Stock
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-400">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {product.size} • {product.finish}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {product.category}
                    </span>
                    <button
                      className={`rounded-lg px-4 py-2 font-semibold transition-colors duration-200 ${
                        product.inStock
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "cursor-not-allowed bg-gray-600 text-gray-400"
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
              Load More Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
