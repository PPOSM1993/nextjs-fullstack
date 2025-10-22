"use client";
import { SignIn as StackSignIn } from "@stackframe/stack";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export default function SignIn() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8 text-center">
                <div className="w-full max-w-md space-y-5 stack-signin text-center">
                    <StackSignIn />

                    <Link
                        href="/dashboard"
                        className="text-white font-bold py-7 px-4 rounded-none transition duration-300 ease-in-out flex items-center"
                    >
                        <MdDashboard className="mr-2" />
                        Go Dashboard
                    </Link>

                    {/**
                     * 
                     *                     <Link href="/" className="text-white font-bold py-2 px-4 flex items-center">
                        <IoArrowBackSharp className="mr-2 " />
                        Back Home
                    </Link>
                     * 
                     */}


                </div>
            </div>
        </>
    )
}
