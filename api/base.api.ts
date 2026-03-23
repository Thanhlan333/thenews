import { ENV } from "@/config/env";

export const fetchAPI = async (url: string, options: any = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${ENV.API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API Error");
  }
  

  return data;
};