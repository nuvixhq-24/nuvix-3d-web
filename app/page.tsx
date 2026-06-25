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

  // sadece bazı ürünlerde renk var (ESKİ gibi sade)
  { name: "Pati Anahtarlık", image: "/products/pati.jpeg", price: "₺50", colors: ["mavi", "pembe"] },
  { name: "Normal Katlaç", image: "/products/normal-katlac.jpeg", price: "₺100" },
  { name: "Şans Kedisi", image: "/products/sans-kedisi.jpeg", price: "₺150" },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* HEADER (ESKİ BASİT TASARIM) */}
      <header className="px-5 py-6 border-b border-white/10">
        <h1 className="text-3xl font-black tracking-[0.2em] text-center">
          NUVIX 3D
        </h1>
      </header>

      {/* PRODUCTS */}
      <section className="px-5 py-10">
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

              {/* NAME */}
              <h2 className="mt-3 text-lg font-bold">{product.name}</h2>

              {/* PRICE */}
              <p className="text-violet-400 font-black">{product.price}</p>

              {/* COLORS (SADECE VARSA) */}
              {product.colors && (
                <div className="mt-3 flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColor((prev) => ({
                          ...prev,
                          [product.name]: color,
                        }))
                      }
                      className="px-2 py-1 text-xs border border-white/20 rounded-lg"
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
                rel="noreferrer"
                className="mt-4 block text-center bg-green-500 text-black font-bold py-2 rounded-lg"
              >
                WhatsApp
              </a>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}