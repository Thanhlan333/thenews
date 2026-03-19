"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await fetch(
          "https://thenewsbackend.onrender.com/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-2">
          👋 Chào mừng trở lại!
        </h2>
        <p>
          {user?.email
            ? `Xin chào ${user.email}`
            : "Chào bạn đến với hệ thống"}
        </p>
      </div>

      {/* User Info */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">
          Thông tin tài khoản
        </h3>

        <div className="space-y-2">
          <p>
            <span className="font-medium">Email:</span>{" "}
            {user?.email || "Không có dữ liệu"}
          </p>

          <p>
            <span className="font-medium">Trạng thái:</span>{" "}
            <span className="text-green-500">Đã đăng nhập</span>
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-3">
          Hành động nhanh
        </h3>

        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Xem sản phẩm
          </button>

          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
}