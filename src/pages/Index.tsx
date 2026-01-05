import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Configurator from "@/components/sections/Configurator";
import Specs from "@/components/sections/Specs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Configurator />
      <Specs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
