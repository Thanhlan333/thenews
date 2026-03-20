import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Fullstack project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}