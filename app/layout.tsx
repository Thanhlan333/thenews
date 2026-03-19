"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/login");
  };

  return (
    <html>
      <body>

        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="font-bold">My App</h1>
            <button
              onClick={handleLogout}
              className="bg-white text-blue-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </header>

          {/* CONTENT */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>   
  );
}