import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-200 rounded mb-3"></div>
            <h2 className="font-semibold">Product {item}</h2>
            <p className="text-gray-500 text-sm">
              Mô tả sản phẩm
            </p>
            <p className="text-blue-600 font-bold mt-2">
              100,000 VND
            </p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}