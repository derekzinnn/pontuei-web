import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Home,
  Package, 
  Users, 
  DollarSign,
  Palette,
  Sparkles,
  ShoppingCart,
  CheckCircle
} from "lucide-react";

const menuItems = [
  { icon: Home, title: "Dashboard", route: "/store-dashboard" },
  { icon: CheckCircle, title: "Concluir Cadastro", route: "/store/complete-setup" },
  { icon: Palette, title: "Personalizar Página", route: "/store/customize" },
  { icon: Package, title: "Configurar Produtos", route: "/store/products" },
  { icon: ShoppingCart, title: "Pedidos", route: "/store/orders" },
  { icon: Users, title: "Gerenciar Membros", route: "/store/members" },
  { icon: DollarSign, title: "Financeiro", route: "/store/financial" }
];

export function StoreSidebar() {
  const location = useLocation();
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  // Verifica se o cadastro foi completado
  useEffect(() => {
    const registrationStatus = localStorage.getItem('storeRegistrationComplete');
    setIsRegistrationComplete(registrationStatus === 'true');
  }, [location.pathname]);

  // Filtra os itens do menu baseado no status do cadastro
  const filteredMenuItems = isRegistrationComplete 
    ? menuItems.filter(item => item.title !== "Concluir Cadastro")
    : menuItems;
    
  // Itens permitidos quando o cadastro não está completo
  const allowedWhenIncomplete = ["Dashboard", "Concluir Cadastro"];
  
  return (
    <motion.div 
      className="fixed left-0 top-0 h-full w-64 bg-card/80 backdrop-blur-xl border-r border-border/50 z-40"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-primary">
            Pontuei Store
          </span>
        </Link>

        {/* Menu Items */}
        <nav className="space-y-2">
          {filteredMenuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {!isRegistrationComplete && !allowedWhenIncomplete.includes(item.title) ? (
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg opacity-50 cursor-not-allowed text-muted-foreground`}>
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
              ) : (
                <Link
                  to={item.route}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-primary/10 ${
                    location.pathname === item.route ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}