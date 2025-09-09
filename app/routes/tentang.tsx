import { Link } from "react-router";
import type { Route } from "./+types/tentang";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tentang - Nosora Dummy Store" },
    {
      name: "description",
      content:
        "Nosora Dummy Store: Simulasi toko online untuk belajar & eksperimen pengembangan aplikasi. Jelajahi berbagai produk tanpa transaksi nyata.",
    },
  ];
}

export default function Tentang() {
  return (
    <main className="flex flex-col px-2 md:px-4 grow mt-16 max-w-[1200px] mx-auto w-full justify-center">
      <h1 className="text-2xl font-bold mt-4 mb-4 text-center">Tentang</h1>
      <p className="text-justify mb-4">
        Nosora Dummy Store adalah sebuah website simulasi yang dibuat untuk kebutuhan belajar dan eksperimen dalam
        pengembangan aplikasi toko online. Di dalamnya tersedia berbagai macam produk, mulai dari kosmetik untuk
        perawatan diri, makanan untuk manusia, makanan hewan untuk peliharaan kesayangan, furnitur, hingga beragam
        kategori lainnya. Website ini tidak benar-benar melakukan transaksi jual beli, melainkan hanya berfungsi sebagai
        sarana pembelajaran, uji coba fitur, dan contoh desain antarmuka sebuah website toko online. Dengan adanya dummy
        store ini, pengunjung dapat melakukan pencarian produk, hingga mencoba fitur interaktif lainnya tanpa harus
        khawatir dengan transaksi nyata.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-center">Kontak CS</h2>
      <p className="text-center">
        Email:{" "}
        <Link
          to={`mailto:novalsofyan.business@gmail.com?subject=Nosora Dummy Store - CS&body=Hello, i want to contact you about Nosora Dummy Store`}
          className="text-center hover:text-red-500 transition-colors duration-300"
        >
          novalsofyan.business@gmail.com
        </Link>
      </p>
      <p className="text-center">Discord username: althalja / halzgame</p>
    </main>
  );
}
