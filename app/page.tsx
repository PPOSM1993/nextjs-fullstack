import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-100 mb-6 text-white">
              Iventory Mangement
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto justify-between">
              Streamline your invetory tracking with our powerfull, easy-to-use
              management system, Track products, monitor stock levels, and gain valuable insights into your inventory.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/sign-in"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none transition duration-300 ease-in-out flex items-center"
            >
              <FiLogIn className="mr-2" />
              Sign In
            </Link>

            <Link
              href="/sign-in"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none transition duration-300 ease-in-out flex items-center"
            >
              <IoMdSchool className="mr-2" />
              Learn More
            </Link>
          </div>


        </div>
      </div>
    </>
  );
}
