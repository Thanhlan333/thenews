"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");

            if (!token) return;

            try {
                const res = await fetch("https://thenewsbackend.onrender.com/api/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Lỗi lấy user:", error);
            }
        };

        fetchUser();
    }, []);

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
                    {user && (
                        <p className="text-gray-700 font-medium">
                            👤 {user.email}
                        </p>
                    )}
                    {user && (
                        <button onClick={handleLogout} className="text-red-500">
                            Logout
                        </button>
                    )}
                    {!user && (
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