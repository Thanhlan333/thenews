"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin" && password === "123") {
      localStorage.setItem("isLogin", "true");
      router.push("/");
    } else {
      alert("Sai tài khoản");
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

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Tài khoản"
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