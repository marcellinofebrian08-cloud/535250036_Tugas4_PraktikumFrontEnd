import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Tentang Kami",
};

const values = [
  {
    title: "Inovasi",
    description: "Terus mencari cara baru agar solusi kami selalu relevan.",
  },
  {
    title: "Integritas",
    description: "Jujur dan bertanggung jawab dalam setiap proyek.",
  },
  {
    title: "Kolaborasi",
    description: "Bekerja bersama klien sebagai satu tim untuk mendapatkan hasil terbaik.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <SectionTitle
          title="Tentang Kami"
          subtitle="Mitra teknologi untuk bisnis Indonesia sejak 2025."
        />
        <p className="about-text">
          PT Maju Bersama adalah perusahaan yang bergerak di bidang pengembangan
          perangkat lunak. Kami mendampingi klien dari tahap perencanaan,
          desain, hingga implementasi dan pemeliharaan sistem.
        </p>
      </section>

      <section className="section">
        <SectionTitle title="Nilai Perusahaan" />
        <div className="grid">
          {values.map((value) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
