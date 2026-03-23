"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth.context";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { user, loading, logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };
    const handleLogin = () => {
        router.push("/login");
    };

    return (

        <div className="min-h-screen flex flex-col">
            {/* HEADER */}
            <header className="bg-white shadow px-6 py-4 flex justify-between">
                <h1
                    onClick={() => router.push("/")}
                    className="font-bold text-blue-600 cursor-pointer"
                >
                    MyShop
                </h1>

                <nav className="flex gap-6">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    {/* HIỂN THỊ USER */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : user ? (
                        <>
                            <p>👤 {user.email}</p>
                            <button onClick={logout} className="text-red-500">
                                Logout
                            </button>
                        </>
                    ) : (
                        <button onClick={handleLogin} className="text-red-500">
                            Login
                        </button>
                    )}
                </nav>
            </header>

            {/* CONTENT */}
            <main className="flex-1 p-6">{children}</main>

            {/* FOOTER */}
            <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
                © 2026 MyShop
            </footer>
        </div>
    );
}