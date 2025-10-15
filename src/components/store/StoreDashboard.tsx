import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Package, 
  Menu, 
  Settings, 
  Users, 
  DollarSign, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Eye,
  Edit,
  Plus
} from "lucide-react";
import { StoreSidebar, StoreHeader } from "@/components/store";

const setupTasks = [
  { id: 1, title: "Informações Básicas", completed: true, description: "Nome, descrição da loja" },
  { id: 2, title: "Cadastro Completo", completed: false, description: "Endereço, CNPJ, documentos" },
  { id: 3, title: "Personalizar Página", completed: false, description: "Banner, logo, cores" },
  { id: 4, title: "Configurar Produtos", completed: false, description: "Adicionar produtos/serviços" },
  { id: 5, title: "Configurar Cardápio", completed: false, description: "Menu e sistema de pontos" }
];

const menuItems = [
  { 
    icon: Package, 
    title: "Configurar Produtos", 
    description: "Gerencie seu catálogo de produtos",
    status: "pending",
    route: "/store/products"
  },
  { 
    icon: Menu, 
    title: "Configurar Cardápio", 
    description: "Configure menu e sistema de pontos",
    status: "pending",
    route: "/store/menu"
  },
  { 
    icon: Settings, 
    title: "Configurar Página", 
    description: "Personalize sua loja",
    status: "pending",
    route: "/store/settings"
  },
  { 
    icon: Users, 
    title: "Gerenciar Membros", 
    description: "Equipe e permissões",
    status: "pending",
    route: "/store/members"
  },
  { 
    icon: DollarSign, 
    title: "Financeiro", 
    description: "Relatórios e DRE",
    status: "pending",
    route: "/store/financial"
  }
];

export function StoreDashboard() {
  const [completedTasks] = useState(1);
  const totalTasks = setupTasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <StoreSidebar />
      <StoreHeader />
      
      <div className="ml-64 mt-16 p-6">

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Setup Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Configuração da Loja
                  </CardTitle>
                  <CardDescription>Complete todos os passos para ativar sua loja</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Progresso geral</span>
                      <span className="text-sm text-muted-foreground">{completedTasks}/{totalTasks} concluídos</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                    
                    <div className="space-y-3 mt-6">
                      {setupTasks.map((task) => (
                        <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                          {task.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium">{task.title}</h4>
                            <p className="text-sm text-muted-foreground">{task.description}</p>
                          </div>
                          {!task.completed && (
                            <Button size="sm" variant="outline">Configurar</Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle>Ações Rápidas</CardTitle>
                  <CardDescription>Gerencie os principais aspectos da sua loja</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 rounded-lg border border-border/50 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {item.status === 'pending' ? 'Pendente' : 'Configurado'}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Store Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Store className="w-5 h-5" />
                    Status da Loja
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                        Em Configuração
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Visibilidade</span>
                      <Badge variant="outline">Privada</Badge>
                    </div>
                    <Button className="w-full" disabled>
                      <Eye className="w-4 h-4 mr-2" />
                      Visualizar Loja
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Resumo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">0</div>
                      <p className="text-sm text-muted-foreground">Produtos cadastrados</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">0</div>
                      <p className="text-sm text-muted-foreground">Clientes ativos</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">R$ 0</div>
                      <p className="text-sm text-muted-foreground">Faturamento mensal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle>Ações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar Produto
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurações
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}