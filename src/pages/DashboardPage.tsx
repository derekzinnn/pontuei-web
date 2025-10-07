import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Gift, Star, CreditCard, Bell, LogOut } from "lucide-react";

const DashboardPage = () => {
  const userPoints = 2450;
  const nextRewardPoints = 3000;
  const progressPercentage = (userPoints / nextRewardPoints) * 100;

  const recentTransactions = [
    { store: "Café Central", points: "+25", date: "Hoje", type: "earn" },
    { store: "Farmácia São José", points: "+15", date: "Ontem", type: "earn" },
    { store: "Recompensa Resgatada", points: "-500", date: "2 dias", type: "redeem" },
    { store: "Supermercado Bom Preço", points: "+80", date: "3 dias", type: "earn" }
  ];

  const availableRewards = [
    { title: "Desconto 10%", points: 500, store: "Várias lojas", available: true },
    { title: "Café Grátis", points: 200, store: "Café Central", available: true },
    { title: "Frete Grátis", points: 300, store: "Loja Online", available: true },
    { title: "Produto Grátis", points: 1000, store: "Farmácia", available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pontuei
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="flex items-center space-x-4 mb-8">
          <Avatar className="w-16 h-16">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-white text-xl">D</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Olá, Derek!</h1>
            <p className="text-muted-foreground">Bem-vindo de volta ao seu dashboard</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Points Overview */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Seus Pontos</CardTitle>
                    <CardDescription>Acumule pontos e troque por recompensas</CardDescription>
                  </div>
                  <Badge className="bg-gradient-primary text-white">
                    <Trophy className="w-4 h-4 mr-1" />
                    Nível Gold
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {userPoints.toLocaleString()}
                    </div>
                    <p className="text-muted-foreground">pontos disponíveis</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Próxima recompensa em {nextRewardPoints - userPoints} pontos</span>
                      <span className="font-medium">{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Histórico Recente
                </CardTitle>
                <CardDescription>Suas últimas atividades de pontos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20">
                      <div>
                        <p className="font-medium">{transaction.store}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                      <Badge 
                        variant={transaction.type === 'earn' ? 'default' : 'secondary'}
                        className={transaction.type === 'earn' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}
                      >
                        {transaction.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <Card className="border-0 shadow-elegant text-center">
                <CardContent className="p-4">
                  <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Recompensas resgatadas</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-elegant text-center">
                <CardContent className="p-4">
                  <Gift className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">Lojas que você pontuou</p>
                </CardContent>
              </Card>
            </div>

            {/* Available Rewards */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Recompensas Disponíveis
                </CardTitle>
                <CardDescription>Troque seus pontos por prêmios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableRewards.map((reward, index) => (
                    <div key={index} className="p-3 rounded-lg border bg-card/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{reward.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {reward.points} pts
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{reward.store}</p>
                      <Button 
                        size="sm" 
                        className="w-full text-xs"
                        disabled={userPoints < reward.points}
                      >
                        {userPoints >= reward.points ? 'Resgatar' : 'Pontos insuficientes'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

