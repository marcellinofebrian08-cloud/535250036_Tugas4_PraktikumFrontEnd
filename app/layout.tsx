import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PT Maju Bersama",
    template: "%s | PT Maju Bersama",
  },
  description: "Company profile PT Maju Bersama, penyedia solusi digital.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="main">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
