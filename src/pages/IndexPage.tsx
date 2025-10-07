import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Features } from "@/features/landing/components/Features";
import { Hero } from "@/features/landing/components/Hero";
import { HowToStart } from "@/features/landing/components/HowToStart";

const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowToStart />
      <Features />
      <Footer />
    </div>
  );
};

export default IndexPage;

