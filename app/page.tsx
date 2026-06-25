"use client";

import { useState } from "react";

const whatsappNumber = "905528385822";

const categories = [
  { title: "Kişiye Özel Anahtarlıklar", icon: "🔑" },
  { title: "Araç Aksesuarları", icon: "🚗" },
  { title: "Plakalıklar", icon: "🔲" },
  { title: "Logo / Tabela Baskıları", icon: "⬡" },
  { title: "Dekoratif Ürünler", icon: "🏺" },
  { title: "Hediyelik Ürünler", icon: "🎁" },
];

const services = [
  {
    title: "3D Tasarım",
    text: "Fikirlerinizi 3D modele dönüştürüyoruz.",
    icon: "✏️",
  },
  {
    title: "3D Baskı",
    text: "Yüksek kaliteli 3D baskı hizmeti sunuyoruz.",
    icon: "🖨️",
  },
  {
    title: "Modelleme",
    text: "Özel ölçü ve ihtiyaca göre modelleme.",
    icon: "⚙️",
  },
  {
    title: "Prototip Üretim",
    text: "Ürün öncesi prototip üretimi yapıyoruz.",
    icon: "🧩",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="text-2xl font-black tracking-[0.18em]">
            NUVI<span className="text-violet-400">X</span>
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-zinc-300 lg:flex">
            <a href="#" className="hover:text-white">Ana Sayfa</a>
            <a href="#urunler" className="hover:text-white">Ürünler</a>
            <a href="#hizmetler" className="hover:text-white">3D Hizmetlerimiz</a>
            <a href="#ozel-siparis" className="hover:text-white">Özel Sipariş</a>
            <a href="#hakkimizda" className="hover:text-white">Hakkımızda</a>
            <a href="#iletisim" className="hover:text-white">İletişim</a>
          </nav>

          <a
            href={whatsappLink("Merhaba Nuvix, bilgi almak istiyorum.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-green-400/70 px-4 py-2 text-sm font-bold text-white hover:bg-green-400/10 sm:block"
          >
            🟢 WhatsApp’tan Yaz
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
              <a href="#urunler" onClick={() => setMenuOpen(false)}>Ürünler</a>
              <a href="#hizmetler" onClick={() => setMenuOpen(false)}>3D Hizmetlerimiz</a>
              <a href="#ozel-siparis" onClick={() => setMenuOpen(false)}>Özel Sipariş</a>
              <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</a>
              <a href="#iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.35),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.2),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-bold tracking-wider text-violet-300">
              3D TASARIM • 3D BASKI • KİŞİYE ÖZEL ÜRETİM
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Fikirlerini
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                3D Baskıya
              </span>
              Dönüştürüyoruz.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Kişiye özel tasarım, kaliteli 3D baskı ve hızlı teslimat ile fikirlerini gerçeğe dönüştürüyoruz.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#urunler" className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-bold">
                Ürünleri İncele
              </a>

              <a href="#hizmetler" className="rounded-xl border border-white/30 px-6 py-3 font-bold hover:bg-white/10">
                3D Hizmetlerimiz
              </a>

              <a
                href={whatsappLink("Merhaba Nuvix, bilgi almak istiyorum.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-green-400/70 px-6 py-3 font-bold text-green-300 hover:bg-green-400/10"
              >
                🟢 WhatsApp’tan Yaz
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-violet-400/30 bg-gradient-to-br from-zinc-800 via-[#10152a] to-violet-950/40">
            <div className="absolute h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative text-center">
              <div className="text-9xl">🖨️</div>
              <p className="mt-5 text-xl font-bold">NUVIX 3D BASKI</p>
              <p className="mt-2 text-sm text-zinc-400">Ürün görseli yakında eklenecek</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <p className="text-center text-sm font-bold tracking-[0.2em] text-violet-400">
          ÜRÜN KATEGORİLERİ
        </p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <div className="text-4xl">{category.icon}</div>
              <p className="mt-3 text-sm font-bold">{category.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="urunler" className="border-y border-white/10 bg-white/[0.02] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.2em] text-violet-400">ÜRÜNLERİMİZ</p>
          <h2 className="mt-3 text-4xl font-black">Tüm Ürünler</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Kişiye özel 3D baskı ürünlerimizi inceleyin. Yeni ürünler düzenli olarak eklenmektedir.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <article key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1320]">
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-zinc-700 to-[#111827] text-center">
                  <div>
                    <div className="text-6xl">📦</div>
                    <p className="mt-3 text-sm text-zinc-400">Ürün görseli yakında</p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold">Ürün {index + 1}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                    Bu alana ürün açıklaması eklenecek.
                  </p>
                  <p className="mt-4 text-lg font-black text-violet-400">Fiyat yakında</p>

                  <a
                    href={whatsappLink(`Merhaba Nuvix, Ürün ${index + 1} hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 block rounded-lg border border-green-400/60 px-3 py-2 text-center text-sm font-bold text-green-300 hover:bg-green-400/10"
                  >
                    🟢 WhatsApp’tan Bilgi Al
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl px-5 py-20">
        <p className="text-sm font-bold tracking-[0.2em] text-violet-400">3D HİZMETLERİMİZ</p>
        <h2 className="mt-3 text-4xl font-black">Tasarımdan üretime tüm süreç</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.text}</p>

              <a
                href={whatsappLink(`Merhaba Nuvix, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-lg border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white hover:text-black"
              >
                Detaylı Bilgi
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="ozel-siparis" className="mx-auto max-w-7xl px-5 py-10">
        <div className="rounded-3xl border border-violet-400/30 bg-gradient-to-r from-violet-700/40 via-blue-700/30 to-fuchsia-700/30 p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-violet-200">ÖZEL SİPARİŞ</p>
            <h2 className="mt-3 text-4xl font-black">Aklındaki ürünü anlatsan yeter.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-200">
              İsim, ölçü, renk, adet, görsel, logo veya STL dosyanı WhatsApp üzerinden gönder. Sana özel fiyat ve üretim bilgisi verelim.
            </p>
          </div>

          <a
            href={whatsappLink("Merhaba Nuvix, özel tasarım / özel 3D baskı siparişi vermek istiyorum.")}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-xl bg-green-500 px-7 py-4 text-center font-black text-black md:mt-0"
          >
            🟢 WhatsApp’tan Yaz
          </a>
        </div>
      </section>

      <footer id="iletisim" className="border-t border-white/10 bg-[#050811] px-5 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 md:flex-row">
          <div>
            <p className="text-3xl font-black tracking-[0.18em]">
              NUVI<span className="text-violet-400">X</span>
            </p>
            <p className="mt-2 text-sm text-zinc-500">3D Tasarım ve 3D Baskı Hizmetleri</p>
            <p className="mt-3 text-sm font-bold text-zinc-300">0552 838 58 22</p>
          </div>

          <a
            href={whatsappLink("Merhaba Nuvix, bilgi almak istiyorum.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-green-500 px-7 py-4 font-black text-black"
          >
            🟢 WhatsApp’tan Yaz
          </a>
        </div>
      </footer>
    </main>
  );
}