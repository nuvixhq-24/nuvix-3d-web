"use client";

import Image from "next/image";

const products = [
  { name: "FB Katlaç", image: "/products/fb-katlac.jpeg", price: "₺150" },
  { name: "GS Katlaç", image: "/products/gs-katlac.jpeg", price: "₺150" },
  { name: "Harf", image: "/products/harf.jpeg", price: "₺100" },
  { name: "Messi", image: "/products/messi.jpeg", price: "₺200" },
  { name: "Pati", image: "/products/pati.jpeg", price: "₺100" },
  {
    name: "Normal Katlaç",
    image: "/products/normal-katlac.jpeg",
    price: "₺150",
  },
  {
    name: "Şans Kedisi",
    image: "/products/sans-kedisi.jpeg",
    price: "₺180",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold tracking-tight">
          NUVIX 3D
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          3D Baskı Ürünler
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-zinc-600"
            >
              <div className="relative aspect-square bg-zinc-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold">{product.name}</h2>

                <p className="mt-2 text-lg font-bold text-zinc-200">
                  {product.price}
                </p>

                <button className="mt-4 w-full rounded-xl bg-white px-4 py-3 font-semibold text-black transition hover:bg-zinc-200">
                  Sipariş Ver
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}