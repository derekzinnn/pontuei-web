import { motion } from "framer-motion";
import { Smartphone, BarChart3, Zap, Shield, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App Moderno",
    description: "Interface intuitiva que seus clientes vão amar usar"
  },
  {
    icon: BarChart3,
    title: "Dashboard Completo",
    description: "Acompanhe vendas, clientes e métricas em tempo real"
  },
  {
    icon: Zap,
    title: "Integração Rápida",
    description: "Configure sua loja em menos de 5 minutos"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção avançada para todos os dados e transações"
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Equipe especializada sempre pronta para ajudar"
  },
  {
    icon: Rocket,
    title: "Crescimento Garantido",
    description: "Aumente suas vendas em até 40% no primeiro mês"
  }
];

export function AdminFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Tudo que sua loja <span className="text-primary">precisa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas completas para transformar sua loja em um hub de fidelização
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}