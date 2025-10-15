import { PageLayout } from "@/components/common";
import { Footer } from "@/components/layout/Footer";
import { Features } from "@/features/landing/components/Funcionalidades";
import { Hero } from "@/features/landing/components/Hero";
import { HowToStart } from "@/features/landing/components/HowToStart";
import { TestimonialsCarousel } from "@/components/landing";

const IndexPage = () => {
  return (
    <PageLayout showHeader={false} className="min-h-screen">
      <Hero />
      <HowToStart />
      <Features />
      <TestimonialsCarousel />
      <Footer />
    </PageLayout>
  );
};

export default IndexPage;

