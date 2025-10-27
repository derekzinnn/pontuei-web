import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Upload, Palette, Image, Save } from "lucide-react";

export default function StoreCustomizePage() {
  const [customization, setCustomization] = useState({
    banner: "",
    profilePhoto: "",
    primaryColor: "#8B5CF6",
    secondaryColor: "#EC4899",
    storeName: "",
    storeDescription: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomization(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving customization:', customization);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Personalizar Página</h1>
            <p className="text-muted-foreground">Configure a aparência da sua loja</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Imagens da Loja
                </CardTitle>
                <CardDescription>Adicione banner e foto de perfil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Banner da Loja</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload do banner</p>
                    <p className="text-xs text-muted-foreground">Recomendado: 1200x400px</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Foto de Perfil</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload da foto</p>
                    <p className="text-xs text-muted-foreground">Recomendado: 300x300px</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Cores do Tema
                </CardTitle>
                <CardDescription>Personalize as cores da sua loja</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Cor Primária</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customization.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      className="w-16 h-10 p-1"
                    />
                    <Input
                      value={customization.primaryColor}
                      onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                      placeholder="#8B5CF6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Cor Secundária</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customization.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      className="w-16 h-10 p-1"
                    />
                    <Input
                      value={customization.secondaryColor}
                      onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                      placeholder="#EC4899"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg border" style={{ backgroundColor: customization.primaryColor + '20' }}>
                  <p className="text-sm font-medium">Prévia das Cores</p>
                  <div className="flex gap-2 mt-2">
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: customization.primaryColor }}
                    />
                    <div 
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: customization.secondaryColor }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Informações da Loja</CardTitle>
              <CardDescription>Atualize as informações básicas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nome da Loja</Label>
                  <Input
                    value={customization.storeName}
                    onChange={(e) => handleInputChange('storeName', e.target.value)}
                    placeholder="Nome da sua loja"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Descrição</Label>
                  <Input
                    value={customization.storeDescription}
                    onChange={(e) => handleInputChange('storeDescription', e.target.value)}
                    placeholder="Descrição da sua loja"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              Salvar Alterações
            </Button>
          </div>
    </div>
  );
}