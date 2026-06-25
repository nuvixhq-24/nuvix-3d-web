"use client";

import { useState } from "react";
import Image from "next/image";

const whatsappNumber = "905528385822";

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

type Product = {
  name: string;
  image: string;
  price: string;
  colors?: string[];
};

const products: Product[] = [
  { name: "Fenerbahçe Katlaç", image: "/products/fb-katlac.jpeg", price: "₺1222222222220" },
  { name: "Galatasaray Anahtarlık", image: "/products/gs-katlac.jpeg", price: "₺60" },
  { name: "Harfli Anahtarlık", image: "/products/harf.jpeg", price: "₺60" },
  { name: "Messi Anahtarlık", image: "/products/messi.jpeg", price: "₺60" },

  {
    name: "Pati Anahtarlık",
    image: "/products/pati.jpeg",
    price: "₺50 ",
    colors: ["mavi", "pembe", "sarı", "turuncu"],
  },
  {
    name: "Normal Katlaç",
    image: "/products/normal-katlac.jpeg",
    price: "₺100",
    colors: ["mavi", "pembe", "sarı", "siyah"],
  },
  {
    name: "Şans Kedisi",
    image: "/products/sans-kedisi.jpeg",
    price: "₺150",
    colors: ["beyaz", "siyah", "altın", "gümüş"],
  },
];

const services = [
  { title: "3D Tasarım", text: "Fikirlerinizi 3D modele dönüştürüyoruz.", icon: "✏️" },
  { title: "3D Baskı", text: "Yüksek kaliteli 3D baskı hizmeti sunuyoruz.", icon: "🖨️" },
  { title: "Modelleme", text: "Özel ölçü ve ihtiyaca göre modelleme.", icon: "⚙️" },
  { title: "Prototip Üretim", text: "Ürün öncesi prototip üretimi yapıyoruz.", icon: "🧩" },
];

type CartItem = {
  name: string;
  color?: string;
  qty: number;
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>(
    {}
  );
  const [cart, setCart] = useState<CartItem[]>([]);

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

  const removeItem = (name: string, color?: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.name === name && p.color === color
            ? { ...p, qty: p.qty - 1 }
            : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const sendCart = () => {
    const text =
      "Merhaba Nuvix sipariş:\n\n" +
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

      {/* HEADER (AYNEN KORUNDU) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-2xl font-black tracking-[0.18em]">
            NUVI<span className="text-violet-400">X</span>
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-zinc-300 lg:flex">
            <a href="#">Ana Sayfa</a>
            <a href="#urunler">Ürünler</a>
            <a href="#hizmetler">3D Hizmetlerimiz</a>
            <a href="#ozel-siparis">Özel Sipariş</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden border px-3 py-2 rounded"
          >
            Menü
          </button>
        </div>
      </header>

      {/* HERO (AYNEN) */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-5xl font-black">
          Fikirlerini <span className="text-violet-400">3D Baskıya</span>{" "}
          Dönüştürüyoruz.
        </h1>
        <p className="mt-5 text-zinc-300">
          Kişiye özel tasarım, kaliteli 3D baskı ve hızlı teslimat.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className="text-3xl">{c.icon}</div>
              <p className="mt-2 text-sm font-bold">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS (RENK + SEPET EKLİ) */}
      <section id="urunler" className="mx-auto max-w-7xl px-5 py-16">
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

                {/* RENKLER */}
                {product.colors && (
                  <div className="flex gap-2 mt-2 flex-wrap">
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

        </div>
      </section>

      {/* CART */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 w-72 bg-[#0d1320] border border-white/10 p-4 rounded-xl">
          <p className="font-bold mb-2">Sepet</p>

          {cart.map((item, i) => (
            <div key={i} className="flex justify-between text-sm mb-1">
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

      {/* SERVICES (AYNEN KORUNUR) */}
      <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-2 font-bold">{s.title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}