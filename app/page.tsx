import Link from "next/link";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export default function HomePage() {
  const featured = services.slice(0, 3);

  return (
    <>
      <section className="hero">
        <h1>Selamat Datang di PT Maju Bersama</h1>
        <p>
          Kami membantu bisnis Anda berkembang melalui solusi digital yang
          inovatif, handal, dan mudah digunakan.
        </p>
        <Link href="/services" className="btn">
          Lihat Layanan Kami
        </Link>
      </section>

      <section className="section">
        <SectionTitle
          title="Layanan Unggulan"
          subtitle="Beberapa layanan yang paling sering kami tangani."
        />
        <div className="grid">
          {featured.map((service) => (
            <Card
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
