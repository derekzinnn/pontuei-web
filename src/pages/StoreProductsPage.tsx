import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus, Edit, Trash2, Package } from "lucide-react";

const mockProducts = [
  { id: 1, name: "Hambúrguer Clássico", price: 25.90, category: "Lanches", stock: 50 },
  { id: 2, name: "Pizza Margherita", price: 35.00, category: "Pizzas", stock: 30 },
  { id: 3, name: "Refrigerante 350ml", price: 5.50, category: "Bebidas", stock: 100 },
];

export default function StoreProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setNewProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleAddProduct = () => {
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      category: newProduct.category,
      stock: parseInt(newProduct.stock)
    };
    setProducts([...products, product]);
    setNewProduct({ name: "", price: "", category: "", stock: "", description: "" });
    setShowAddForm(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Configurar Produtos</h1>
              <p className="text-muted-foreground">Gerencie o catálogo da sua loja</p>
            </div>
            <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Novo Produto
            </Button>
          </div>

          {/* Formulário Adicionar Produto */}
          {showAddForm && (
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Produto</CardTitle>
                <CardDescription>Preencha as informações do produto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Nome do Produto</Label>
                    <Input
                      value={newProduct.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ex: Hambúrguer Clássico"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Preço (R$)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={newProduct.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      placeholder="25.90"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Categoria</Label>
                    <Input
                      value={newProduct.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      placeholder="Ex: Lanches"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Estoque</Label>
                    <Input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => handleInputChange('stock', e.target.value)}
                      placeholder="50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Descrição</Label>
                  <Input
                    value={newProduct.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descrição do produto"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleAddProduct}>Adicionar Produto</Button>
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Lista de Produtos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Produtos Cadastrados
              </CardTitle>
              <CardDescription>Total: {products.length} produtos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.category} • Estoque: {product.stock} unidades
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-lg">R$ {product.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
    </div>
  );
}