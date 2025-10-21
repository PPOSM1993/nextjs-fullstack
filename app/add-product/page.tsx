import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function AddProduct() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500 bg-gray-800 text-white">
                <Navbar />
                <Sidebar currentPath="/dashboard" />
            </div>
        </>
    )
}