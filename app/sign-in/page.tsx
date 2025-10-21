// app/sign-in/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FiLogIn } from "react-icons/fi";

export default function SignIn() {
    const form = useForm();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none transition duration-300 ease-in-out flex items-center">
                    <FiLogIn className="mr-2" />

                    Sign In
                </button>
            </form>
        </Form>
    );
}
