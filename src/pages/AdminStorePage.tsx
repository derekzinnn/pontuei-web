import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Store, Users, TrendingUp, Gift, Smartphone, CreditCard } from "lucide-react";

const AdminStorePage = () => {
  const benefits = [
    "Aumento de até 40% na fidelização de clientes",
    "Sistema automatizado de pontos e recompensas",
    "Dashboard completo com relatórios e métricas",
    "Integração fácil com seu sistema atual",
    "Suporte técnico especializado",
    "Campanhas promocionais personalizadas"
  ];

  const steps = [
    {
      number: "01",
      title: "Cadastro da Loja",
      description: "Registre sua empresa em nossa plataforma com informações básicas"
    },
    {
      number: "02", 
      title: "Configuração do Sistema",
      description: "Defina regras de pontuação, recompensas e integre com seu PDV"
    },
    {
      number: "03",
      title: "Treinamento da Equipe", 
      description: "Capacitamos sua equipe para usar o sistema de forma eficiente"
    },
    {
      number: "04",
      title: "Lançamento",
      description: "Ativação do programa e início da captação de clientes fiéis"
    }
  ];

  const features = [
    {
      icon: <Store className="w-8 h-8 text-primary" />,
      title: "Gestão Completa",
      description: "Controle total sobre campanhas, pontos e recompensas da sua loja"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Base de Clientes",
      description: "Acesso a dados completos dos seus clientes e histórico de compras"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Relatórios Avançados",
      description: "Métricas detalhadas de performance e ROI do programa de fidelidade"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Recompensas Flexíveis",
      description: "Crie promoções e recompensas personalizadas para seus clientes"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "App Mobile",
      description: "Aplicativo dedicado para sua loja com sua marca e identidade visual"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Múltiplas Integrações",
      description: "Compatível com os principais sistemas de PDV e pagamento do mercado"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pontuei for Business
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Button>Cadastrar Loja</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">Para Lojas e Empresas</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforme sua loja em um
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Hub de Fidelidade
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aumente suas vendas e fidelize clientes com nossa plataforma completa de pontos e recompensas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Agendar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o Pontuei?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece tudo que sua loja precisa para criar um programa de fidelidade de sucesso
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-elegant">
                <CardContent className="p-6 flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos Completos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu programa de fidelidade
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-elegant text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Em apenas 4 passos simples, sua loja estará pronta para fidelizar clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para revolucionar sua loja?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de lojas que já aumentaram suas vendas com nosso sistema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Cadastrar Minha Loja
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <Link to="/">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Pontuei for Business
            </h3>
          </Link>
          <p className="text-muted-foreground mb-6">
            A plataforma completa de fidelidade para sua loja
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Início
            </Link>
            <Link to="/login" className="text-muted-foreground hover:text-primary">
              Login
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminStorePage;

