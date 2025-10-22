import { prisma } from "@/lib/prisma";
import Sidebar from "../components/sidebar"
import { getCurrentUser } from "@/lib/auth";
import { FaTrash } from "react-icons/fa";

export default async function InventoryPage() {

    const user = await getCurrentUser();
    const userId = user.id
    const totalProducts = await prisma.product.findMany({ where: { userId } });


    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-between py-5 sm:px-6 lg:px-8  bg-blue-500 bg-gray-800">
                <Sidebar currentPath="/inventory" />
                <main className="ml-64 p-8">
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-100">
                                    Inventory
                                </h1>
                                <p className="text-sm text-gray-200">
                                    Manage your products and track inventory levels.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Product List */}
                        <div className="bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full">
                                <thead className="px-6 py-3 text-left txt-xs font-medium text-gray-900 uppercase tracking-wider bg-blue-500 bg-gray-500">
                                    <tr className="text-gray-900">
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">SKU</th>
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Quantity</th>
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Low Stock</th>
                                        <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-100 bg-blue-500 bg-gray-700">
                                    {totalProducts.map((product, key) => (
                                        <tr key={key} className="hover:bg-gray-600">
                                            <td className="px-6 py-4 text-sm text-gray-100">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4  text-sm text-gray-100">
                                                {product.sku || "-"}
                                            </td>
                                            <td className="px-6 py-4  text-sm text-gray-100">
                                                ${Number(product.price).toFixed(2)}
                                            </td>
                                            <td className="px-6 py-4  text-sm text-gray-100">
                                                {product.quantity}
                                            </td>
                                            <td className="px-6 py-4  text-sm text-gray-100">
                                                {product.lowStockAt || "-"}
                                            </td>
                                            <td className="px-6 py-4  text-sm text-gray-100">
                                                <form >
                                                    <input type="hidden" name="id" value={product.id} />
                                                    <button
                                                        className="text-gray-100 rounded-none bg-red-500 hover:bg-red-700 focus:ring-red-500 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-900">
                                                        <FaTrash className="mr-2" />
                                                        Delete
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}