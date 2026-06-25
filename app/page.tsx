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

const products = [
  { name: "Fenerbahçe Katlaç", image: "/products/fb-katlac.jpeg", price: "₺120" },
  { name: "Galatasaray Anahtarlık", image: "/products/gs-katlac.jpeg", price: "₺60" },
  { name: "Harfli Anahtarlık", image: "/products/harf.jpeg", price: "₺70" },
  { name: "Messi Anahtarlık", image: "/products/messi.jpeg", price: "₺60" },
  { name: "Pati Anahtarlık", image: "/products/pati.jpeg", price: "₺50", color:"mavi,pembe,turuncu,sarı"},
  { name: "Normal Katlaç", image: "/products/normal-katlac.jpeg", price: "₺100" color:"mavi,pembe,turuncu,sarı"},
  { name: "Şans Kedisi", image: "/products/sans-kedisi.jpeg", price: "₺150" color:"mavi,pembe,turuncu,sarı,beyaz,siyah" },
];

const services = [
  { title: "3D Tasarım", text: "Fikirlerinizi 3D modele dönüştürüyoruz.", icon: "✏️" },
  { title: "3D Baskı", text: "Yüksek kaliteli 3D baskı hizmeti sunuyoruz.", icon: "🖨️" },
  { title: "Modelleme", text: "Özel ölçü ve ihtiyaca göre modelleme.", icon: "⚙️" },
  { title: "Prototip Üretim", text: "Ürün öncesi prototip üretimi yapıyoruz.", icon: "🧩" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            rel="noreferrer"
            className="hidden rounded-xl border border-green-400/70 px-4 py-2 text-sm font-bold text-white hover:bg-green-400/10 sm:block"
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
      </header>

      {/* HERO */}
      <section className="px-5 py-20 text-center">
        <h1 className="text-5xl font-black md:text-7xl">
          3D Baskı ile
          <span className="block text-violet-400">Fikirlerini Gerçeğe Dönüştür</span>
        </h1>
        <p className="mt-6 text-zinc-300">
          Kişiye özel 3D tasarım ve baskı hizmetleri.
        </p>

        <a
          href="#urunler"
          className="mt-8 inline-block rounded-xl bg-violet-500 px-6 py-3 font-bold"
        >
          Ürünleri Gör
        </a>
      </section>

      {/* KATEGORİLER */}
      <section className="px-5 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {categories.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 p-4 text-center">
              <div className="text-3xl">{c.icon}</div>
              <p className="mt-2 text-sm">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section id="urunler" className="px-5 py-20">
        <h2 className="text-3xl font-bold">Ürünler</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="rounded-xl border border-white/10 bg-[#0d1320]">
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
                <p className="text-violet-400 font-black">{product.price}</p>

                <a
                  href={whatsappLink(
                    `Merhaba Nuvix, ${product.name} hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-lg border border-green-400 px-3 py-2 text-center text-sm text-green-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="px-5 py-20">
        <h2 className="text-3xl font-bold">3D Hizmetler</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 p-6">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.text}</p>

              <a
                href={whatsappLink(
                  `Merhaba Nuvix, ${s.title} hakkında bilgi almak istiyorum.`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-green-400"
              >
                Bilgi Al
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="iletisim" className="border-t border-white/10 px-5 py-10 text-center">
        <p className="text-xl font-bold">NUVIX 3D</p>
        <p className="text-zinc-400">0552 838 58 22</p>
      </footer>

    </main>
  );
}