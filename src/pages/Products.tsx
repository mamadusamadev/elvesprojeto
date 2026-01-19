import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingBag, Star, Info, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import productsHero from '@/assets/products-hero.jpg';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  rating: number;
  bestseller?: boolean;
}

const products: Product[] = [
  {
    id: 'pomada-matte',
    name: 'Pomada Matte Premium',
    category: 'Styling',
    price: 18,
    description: 'Acabamento matte natural com fixação forte. Perfeita para penteados clássicos e modernos.',
    details: ['Fixação forte', 'Acabamento matte', 'Fácil lavagem', 'Sem resíduos', '100ml'],
    image: productsHero,
    rating: 4.9,
    bestseller: true,
  },
  {
    id: 'pomada-brilho',
    name: 'Pomada Brilho Intenso',
    category: 'Styling',
    price: 18,
    description: 'Acabamento brilhante clássico estilo vintage. Ideal para looks retrô e elegantes.',
    details: ['Fixação média', 'Alto brilho', 'Estilo clássico', 'Longa duração', '100ml'],
    image: productsHero,
    rating: 4.8,
  },
  {
    id: 'cera-textura',
    name: 'Cera Texturizadora',
    category: 'Styling',
    price: 15,
    description: 'Cria textura e movimento natural. Perfeita para looks descontraídos e modernos.',
    details: ['Fixação leve', 'Textura natural', 'Flexível', 'Reformulável', '85ml'],
    image: productsHero,
    rating: 4.7,
  },
  {
    id: 'oleo-barba-classic',
    name: 'Óleo de Barba Classic',
    category: 'Barba',
    price: 22,
    description: 'Óleo premium com blend de óleos naturais. Hidrata, amacia e dá brilho saudável.',
    details: ['Óleo de argan', 'Óleo de jojoba', 'Vitamina E', 'Fragrância amadeirada', '30ml'],
    image: productsHero,
    rating: 4.9,
    bestseller: true,
  },
  {
    id: 'oleo-barba-fresh',
    name: 'Óleo de Barba Fresh',
    category: 'Barba',
    price: 22,
    description: 'Fórmula refrescante com mentol. Sensação revigorante e barba impecável.',
    details: ['Óleo de coco', 'Mentol', 'Aloe vera', 'Fragrância cítrica', '30ml'],
    image: productsHero,
    rating: 4.8,
  },
  {
    id: 'balsamo-barba',
    name: 'Bálsamo Hidratante',
    category: 'Barba',
    price: 19,
    description: 'Hidratação profunda e controle de frizz. Deixa a barba macia e disciplinada.',
    details: ['Manteiga de karité', 'Cera de abelha', 'Vitamina E', 'Fragrância suave', '60ml'],
    image: productsHero,
    rating: 4.7,
  },
  {
    id: 'shampoo-barba',
    name: 'Shampoo para Barba',
    category: 'Limpeza',
    price: 16,
    description: 'Limpeza suave sem ressecar. Fórmula especial para pelos faciais.',
    details: ['pH balanceado', 'Sem sulfatos', 'Hidratante', 'Fragrância masculina', '200ml'],
    image: productsHero,
    rating: 4.6,
  },
  {
    id: 'shampoo-cabelo',
    name: 'Shampoo Premium Cabelo',
    category: 'Limpeza',
    price: 18,
    description: 'Limpeza profunda e fortalecimento. Para cabelos saudáveis e com volume.',
    details: ['Anti-queda', 'Mentol', 'Biotina', 'Uso diário', '250ml'],
    image: productsHero,
    rating: 4.8,
  },
  {
    id: 'aftershave',
    name: 'After Shave Lotion',
    category: 'Cuidados',
    price: 14,
    description: 'Acalma e hidrata após o barbear. Prevenção de irritações e pelos encravados.',
    details: ['Aloe vera', 'Hamamelis', 'Sem álcool', 'Refrescante', '100ml'],
    image: productsHero,
    rating: 4.7,
  },
  {
    id: 'kit-barba-completo',
    name: 'Kit Barba Completo',
    category: 'Kits',
    price: 55,
    description: 'Tudo que você precisa para uma barba perfeita. Economia de 15€!',
    details: ['Óleo de barba', 'Bálsamo', 'Shampoo barba', 'Pente de madeira', 'Necessaire'],
    image: productsHero,
    rating: 5.0,
    bestseller: true,
  },
  {
    id: 'kit-styling',
    name: 'Kit Styling Premium',
    category: 'Kits',
    price: 45,
    description: 'Combinação perfeita para diferentes estilos. Economia de 10€!',
    details: ['Pomada matte', 'Pomada brilho', 'Pente profissional', 'Bag exclusiva'],
    image: productsHero,
    rating: 4.9,
  },
  {
    id: 'kit-iniciante',
    name: 'Kit Iniciante',
    category: 'Kits',
    price: 35,
    description: 'Ideal para quem está começando. Produtos essenciais com qualidade premium.',
    details: ['Pomada matte', 'Óleo de barba', 'Shampoo cabelo', 'Guia de uso'],
    image: productsHero,
    rating: 4.8,
  },
];

const categories = ['Todos', 'Styling', 'Barba', 'Limpeza', 'Cuidados', 'Kits'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de encomendar o produto: ${product.name} (${product.price}€)`
    );
    window.open(`https://wa.me/351925203598?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${productsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            >
              Produtos <span className="text-gold-gradient">Premium</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl"
            >
              Use em casa o que usamos na barbearia
            </motion.p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/50 transition-all"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.bestseller && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        BESTSELLER
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                      <span className="text-xs text-muted-foreground ml-auto">{product.category}</span>
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}€</span>
                      <button
                        onClick={() => handleWhatsAppOrder(product)}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Encomendar
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-card border border-border rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">{selectedProduct.category}</span>
                  {selectedProduct.bestseller && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">BESTSELLER</span>
                  )}
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm">{selectedProduct.rating}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Detalhes:</h4>
                  <ul className="space-y-1">
                    {selectedProduct.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-3xl font-bold text-primary">{selectedProduct.price}€</span>
                  <button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="flex items-center gap-2 btn-gold rounded-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Encomendar via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Info Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-bold mb-4">Como Comprar?</h3>
              <p className="text-muted-foreground mb-6">
                Todos os produtos podem ser adquiridos diretamente na barbearia ou encomendados via WhatsApp. 
                Entrega disponível em Castelo Branco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/351925203598?text=Olá! Gostaria de saber mais sobre os produtos disponíveis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold rounded-sm inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
                <a href="/#agendar" className="btn-outline-gold rounded-sm">
                  Visitar a Barbearia
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
