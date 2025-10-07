import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    step: "01",
    title: "Baixe o App",
    description: "Faça o download gratuito do Pontuei na App Store ou Google Play e crie sua conta em segundos.",
  },
  {
    step: "02",
    title: "Encontre Lojas",
    description: "Use nosso mapa para localizar lojas parceiras próximas a você ou navegue por categorias.",
  },
  {
    step: "03",
    title: "Compre e Pontue",
    description: "Realize suas compras normalmente e apresente seu QR Code para acumular pontos automaticamente.",
  },
  {
    step: "04",
    title: "Troque por Prêmios",
    description: "Use seus pontos para conseguir descontos, produtos gratuitos ou experiências exclusivas.",
  },
];

export const HowToStart = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const stepIndex = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const unsubscribe = stepIndex.on("change", (latest) => {
      setCurrentStep(Math.round(latest));
    });
    return () => unsubscribe();
  }, [stepIndex]);

  return (
    <section id="como-comecar" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Processo Simples
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tighter">
            Como começar a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              economizar hoje
            </span>
          </h2>
        </div>

        <div ref={targetRef} className="relative h-[400vh]">
          <div className="sticky top-16 flex h-screen items-start justify-center overflow-hidden pt-16">
            <div className="relative flex w-full max-w-5xl items-center justify-between">
              
              <div className="w-1/2 space-y-4">
                {steps.map((step, index) => {
                  const isActive = index === currentStep;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isActive ? 1 : 0.3, x: isActive ? 0 : -20 }}
                      transition={{ duration: 0.5 }}
                      className={`p-6 rounded-lg ${isActive ? 'bg-card/80 shadow-glow' : 'bg-transparent'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-gradient-primary' : 'bg-muted'}`}>
                          <span className={`text-xl font-bold transition-colors duration-500 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                            {step.step}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="w-1/3 h-[60vh] rounded-2xl bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Imagem do App aqui]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


