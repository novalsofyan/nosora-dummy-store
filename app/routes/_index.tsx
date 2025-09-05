import { useEffect, useState } from "react";
import type { Route } from "./+types/_index";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nosora Dummy Store" },
    {
      name: "description",
      content: "Temukan berbagai macam produk yang ada di Toko kami!",
    },
  ];
}

export default function Index() {
  const [typedText, setTypedText] = useState("");
  const fullText: String = "Nosora Dummy Store";

  // Effect typewritter
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const writeText = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      // Cleanup timeout
      return () => clearTimeout(writeText);
    }
  }, [typedText]);

  return (
    <main className="flex flex-col justify-center items-center p-2 grow mt-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        {typedText}
        <span className="border-r-4 border-gray-700 animate-blink" />
      </h1>
      <p className="text-xl md:text-2xl text-center mb-6 max-w-[1200px]">
        Temukan berbagai macam produk yang ada di Toko kami!
      </p>
      <button className="text-xl md:text-2xl border-red-500 border-2 hover:bg-red-500 hover:text-white px-4 py-2 rounded-full cursor-pointer transition-colors duration-300">
        <Link to={"/produk"}>Cari Produk</Link>
      </button>
    </main>
  );
}
