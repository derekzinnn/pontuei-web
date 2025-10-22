import { Scene3D } from "@/components/layout/Scene3d";
import { AdminNavigation, AdminHeroContent, AdminBackground } from "@/components/admin";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/login');
  };

  const handleGetStarted = () => {
    navigate('/login?store=true');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-light via-background to-pink-light">
      <Scene3D />
      <AdminBackground />
      <AdminNavigation onLoginClick={handleLogin} onRegisterClick={handleRegister} />
      <AdminHeroContent onGetStarted={handleGetStarted} />
    </div>
  );
};