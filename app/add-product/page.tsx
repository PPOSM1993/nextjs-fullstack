import Sidebar from "../components/sidebar";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default async function AddProductPage() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-blue-500 bg-gray-800 flex">
      {/* Sidebar fijo */}
      <Sidebar currentPath="/add-product" />

      {/* Contenido principal */}
      <main className="flex-1 p-8 ml-64">
        {/* Encabezado */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-100 uppercase font-bold">
                Add Product
              </h1>
              <p className="text-sm text-gray-100">
                Add a new product to your inventory
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full border-none">
          <div className="bg-blue-500 bg-gray-800 rounded-none border-none  p-6 shadow-sm">
            <form className="space-y-6 border-none " action="">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-100 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Product Name"
                />
              </div>

              {/* Cantidad y Precio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Quantity *
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    required
                    className="w-full px-4 py-2 border border-gray-100 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-100 mb-2"
                  >
                    Price *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    min="0"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.0"
                  />
                </div>
              </div>

              {/* SKU */}
              <div>
                <label
                  htmlFor="sku"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  SKU (optional)
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter SKU"
                />
              </div>

              {/* Low Stock */}
              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-sm font-medium text-gray-100 mb-2"
                >
                  Low Stock At (optional)
                </label>
                <input
                  type="number"
                  id="lowStockAt"
                  name="lowStockAt"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter low stock threshold"
                />
              </div>

              {/* Botones */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex px-3 py-3 bg-green-600 text-white rounded-none hover:bg-green-600">
                  <FaPlus className="mr-2" />
                  Add Product
                </button>
                <Link
                  href="/inventory"
                  className="px-6 py-3 bg-red-600 text-gray-100 rounded-none hover:bg-red-600 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
