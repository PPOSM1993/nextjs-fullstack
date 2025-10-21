// app/sign-in/page.tsx
"use client";
import { SignIn as StackSignIn } from "@stackframe/stack";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

export default function SignIn() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 stack-signin">
                    <StackSignIn />
                    <br />
                    <Link href="/" className="text-white font-bold py-2 px-4 flex items-center">
                        <IoArrowBackSharp className="mr-2 " />
                        Back Home
                    </Link>
                </div>
            </div>
        </>
    )
}
