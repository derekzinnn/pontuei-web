import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Gift, Smartphone, MapPin, CreditCard, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection"; 

const features = [
  {
    icon: ShoppingBag,
    title: "Compre e Pontue",
    description: "Acumule pontos a cada compra realizada nas lojas parceiras do Pontuei.",
  },
  {
    icon: Gift,
    title: "Troque por Prêmios",
    description: "Use seus pontos para ganhar descontos, produtos e experiências exclusivas.",
  },
  {
    icon: Smartphone,
    title: "App Intuitivo",
    description: "Interface moderna e fácil de usar, disponível para iOS e Android.",
  },
  {
    icon: MapPin,
    title: "Lojas Próximas",
    description: "Encontre facilmente as lojas parceiras mais próximas de você.",
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Sistema de pagamento integrado com máxima segurança para suas transações.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhe o Progresso",
    description: "Veja seu histórico de pontos e acompanhe suas economias em tempo real.",
  },
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tighter">
              Como funciona o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Pontuei
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubra todas as funcionalidades que fazem o Pontuei ser a melhor escolha 
              para economizar nas suas compras do dia a dia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card 
                className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm hover:-translate-y-2 h-full"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

