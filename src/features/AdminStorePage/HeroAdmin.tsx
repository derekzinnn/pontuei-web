import { Scene3D } from "@/components/layout/Scene3d";
import { AdminNavigation, AdminHeroContent, AdminBackground } from "@/components/admin";

export const Hero = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  const handleGetStarted = () => {
    console.log('Get started clicked');
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