import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";

interface AuthFormProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: (name: string, email: string, password: string) => void;
}

export function AuthForm({ onLogin, onRegister }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin?.(email, password);
    // Simula login bem-sucedido e redireciona
    navigate('/store-dashboard');
  };

  const handleRegister = () => {
    onRegister?.(name, email, password);
    // Simula cadastro bem-sucedido e redireciona
    navigate('/store-dashboard');
  };

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-12">
        <TabsTrigger value="login" className="text-base">Entrar</TabsTrigger>
        <TabsTrigger value="register" className="text-base">Cadastrar</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login" className="space-y-6 mt-8">
        <div className="space-y-3">
          <Label htmlFor="email" className="text-base font-medium">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="password" className="text-base font-medium">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <Button className="w-full h-12 text-base shadow-glow hover:shadow-primary/50" onClick={handleLogin}>
          Entrar
        </Button>
      </TabsContent>
      
      <TabsContent value="register" className="space-y-6 mt-8">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-base font-medium">Nome completo</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="email-register" className="text-base font-medium">E-mail</Label>
          <Input
            id="email-register"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="password-register" className="text-base font-medium">Senha</Label>
          <Input
            id="password-register"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <Button className="w-full h-12 text-base shadow-glow hover:shadow-primary/50" onClick={handleRegister}>
          Criar conta
        </Button>
      </TabsContent>
    </Tabs>
  );
}