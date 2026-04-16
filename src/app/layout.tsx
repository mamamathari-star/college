import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mirukhali School & College | মিরুখালি মাধ্যমিক বিদ্যালয় ও কলেজ",
  description:
    "Official website of Mirukhali School & College, established 1937. Located in Mirukhali, Mathbaria, Pirojpur. EIIN: 102726. A premier co-educational institution.",
  keywords: "Mirukhali School, Mirukhali College, Mathbaria, Pirojpur, SSC, HSC, EIIN 102726",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
