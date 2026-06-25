"use client";

import { useState } from "react";
import Image from "next/image";

const whatsappNumber = "905528385822";

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const products = [
  {
    name: "Fenerbahçe Katlaç",
    image: "/products/fb-katlac.jpeg",
    price: "₺120",
  },
  {
    name: "Galatasaray Anahtarlık",
    image: "/products/gs-katlac.jpeg",
    price: "₺60",
  },
  {
    name: "Harfli Anahtarlık",
    image: "/products/harf.jpeg",
    price: "₺70",
    colors: ["siyah", "beyaz"],
  },
  {
    name: "Messi Anahtarlık",
    image: "/products/messi.jpeg",
    price: "₺60",
  },
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
    <main className="min-h-screen bg-[#070b14] text-white px-5 py-10">

      <h1 className="text-4xl font-black text-center mb-10">
        NUVIX 3D ÜRÜNLER
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-xl border border-white/10 bg-[#0d1320] p-4"
          >

            {/* IMAGE */}
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* NAME + PRICE */}
            <h2 className="mt-3 text-lg font-bold">{product.name}</h2>
            <p className="text-violet-400 font-black">{product.price}</p>

            {/* COLORS */}
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor((prev) => ({
                      ...prev,
                      [product.name]: color,
                    }))
                  }
                  className={`px-2 py-1 rounded-lg text-xs border ${
                    selectedColor[product.name] === color
                      ? "bg-violet-500 text-white"
                      : "border-white/20"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>

            {/* WHATSAPP */}
            <a
              href={whatsappLink(
                `Merhaba Nuvix, ${product.name} (${
                  selectedColor[product.name] || "renk seçilmedi"
                }) hakkında bilgi almak istiyorum.`
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-center bg-green-500 text-black font-bold py-2 rounded-lg"
            >
              WhatsApp
            </a>

          </div>
        ))}

      </div>
    </main>
  );
}