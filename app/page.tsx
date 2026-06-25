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
  {
    name: "Şans Kedisi",
    image: "/products/sans-kedisi.jpeg",
    price: "₺180",
    colors: ["beyaz", "siyah", "kırmızı", "mavi"],
  },
];

const services = [
  { title: "3D Tasarım", text: "Fikirlerinizi 3D modele dönüştürüyoruz.", icon: "✏️" },
  { title: "3D Baskı", text: "Yüksek kaliteli 3D baskı hizmeti sunuyoruz.", icon: "🖨️" },
  { title: "Modelleme", text: "Özel ölçü ve ihtiyaca göre modelleme.", icon: "⚙️" },
  { title: "Prototip Üretim", text: "Ürün öncesi prototip üretimi yapıyoruz.", icon: "🧩" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});

  const whatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-2xl font-black tracking-[0.18em]">
            NUVI<span className="text-violet-400">X</span>
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-zinc-300 lg:flex">
            <a href="#urunler">Ürünler</a>
            <a href="#hizmetler">3D Hizmetlerimiz</a>
            <a href="#ozel-siparis">Özel Sipariş</a>
            <a href="#iletisim">İletişim</a>
          </nav>

          <a
            href={whatsappLink("Merhaba Nuvix, bilgi almak istiyorum.")}
            target="_blank"
            className="hidden rounded-xl border border-green-400/70 px-4 py-2 text-sm font-bold text-white sm:block"
          >
            🟢 WhatsApp
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/15 px-3 py-2 text-sm lg:hidden"
          >
            Menü
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-zinc-300">
              <a href="#urunler">Ürünler</a>
              <a href="#hizmetler">Hizmetler</a>
              <a href="#ozel-siparis">Özel Sipariş</a>
              <a href="#iletisim">İletişim</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
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
      <section id="urunler" className="px-5 py-16">
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
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">

                <h3 className="font-bold">{product.name}</h3>
                <p className="text-violet-400 font-bold">{product.price}</p>

                {/* COLORS */}
                {product.colors && (
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
                        className={`px-2 py-1 text-xs rounded border ${
                          selectedColor[product.name] === color
                            ? "bg-violet-500 text-white border-violet-500"
                            : "border-white/20"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                )}

                <a
                  href={whatsappLink(
                    `Merhaba Nuvix, ${product.name}${
                      selectedColor[product.name]
                        ? ` (renk: ${selectedColor[product.name]})`
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

      {/* SERVICES */}
      <section id="hizmetler" className="px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-3 font-bold">{s.title}</h3>
              <p className="text-sm text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="border-t border-white/10 py-10 text-center text-zinc-400">
        NUVIX 3D - 0552 838 58 22
      </footer>

    </main>
  );
}