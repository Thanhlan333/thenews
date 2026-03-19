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
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <html>
      <body>
        <div>
          <h1>Header</h1>
          {children}
        </div>
      </body> 
    </html>

  );
}