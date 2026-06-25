"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  name: string;
  image: string;
  price: string;
  colors?: string[];
};

const whatsappNumber = "905528385822";

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const products: Product[] = [
  { name: "Fenerbahçe Katlaç", image: "/products/fb-katlac.jpeg", price: "₺120" },
  { name: "Galatasaray Anahtarlık", image: "/products/gs-katlac.jpeg", price: "₺60" },
  { name: "Harfli Anahtarlık", image: "/products/harf.jpeg", price: "₺70" },
  { name: "Messi Anahtarlık", image: "/products/messi.jpeg", price: "₺60" },

  // RENK OLAN ÜRÜNLER
  {
    name: "Pati Anahtarlık",
    image: "/products/pati.jpeg",
    price: "₺50",
    colors: ["mavi", "pembe", "turuncu", "sarı"],
  },
  {
    name: "Normal Katlaç",
    image: "/products/normal-katlac.jpeg",
    price: "₺100",
    colors: ["mavi", "pembe", "turuncu", "sarı"],
  },
  {
    name: "Şans Kedisi",
    image: "/products/sans-kedisi.jpeg",
    price: "₺150",
    colors: ["mavi", "pembe", "turuncu", "sarı", "beyaz", "siyah"],
  },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>(
    {}
  );

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* NAVBAR (ESKİ TASARIM) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-black tracking-[0.2em]">
            NUVIX 3D
          </h1>

          <a
            href={whatsappLink("Merhaba Nuvix")}
            target="_blank"
            className="bg-green-500 px-4 py-2 rounded-lg font-bold text-black"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO (ESKİ) */}
      <section className="px-5 py-20 text-center">
        <h1 className="text-5xl font-black">
          Fikirlerini
          <span className="block text-violet-400">3D Baskıya</span>
          Dönüştürüyoruz.
        </h1>

        <p className="mt-5 text-zinc-300">
          Kişiye özel 3D tasarım ve baskı hizmetleri.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-xl border border-white/10 bg-[#0d1320]"
            >

              {/* IMAGE */}
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">

                {/* NAME */}
                <h3 className="font-bold">{product.name}</h3>

                {/* PRICE */}
                <p className="text-violet-400 font-bold">{product.price}</p>

                {/* COLORS (SADECE VARSA) */}
                {product.colors && (
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() =>
                          setSelectedColor((prev) => ({
                            ...prev,
                            [product.name]: color,
                          }))
                        }
                        className={`px-2 py-1 text-xs rounded border ${
                          selectedColor[product.name] === color
                            ? "bg-violet-500 text-white"
                            : "border-white/20"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                )}

                {/* WHATSAPP */}
                <a
                  href={whatsappLink(
                    `Merhaba Nuvix, ${product.name}${
                      selectedColor[product.name]
                        ? ` (${selectedColor[product.name]})`
                        : ""
                    } hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  className="mt-4 block text-center bg-green-500 text-black font-bold py-2 rounded-lg"
                >
                  WhatsApp
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-400">
        NUVIX 3D - 0552 838 58 22
      </footer>

    </main>
  );
}