import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, User, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function StoreRegisterForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleUserDataChange = (field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('User registration:', userData);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-light via-background to-pink-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-pink-glow/20 to-transparent blur-3xl animate-float"
        />
        <motion.div 
          className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-glow/25 via-primary/20 to-transparent blur-3xl animate-float-slow"
        />
        <motion.div 
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-pink-light/30 to-transparent blur-3xl animate-pulse-glow"
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-pink-glow/30 to-primary/30 blur-3xl animate-rotate-gradient" />
        </div>

        <div className="absolute inset-0 opacity-[0.04]">
          <div 
            className="absolute inset-0 animate-grid-flow"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Simple Logo Header */}
      <div className="relative z-10 px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-primary">
            Pontuei
          </span>
        </Link>
      </div>

      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-2xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cadastre sua <span className="text-primary">conta</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Crie sua conta para acessar a plataforma
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <User className="w-6 h-6 text-primary" /> Dados Pessoais
                </CardTitle>
                <CardDescription>
                  Crie sua conta para acessar a plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={userData.name}
                    onChange={(e) => handleUserDataChange('name', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={userData.email}
                    onChange={(e) => handleUserDataChange('email', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={userData.password}
                      onChange={(e) => handleUserDataChange('password', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={userData.confirmPassword}
                      onChange={(e) => handleUserDataChange('confirmPassword', e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/store-dashboard">
                    <Button 
                      className="w-full text-lg py-6 group"
                      onClick={handleSubmit}
                    >
                      Criar Conta
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>


              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}