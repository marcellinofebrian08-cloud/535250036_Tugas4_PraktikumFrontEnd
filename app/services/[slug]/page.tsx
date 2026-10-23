import Link from "next/link";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { services, getServiceBySlug } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return {
    title: service ? service.title : "Layanan tidak ditemukan",
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="section">
      <Link href="/services" className="back-link">
        ← Kembali ke Layanan
      </Link>

      <SectionTitle title={service.title} subtitle={service.description} />

      <h3 className="detail-heading">Ruang Lingkup</h3>
      <ul className="list">
        {service.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </section>
  );
}
