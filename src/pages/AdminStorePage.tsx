import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/AdminStorePage/HeroAdmin";
import { Header } from "@/components/layout/NavigationAdmin";

const AdminStorePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default AdminStorePage;

