"use client";

import { useState } from "react";
import Image from "next/image";

const whatsappNumber = "905528385822";

type Product = {
  name: string;
  image: string;
  price: string;
};

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const categories = [
  { title: "Kişiye Özel Anahtarlıklar", icon: "🔑" },
  { title: "Araç Aksesuarları", icon: "🚗" },
  { title: "Plakalıklar", icon: "🔲" },
  { title: "Logo / Tabela Baskıları", icon: "⬡" },
  { title: "Dekoratif Ürünler", icon: "🏺" },
  { title: "Hediyelik Ürünler", icon: "🎁" },
];

const products: Product[] = [
  { name: "FB Katlaç", image: "/products/fb-katlac.jpeg", price: "₺150" },
  { name: "GS Katlaç", image: "/products/gs-katlac.jpeg", price: "₺150" },
  { name: "Harf", image: "/products/harf.jpeg", price: "₺100" },
  { name: "Messi", image: "/products/messi.jpeg", price: "₺200" },
  { name: "Pati", image: "/products/pati.jpeg", price: "₺100" },
  { name: "Normal Katlaç", image: "/products/normal-katlac.jpeg", price: "₺150" },
  { name: "Şans Kedisi", image: "/products/sans-kedisi.jpeg", price: "₺180" },
];

type CartItem = {
  name: string;
  qty: number;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (name: string) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === name);

      if (exists) {
        return prev.map((p) =>
          p.name === name ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { name, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) =>
      prev
        .map((p) => (p.name === name ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const sendCart = () => {
    const text =
      "Merhaba Nuvix sipariş:\n\n" +
      cart.map((c) => `- ${c.name} x${c.qty}`).join("\n");

    window.open(whatsappLink(text), "_blank");
  };

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-black tracking-[0.18em]">
            NUVI<span className="text-violet-400">X</span>
          </h1>

          <a
            href={whatsappLink("Merhaba Nuvix, bilgi almak istiyorum.")}
            target="_blank"
            className="rounded-xl border border-green-400/70 px-4 py-2 text-sm font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* PRODUCTS */}
      <section className="px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

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
                <p className="text-violet-400 font-bold">{product.price}</p>

                <button
                  onClick={() => addToCart(product.name)}
                  className="mt-3 w-full bg-white text-black font-bold py-2 rounded"
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CART (SAĞ ALT KÖŞE) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 w-72 bg-[#0d1320] border border-white/10 rounded-xl p-4">
          <p className="font-bold mb-2">Sepet</p>

          {cart.map((item) => (
            <div key={item.name} className="flex justify-between text-sm mb-1">
              <span>
                {item.name} x{item.qty}
              </span>

              <div className="flex gap-2">
                <button onClick={() => removeFromCart(item.name)}>-</button>
                <button onClick={() => addToCart(item.name)}>+</button>
              </div>
            </div>
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