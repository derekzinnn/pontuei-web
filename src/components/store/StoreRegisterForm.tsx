import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User} from "lucide-react";
import { Link } from "react-router-dom";

export function StoreRegisterForm() {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState({
    // Dados pessoais
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Dados da empresa
    cnpj: "",
    companyName: "",
    tradeName: "",
    // Localização da loja
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: "",
    // Informações do estabelecimento
    phone: "",
    category: "",
    storeName: "",
    storeDescription: "",
    // Configurações finais
    workingHours: "",
    website: "",
    socialMedia: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log('Complete registration:', formData);
  };

  const totalSteps = 4;
  const stepTitles = [
    "Dados da Empresa", 
    "Localização da Loja",
    "Informações do Estabelecimento",
    "Configurações Finais"
  ];

  return (
    <div className="max-w-2xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cadastro <span className="text-primary">Completo</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Passo {currentStep - 1} de {totalSteps}: {stepTitles[currentStep - 2]}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  {currentStep === 2 && <><User className="w-6 h-6 text-primary" /> Dados da Empresa</>}
                  {currentStep === 3 && <><User className="w-6 h-6 text-primary" /> Localização da Loja</>}
                  {currentStep === 4 && <><User className="w-6 h-6 text-primary" /> Informações do Estabelecimento</>}
                  {currentStep === 5 && <><User className="w-6 h-6 text-primary" /> Configurações Finais</>}
                </CardTitle>
                <CardDescription>
                  {currentStep === 2 && "Dados da sua empresa"}
                  {currentStep === 3 && "Endereço e localização da sua loja"}
                  {currentStep === 4 && "Informações do seu estabelecimento"}
                  {currentStep === 5 && "Configurações finais da loja"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === 2 && (
                  // Passo 2: Dados da Empresa
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input
                        id="cnpj"
                        placeholder="00.000.000/0000-00"
                        value={formData.cnpj}
                        onChange={(e) => handleInputChange('cnpj', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName">Razão Social</Label>
                      <Input
                        id="companyName"
                        placeholder="Nome da empresa conforme CNPJ"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tradeName">Nome Fantasia</Label>
                      <Input
                        id="tradeName"
                        placeholder="Nome comercial da loja"
                        value={formData.tradeName}
                        onChange={(e) => handleInputChange('tradeName', e.target.value)}
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline"
                        className="flex-1 text-lg py-6"
                        onClick={prevStep}
                      >
                        Voltar
                      </Button>
                      <Button 
                        className="flex-1 text-lg py-6 group"
                        onClick={nextStep}
                      >
                        Próximo Passo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  // Passo 3: Localização da Loja
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input
                        id="zipCode"
                        placeholder="00000-000"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Input
                          id="address"
                          placeholder="Nome da rua"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="number">Número</Label>
                        <Input
                          id="number"
                          placeholder="123"
                          value={formData.number}
                          onChange={(e) => handleInputChange('number', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="complement">Complemento</Label>
                        <Input
                          id="complement"
                          placeholder="Apto, sala, loja (opcional)"
                          value={formData.complement}
                          onChange={(e) => handleInputChange('complement', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Bairro</Label>
                        <Input
                          id="neighborhood"
                          placeholder="Nome do bairro"
                          value={formData.neighborhood}
                          onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                          id="city"
                          placeholder="Nome da cidade"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input
                          id="state"
                          placeholder="UF"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline"
                        className="flex-1 text-lg py-6"
                        onClick={prevStep}
                      >
                        Voltar
                      </Button>
                      <Button 
                        className="flex-1 text-lg py-6 group"
                        onClick={nextStep}
                      >
                        Próximo Passo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  // Passo 4: Informações do Estabelecimento
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="storeName">Nome do Estabelecimento</Label>
                      <Input
                        id="storeName"
                        placeholder="Como sua loja será conhecida"
                        value={formData.storeName}
                        onChange={(e) => handleInputChange('storeName', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storeDescription">Descrição da Loja</Label>
                      <Input
                        id="storeDescription"
                        placeholder="Descreva o que sua loja oferece"
                        value={formData.storeDescription}
                        onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Categoria</Label>
                        <select
                          id="category"
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                        >
                          <option value="">Selecione uma categoria</option>
                          <option value="alimentacao">Alimentação</option>
                          <option value="moda">Moda e Vestuário</option>
                          <option value="beleza">Beleza e Estética</option>
                          <option value="farmacia">Farmácia</option>
                          <option value="eletronicos">Eletrônicos</option>
                          <option value="casa">Casa e Decoração</option>
                          <option value="servicos">Serviços</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline"
                        className="flex-1 text-lg py-6"
                        onClick={prevStep}
                      >
                        Voltar
                      </Button>
                      <Button 
                        className="flex-1 text-lg py-6 group"
                        onClick={nextStep}
                      >
                        Próximo Passo
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </>
                )}

                {currentStep === 5 && (
                  // Passo 5: Configurações Finais
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="workingHours">Horário de Funcionamento</Label>
                      <Input
                        id="workingHours"
                        placeholder="Ex: Segunda a Sexta: 8h às 18h"
                        value={formData.workingHours}
                        onChange={(e) => handleInputChange('workingHours', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Site (opcional)</Label>
                      <Input
                        id="website"
                        placeholder="https://www.sualoja.com.br"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="socialMedia">Redes Sociais (opcional)</Label>
                      <Input
                        id="socialMedia"
                        placeholder="@sualoja no Instagram"
                        value={formData.socialMedia}
                        onChange={(e) => handleInputChange('socialMedia', e.target.value)}
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline"
                        className="flex-1 text-lg py-6"
                        onClick={prevStep}
                      >
                        Voltar
                      </Button>
                      <Link to="/store-dashboard" className="flex-1">
                        <Button 
                          className="w-full text-lg py-6 group"
                          onClick={handleSubmit}
                        >
                          Finalizar Cadastro
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </>
                )}


              </CardContent>
            </Card>
          </motion.div>
    </div>
  );
}