import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p>Halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/" className="btn">
        Kembali ke Beranda
      </Link>
    </section>
  );
}
