import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mùa Quê",
  description: "Giá nông sản theo mùa, theo địa phương",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
          <nav style={{ display: "flex", gap: "16px" }}>
            <Link href="/">Trang chủ</Link>
            <Link href="/gia-nong-san-hom-nay">Giá nông sản</Link>
            <Link href="/gioi-thieu">Giới thiệu</Link>
          </nav>
        </header>

        <main style={{ padding: "16px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
