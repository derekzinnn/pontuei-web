import { Link, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthForm } from "@/components/common";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const isStoreRegistration = searchParams.get('store') === 'true';

  const handleRegister = (name: string, email: string, cpf: string, birthDate: string, password: string) => {
    console.log('Register:', { name, email, cpf, birthDate, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-light via-background to-pink-light overflow-hidden relative flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-pink-glow/20 to-transparent blur-3xl animate-float" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-glow/25 via-primary/20 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-pink-light/30 to-transparent blur-3xl animate-pulse-glow" />
      </div>
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <motion.div 
              className="flex items-center justify-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-primary">
                Pontuei
              </span>
            </motion.div>
          </Link>
        </div>

        <Card className="border-0 shadow-elegant bg-card/90 backdrop-blur-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl text-center font-bold">
              {isStoreRegistration ? (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-glow">
                  Cadastro de Loja
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-glow">
                  Criar Conta
                </span>
              )}
            </CardTitle>
            <CardDescription className="text-center text-base">
              {isStoreRegistration 
                ? "Primeiro, crie sua conta para acessar o Pontuei Business"
                : "Preencha os dados para criar sua conta"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm mode="register" onRegister={handleRegister} />
            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao criar uma conta, você concorda com nossos{" "}
              <Link to="#" className="underline hover:text-primary">
                Termos de Uso
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;