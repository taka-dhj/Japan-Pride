import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ambassadors } from "@/components/Ambassadors";
import { Features } from "@/components/Features";
import { Tours } from "@/components/Tours";
import { Team } from "@/components/Team";
import { Wedding } from "@/components/Wedding";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Ambassadors />
      <Features />
      <Tours />
      <Team />
      <Wedding />
      <Blog />
      <Footer />
    </main>
  );
}
