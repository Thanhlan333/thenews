"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // lưu token
      localStorage.setItem("token", data.token);

      // chuyển trang
      router.push("/");
    } catch (err) {
      setError("Không kết nối được server");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 rounded shadow w-80"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Đăng nhập
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p>
      )}

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="w-full mb-4 p-2 border rounded"
        placeholder="Mật khẩu"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-500 text-white p-2 rounded">
        Đăng nhập
      </button>
    </form>
  );
}