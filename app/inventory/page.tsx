import { prisma } from "@/lib/prisma";
import Sidebar from "../components/sidebar"
import { getCurrentUser } from "@/lib/auth";
import { FaTrash } from "react-icons/fa";
import { deleteProduct } from "@/lib/actions/product";
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/pagination";

export default async function InventoryPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; page?: string }>;
}) {
    const user = await getCurrentUser();
    const userId = user.id;

    const params = await searchParams;
    const q = (params.q ?? "").trim();
    const page = Math.max(1, Number(params.page ?? 1));
    const pageSize = 5;

    const where = {
        userId,
        ...(q ? { name: { contains: q, mode: "insensitive" as const } } : {}),
    };

    const [totalCount, items] = await Promise.all([
        prisma.product.count({ where }),
        prisma.product.findMany({
            where,
            orderBy: { createdAt: "desc" },
            skip: (page - 1) * pageSize,
            take: pageSize,
        }),
    ]);

    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

    return (
        <div className="min-h-screen bg-blue-500 bg-gray-800">
            <Sidebar currentPath="/inventory" />
            <main className="ml-64 p-8">
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-100 uppercase font-bold">
                                Inventory
                            </h1>
                            <br />
                            <p className="text-sm text-gray-100">
                                Manage your products and track inventory levels.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Search */}
                    <div className="bg-blue-500 bg-gray-800 rounded-none border-none p-6 border-blue-400">
                        <form className="flex gap-2" action="/inventory" method="GET">
                            <input
                                name="q"
                                placeholder="Search products..."
                                className="flex-1 px-4 py-2 border-none rounded-none focus:border-transparent text-gray-900"
                            />
                            <button className="flex px-6 py-2 bg-green-600 text-white rounded-none hover:bg-green-700">
                                <FiSearch className="mr-2" />
                                Search
                            </button>
                        </form>
                    </div>

                    {/* Products Table */}
                    <div className="bg-blue-600 bg-gray-700 rounded-none border border-none overflow-hidden">
                        <table className="w-full divide-gray-50">
                            <thead className="px-6 py-3 text-left txt-xs font-medium text-gray-900 uppercase tracking-wider bg-blue-500 bg-gray-600 divide-gray-50">
                                <tr className="text-gray-900">
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">SKU</th>
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Quantity</th>
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Low Stock</th>
                                    <th className="px-6 py-3 text-left txt-xs font-medium text-gray-100 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="bg-blue-500 bg-gray-700 divide-y divide-gray-50 text-gray-900">
                                {items.map((product, key) => (
                                    <tr key={key} className="hover:bg-gray-2000">
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
                                            <form
                                                action={async (formData: FormData) => {
                                                    "use server";
                                                    await deleteProduct(formData);
                                                }}
                                            >
                                                <input type="hidden" name="id" value={product.id} />
                                                <button className="flex px-6 py-2 bg-red-600 text-white rounded-none hover:bg-red-700">
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

                    {totalPages > 1 && (
                        <div className="bg-blue-500 bg-gray-800 rounded-none border-none p-6">
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages}
                                baseUrl="/inventory"
                                searchParams={{
                                    q,
                                    pageSize: String(pageSize),
                                }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}