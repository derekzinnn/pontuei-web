import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface AuthFormProps {
  mode: 'login' | 'register';
  onLogin?: (email: string, password: string) => void;
  onRegister?: (name: string, email: string, cpf: string, birthDate: string, password: string) => void;
}

export function AuthForm({ mode, onLogin, onRegister }: AuthFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    birthDate: "",
    password: "",
    confirmPassword: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    onLogin?.(formData.email, formData.password);
    navigate('/store-register');
  };

  const handleRegister = () => {
    onRegister?.(formData.name, formData.email, formData.cpf, formData.birthDate, formData.password);
    navigate('/store-register');
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (mode === 'login') {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="email" className="text-base font-medium">Usuário</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com ou usuário"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <div className="space-y-3">
          <div className= "items-center">
            <Label htmlFor="password" className="text-base font-medium">Senha</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="h-12 text-base"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="keepConnected" className="w-4 h-4 text-primary" />
            <label htmlFor="keepConnected" className="text-sm text-muted-foreground">
              Manter conectado
            </label>
          </div>
          <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
            Esqueceu sua senha?
          </Link>
        </div>
        <Button className="w-full h-12 text-base shadow-glow hover:shadow-primary/50" onClick={handleLogin}>
          Entrar
        </Button>
        <div className="text-center">
          <Link to="/register" className="text-sm text-muted-foreground hover:text-primary">
            Não tem conta? Cadastrar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i === step ? 'bg-primary text-white' : i < step ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
            }`}>
              {i}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-base font-medium">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-medium">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <Button className="w-full h-12 text-base shadow-glow hover:shadow-primary/50" onClick={nextStep}>
            Próximo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="cpf" className="text-base font-medium">CPF</Label>
            <Input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formData.cpf}
              onChange={(e) => handleInputChange('cpf', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="birthDate" className="text-base font-medium">Data de nascimento</Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 h-12 text-base" onClick={prevStep}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
            </Button>
            <Button className="flex-1 h-12 text-base shadow-glow hover:shadow-primary/50" onClick={nextStep}>
              Próximo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="password" className="text-base font-medium">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="confirmPassword" className="text-base font-medium">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="h-12 text-base"
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 h-12 text-base" onClick={prevStep}>
              <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
            </Button>
            <Button className="flex-1 h-12 text-base shadow-glow hover:shadow-primary/50" onClick={handleRegister}>
              Criar conta
            </Button>
          </div>
        </div>
      )}

      <div className="text-center">
        <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">
          Já tem conta? Entrar
        </Link>
      </div>
    </div>
  );
}