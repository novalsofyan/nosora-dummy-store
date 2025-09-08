import ProductCard from "~/components/ProductCard";
import { getProduct } from "~/utils/ProductData";
import type { ProductPreview } from "~/types/ProductTypes";
import { useLoaderData } from "react-router";
import { useState, useMemo } from "react";

// Fetch data product
export async function loader() {
  const products = (await getProduct()) || [];
  const totalProduct = products ? products.length : 0;
  return { products, totalProduct };
}

export default function Produk() {
  // Pakai data yang ada di loader
  const { products, totalProduct } = useLoaderData() as {
    products: ProductPreview[];
    totalProduct: number;
  };

  // State untuk search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Function untuk handle search filter (pake memo untuk optimasi scaleable)
  const filteredProduct = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    return products.filter((product) => product.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()));
  }, [products, searchQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    return e.preventDefault();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="flex flex-col items-center px-2 grow mt-16 max-w-[1600px] mx-auto w-full">
      {/* Search bar */}
      <form onSubmit={handleSubmit} className="flex flex-row w-full mt-4 space-x-4">
        <input
          onChange={handleOnChange}
          value={searchQuery}
          type="text"
          placeholder="Cari Produk"
          className="border-2 border-gray-700 px-4 rounded-lg w-full h-11"
        />
      </form>

      {/* Menampilkan jumlah produk ketika produk lebih dari 0 */}
      {filteredProduct.length > 0 && (
        <p className="my-4 text-xl">
          Total produk: {filteredProduct.length}
          {filteredProduct.length !== totalProduct && <span> dari {totalProduct}</span>}
        </p>
      )}

      {/* Ketika ada produk = tampilkan card produk, jika tidak tampilkan informasi produk tidak ditemukan */}
      {filteredProduct.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-5 mb-4">
          {filteredProduct.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              stock={product.stock}
              rating={product.rating}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 grow">
          <p className="text-gray-800 text-lg">Tidak ada produk yang ditemukan</p>
        </div>
      )}
    </main>
  );
}
