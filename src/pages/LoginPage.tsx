import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthForm } from "@/components/common";

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
  };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log('Register:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pontuei
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2">Entre na sua conta ou crie uma nova</p>
        </div>

        <Card className="border-0 shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Bem-vindo</CardTitle>
            <CardDescription className="text-center">
              Acesse sua conta para gerenciar seus pontos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm onLogin={handleLogin} onRegister={handleRegister} />
            <div className="text-center mt-4">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
                Esqueceu sua senha?
              </Link>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Ao criar uma conta, você concorda com nossos{" "}
              <Link to="#" className="underline hover:text-primary">
                Termos de Uso
              </Link>
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

