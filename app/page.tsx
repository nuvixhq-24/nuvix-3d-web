"use client";

import { useState } from "react";
import Image from "next/image";

const whatsappNumber = "905528385822";
const ADMIN_PASSWORD = "nuvix123";

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
  {
    name: "Normal Katlaç",
    image: "/products/normal-katlac.jpeg",
    price: "₺150",
    colors: ["mavi", "pembe", "sarı", "siyah"],
  },
];

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<
    { name: string; color?: string; price: string; qty: number }[]
  >([]);

  const [adminOpen, setAdminOpen] = useState(false);
  const [adminInput, setAdminInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // 🛒 ADD TO CART
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

      return [
        ...prev,
        { name: product.name, color, price: product.price, qty: 1 },
      ];
    });
  };

  // 🗑 REMOVE
  const removeItem = (name: string, color?: string) => {
    setCart((prev) =>
      prev.filter((p) => !(p.name === name && p.color === color))
    );
  };

  // 📦 WHATSAPP ORDER
  const sendCart = () => {
    const text =
      "Merhaba Nuvix, sipariş:\n\n" +
      cart
        .map(
          (c) =>
            `- ${c.name}${c.color ? ` (${c.color})` : ""} x${c.qty}`
        )
        .join("\n");

    window.open(whatsappLink(text), "_blank");
  };

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <h1 className="text-xl font-black">NUVIX 3D</h1>

        <div className="flex gap-3">
          {/* CART */}
          <button
            onClick={sendCart}
            className="bg-violet-500 px-3 py-1 rounded text-sm font-bold"
          >
            Sepet ({cart.length})
          </button>

          {/* ADMIN */}
          <button
            onClick={() => setAdminOpen(true)}
            className="border px-3 py-1 rounded text-sm"
          >
            Admin
          </button>
        </div>
      </header>

      {/* ADMIN MODAL */}
      {adminOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#0d1320] p-6 rounded-xl w-80">
            {!isAdmin ? (
              <>
                <p className="mb-3 font-bold">Admin Giriş</p>
                <input
                  className="w-full p-2 text-black"
                  placeholder="Şifre"
                  value={adminInput}
                  onChange={(e) => setAdminInput(e.target.value)}
                />
                <button
                  onClick={() =>
                    setIsAdmin(adminInput === ADMIN_PASSWORD)
                  }
                  className="mt-3 w-full bg-green-500 text-black font-bold py-2"
                >
                  Giriş
                </button>
              </>
            ) : (
              <div>
                <p className="font-bold mb-2">Admin Panel</p>
                <p className="text-sm text-zinc-400">
                  Ürün sayısı: {products.length}
                </p>
                <button
                  onClick={() => {
                    setIsAdmin(false);
                    setAdminOpen(false);
                  }}
                  className="mt-3 w-full bg-red-500 py-2"
                >
                  Çıkış
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 px-5 py-10">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-[#0d1320] border border-white/10 rounded-xl overflow-hidden"
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

              {/* COLORS */}
              {product.colors && (
                <div className="flex gap-2 flex-wrap mt-2">
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

      {/* CART LIST */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-[#0d1320] border border-white/10 p-4 rounded-xl w-72">
          <p className="font-bold mb-2">Sepet</p>

          {cart.map((item, i) => (
            <div key={i} className="text-sm mb-2 flex justify-between">
              <span>
                {item.name} {item.color && `(${item.color})`} x{item.qty}
              </span>
              <button
                onClick={() => removeItem(item.name, item.color)}
                className="text-red-400"
              >
                X
              </button>
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