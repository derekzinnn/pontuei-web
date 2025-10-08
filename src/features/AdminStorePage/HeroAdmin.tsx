import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Título Principal */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94057] to-white-500 bg-200% animate-gradient">
            Pontuei.
              </span> Seu novo{" "}
              <span className="text-primary">
                aplicativo de pontos
              </span>{" "}
              chegou.
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6">
              Compre, pontue e retire de um jeito que você nunca viu. 
              O Pontuei conecta você com o melhor das lojas da sua cidade, 
              transformando cada compra em um novo ponto de partida para economizar.
            </p>
          </motion.div>

          {/* Botões de Ação */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="group">
              BAIXE O APP AGORA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Ver Demonstração
            </Button>
          </motion.div>

          {/* Estatísticas */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10.000+</div>
              <div className="text-sm text-muted-foreground">Usuários ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Lojas parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">R$ 2M+</div>
              <div className="text-sm text-muted-foreground">Em economia gerada</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

