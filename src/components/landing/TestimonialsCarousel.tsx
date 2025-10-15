import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente frequente",
    content: "O Pontuei mudou completamente como eu faço compras! Já economizei mais de R$ 500 só este mês.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "João Santos",
    role: "Usuário há 6 meses",
    content: "Aplicativo incrível! Super fácil de usar e as recompensas são realmente valiosas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Dona de loja parceira",
    content: "Desde que me associei ao Pontuei, minhas vendas aumentaram 40%. Recomendo demais!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Pedro Lima",
    role: "Cliente VIP",
    content: "Melhor app de pontos que já usei. Interface linda e funciona perfeitamente!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carla Mendes",
    role: "Empresária",
    content: "Revolucionou meu negócio! Os clientes voltam mais e gastam mais. Simplesmente fantástico!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Roberto Alves",
    role: "Cliente há 1 ano",
    content: "Nunca vi um app tão bem feito. Design lindo e funciona sem travamentos. Nota 10!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Fernanda Rocha",
    role: "Influencer",
    content: "Indico para todos os meus seguidores! É incrível como economizo nas compras do dia a dia.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carlos Eduardo",
    role: "Gerente de loja",
    content: "Nossos clientes adoram! Aumentou muito a frequência de visitas na nossa loja.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsCarousel() {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const cardWidth = 320;
        const maxTranslate = -(testimonials.length - 1) * cardWidth;
        return prev <= maxTranslate ? 0 : prev - cardWidth;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-glow/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-transparent to-pink-glow/5 rounded-full blur-3xl animate-rotate-gradient" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tighter">
            O que nossos usuários{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              estão dizendo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas compras com o Pontuei
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ x: translateX }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed italic text-sm">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}