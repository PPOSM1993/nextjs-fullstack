

import { TrendingUp } from "lucide-react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import { prisma } from "@/lib/prisma"

export default async function Dashboard() {
    const totalProducts = await prisma.product.count();
    console.log(totalProducts)
    return (
        <>
            <div className="min-h-screen flex flex-col py-20 bg-blue-500 bg-gray-800 text-white">
                <Navbar />
                <Sidebar currentPath="/dashboard" />
                <main className="ml-64 p-8 ">
                    {/* Your content here */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-200 py-2">Dashboard</h1>
                                <p>Welcome Back!</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">
                                Key Metrics
                            </h2>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">
                                        {totalProducts}
                                    </div>
                                    <div className="text-sm text-gray-600">Total Products</div>
                                    <div className="flex items-center justify-center mt-1">
                                        <span className="text-xs text-green-600">
                                            +10%
                                        </span>
                                        <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}