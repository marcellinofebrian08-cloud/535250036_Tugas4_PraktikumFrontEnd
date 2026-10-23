import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export const metadata = {
  title: "Layanan",
};

export default function ServicesPage() {
  return (
    <section className="section">
      <SectionTitle
        title="Layanan Kami"
        subtitle="Pilih layanan untuk melihat detailnya."
      />
      <div className="grid">
        {services.map((service) => (
          <Card
            key={service.slug}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
