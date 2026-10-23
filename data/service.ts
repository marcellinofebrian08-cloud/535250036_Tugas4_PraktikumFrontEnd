export type Service = {
  slug: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "pengembangan-web",
    title: "Pengembangan Web",
    description:
      "Membangun website perusahaan yang cepat, aman, dan mudah dikelola.",
    details: [
      "Website company profile dan landing page",
      "Sistem informasi berbasis web",
      "Optimasi performa dan SEO dasar",
    ],
  },
  {
    slug: "aplikasi-mobile",
    title: "Aplikasi Mobile",
    description:
      "Pengembangan aplikasi Android dan iOS untuk mendukung operasional bisnis.",
    details: [
      "Aplikasi katalog produk",
      "Aplikasi pemesanan dan pembayaran",
      "Integrasi dengan API backend",
    ],
  },
  {
    slug: "desain-ui-ux",
    title: "Desain UI/UX",
    description:
      "Merancang tampilan yang intuitif dan nyaman digunakan oleh pengguna.",
    details: [
      "Riset kebutuhan pengguna",
      "Wireframe dan prototype",
      "Sistem desain yang konsisten",
    ],
  },
  {
    slug: "konsultasi-it",
    title: "Konsultasi IT",
    description:
      "Membantu perusahaan merencanakan transformasi digital yang tepat sasaran.",
    details: [
      "Analisis kebutuhan teknologi",
      "Perencanaan infrastruktur",
      "Pendampingan implementasi",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
