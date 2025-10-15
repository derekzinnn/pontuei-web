import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Home,
  Store, 
  Package, 
  Menu, 
  Settings, 
  Users, 
  DollarSign,
  FileText,
  Palette,
  Sparkles
} from "lucide-react";

const menuItems = [
  { icon: Home, title: "Dashboard", route: "/store-dashboard", active: true },
  { icon: FileText, title: "Informações Básicas", route: "/store/basic-info" },
  { icon: Store, title: "Cadastro Completo", route: "/store/complete-registration" },
  { icon: Palette, title: "Personalizar Página", route: "/store/customize" },
  { icon: Package, title: "Configurar Produtos", route: "/store/products" },
  { icon: Menu, title: "Configurar Cardápio", route: "/store/menu" },
  { icon: Users, title: "Gerenciar Membros", route: "/store/members" },
  { icon: DollarSign, title: "Financeiro", route: "/store/financial" }
];

export function StoreSidebar() {
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
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={item.route}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-primary/10 ${
                  item.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}