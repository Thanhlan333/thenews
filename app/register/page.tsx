"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/api/auth.api";
import { useAuth } from "@/contexts/auth.context";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser, loading: authLoading } = useAuth();

  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!authLoading && user) {
      router.push("/");
    }
  }, [user, authLoading]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Validate frontend
    if (!email || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Email không hợp lệ");
      return;
    }

    if (password.length < 6) {
      setError("Mật khẩu phải ít nhất 6 ký tự");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await register(email, password);

      setSuccess("🎉 Đăng ký thành công! Đang chuyển sang đăng nhập...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-5">
          Đăng ký tài khoản
        </h2>

        {/* 🔴 Hiển thị lỗi */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* 🟢 Success */}
        {success && (
          <div className="bg-green-100 text-green-600 p-2 rounded mb-3 text-sm text-center">
            {success}
          </div>
        )}

        <input
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded transition disabled:bg-gray-400"
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>

        {/* Link sang login */}
        <p className="text-sm text-center mt-4">
          Đã có tài khoản?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  );
}