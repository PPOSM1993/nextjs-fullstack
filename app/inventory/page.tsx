"use client"

import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

export default function Inventory() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500 bg-gray-800 text-white">
                <Navbar/>
                <Sidebar currentPath="/dashboard" />
            </div>
        </>
    )
}