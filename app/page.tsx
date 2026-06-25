"use client";

import { useState } from "react";
import Image from "next/image";

const whatsappNumber = "905528385822";

type Product = {
  name: string;
  image: string;
  price: string;
  colors?: string[];
};

const products: Product[] = [
  { name: "FB Katlaç", image: "/products/fb-katlac.jpeg", price: "₺150" },
  { name: "GS Katlaç", image: "/products/gs-katlac.jpeg", price: "₺150" },
  { name: "Harf", image: "/products/harf.jpeg", price: "₺100" },
  { name: "Messi", image: "/products/messi.jpeg", price: "₺200" },

  {
    name: "Pati",
    image: "/products/pati.jpeg",
    price: "₺100",
    colors: ["mavi", "pembe", "sarı", "turuncu"],
  },
];

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>(
    {}
  );

  const [cart, setCart] = useState<
    { name: string; color?: string; qty: number }[]
  >([]);

  const addToCart = (product: Product) => {
    const color = selectedColor[product.name];

    setCart((prev) => {
      const exists = prev.find(
        (p) => p.name === product.name && p.color === color
      );

      if (exists) {
        return prev.map((p) =>
          p.name === product.name && p.color === color
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { name: product.name, color, qty: 1 }];
    });
  };

  const sendCart = () => {
    const text =
      "Merhaba Nuvix sipariş:\n\n" +
      cart.map((c) => `- ${c.name}${c.color ? ` (${c.color})` : ""} x${c.qty}`).join("\n");

    window.open(whatsappLink(text), "_blank");
  };

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* PRODUCTS */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5 py-10">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-xl border border-white/10 bg-[#0d1320]"
          >
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-violet-400">{product.price}</p>

              {/* COLORS */}
              {product.colors && (
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColor((prev) => ({
                          ...prev,
                          [product.name]: color,
                        }))
                      }
                      className={`px-2 py-1 text-xs border rounded ${
                        selectedColor[product.name] === color
                          ? "bg-violet-500 border-violet-500"
                          : ""
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              )}

              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-white text-black font-bold py-2 rounded"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* SIMPLE CART (BOTTOM RIGHT) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-[#0d1320] border border-white/10 p-4 rounded-xl w-72">
          <p className="font-bold mb-2">Sepet</p>

          {cart.map((item, i) => (
            <p key={i} className="text-sm">
              {item.name} {item.color && `(${item.color})`} x{item.qty}
            </p>
          ))}

          <button
            onClick={sendCart}
            className="mt-3 w-full bg-green-500 text-black font-bold py-2 rounded"
          >
            WhatsApp Sipariş
          </button>
        </div>
      )}

    </main>
  );
}