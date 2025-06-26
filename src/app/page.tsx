import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FooterCTA, Footer } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <BeforeAfter />
      <FooterCTA />
      <Footer />
    </main>
  );
}
