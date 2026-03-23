import { fetchAPI } from "@/api/base.api";

export const register = (email: string, password: string) => {
  return fetchAPI("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

// 🔹 Login
export const login = (email: string, password: string) => {
  return fetchAPI("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

// 🔹 Lấy thông tin user hiện tại
export const getMe = () => {
  return fetchAPI("/api/auth/me");
};