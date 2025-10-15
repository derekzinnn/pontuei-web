import { motion } from "framer-motion";
import { TrendingUp, Users, Store, DollarSign } from "lucide-react";

const stats = [
  { icon: Store, value: "2.500+", label: "Lojas Parceiras", color: "text-blue-500" },
  { icon: Users, value: "150K+", label: "Clientes Ativos", color: "text-green-500" },
  { icon: TrendingUp, value: "40%", label: "Aumento Médio em Vendas", color: "text-purple-500" },
  { icon: DollarSign, value: "R$ 5M+", label: "Movimentado Mensalmente", color: "text-orange-500" }
];

export function AdminStats() {
  return (
    <section className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Números que <span className="text-primary">impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de empresários que já transformaram seus negócios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}