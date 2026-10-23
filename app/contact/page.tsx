import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Kontak",
};

const contacts = [
  {
    title: "Alamat",
    description: "Jl. Bersama No. 20, Tangerang, Indonesia",
  },
  {
    title: "Email",
    description: "majubersama@gmail.com",
  },
  {
    title: "Telepon",
    description: "+62 21 1234 5678",
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <SectionTitle
        title="Hubungi Kami"
        subtitle="Kami siap membantu kebutuhan digital bisnis Anda."
      />
      <div className="grid">
        {contacts.map((contact) => (
          <Card
            key={contact.title}
            title={contact.title}
            description={contact.description}
          />
        ))}
      </div>
    </section>
  );
}
