import { PageLayout } from "@/components/common";
import { Hero } from "@/features/AdminStorePage/HeroAdmin";
import { AdminBenefits, AdminStats, AdminFeatures, AdminCTA } from "@/components/admin";
import { Footer } from "@/components/layout/Footer";

const AdminStorePage = () => {
  return (
    <PageLayout showHeader={false} className="min-h-screen">
      <Hero />
      <AdminStats />
      <AdminBenefits />
      <AdminFeatures />
      <AdminCTA />
      <Footer />
    </PageLayout>
  );
};

export default AdminStorePage;

