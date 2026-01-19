import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Scissors, Crown, Sparkles, Palette, Baby, Eye, Clock } from "lucide-react";

// All real services from the barbershop
const allServices = [
  // Premium/Combos
  { id: "premium", name: "Pacote Premium", description: "Corte + Barba + Limpeza Facial (Skincare)", duration: 90, price: 25, icon: Crown, category: "premium" },
  { id: "corte-barba-freestyle", name: "Corte + Barba + Freestyle", description: "Combo completo com desenho", duration: 50, price: 20, icon: Crown, category: "premium" },
  { id: "platinado-corte", name: "Platinado + Corte", description: "Descoloração total + corte", duration: 120, price: 45, icon: Palette, category: "premium" },
  { id: "corte-pintura", name: "Corte + Pintura", description: "Corte com coloração", duration: 120, price: 38, icon: Palette, category: "premium" },
  
  // Cortes
  { id: "corte-simples", name: "Corte Simples", description: "Corte masculino clássico", duration: 40, price: 14, icon: Scissors, category: "cortes" },
  { id: "corte-freestyle", name: "Corte + Freestyle", description: "Corte com desenho personalizado", duration: 45, price: 17, icon: Scissors, category: "cortes" },
  { id: "corte-limpeza", name: "Corte + Limpeza Facial", description: "Corte com skincare", duration: 50, price: 22, icon: Scissors, category: "cortes" },
  { id: "corte-crianca", name: "Corte Criança", description: "Para os pequenos", duration: 40, price: 12, icon: Baby, category: "cortes" },
  { id: "corte-domiciliar", name: "Corte Domiciliar", description: "Atendimento em casa", duration: 60, price: 50, icon: Scissors, category: "cortes" },
  
  // Barba & Combos
  { id: "barba", name: "Barba", description: "Aparo e design profissional", duration: 20, price: 6, icon: Sparkles, category: "barba" },
  { id: "corte-barba", name: "Corte + Barba", description: "Combo mais popular", duration: 45, price: 17, icon: Sparkles, category: "barba" },
  { id: "alinhamento-barba", name: "Alinhamento + Barba", description: "Acabamento perfeito", duration: 30, price: 10, icon: Sparkles, category: "barba" },
  { id: "alinhamento", name: "Alinhamento", description: "Contorno e acabamento", duration: 20, price: 6, icon: Sparkles, category: "barba" },
  
  // Tratamentos
  { id: "limpeza-facial", name: "Limpeza Facial", description: "Skincare profissional", duration: 30, price: 10, icon: Eye, category: "tratamentos" },
  { id: "sobrancelhas", name: "Sobrancelhas", description: "Design masculino", duration: 5, price: 2, icon: Eye, category: "tratamentos" },
  { id: "pintura", name: "Pintura", description: "Coloração profissional", duration: 90, price: 25, icon: Palette, category: "tratamentos" },
  { id: "descoloracao", name: "Descoloração", description: "Platinado/Loiro", duration: 30, price: 12, icon: Palette, category: "tratamentos" },
];

const categories = [
  { id: "all", name: "Todos" },
  { id: "premium", name: "Premium" },
  { id: "cortes", name: "Cortes" },
  { id: "barba", name: "Barba" },
  { id: "tratamentos", name: "Tratamentos" },
];
import haircutImage from '@/assets/haircut-1.jpg';
import beardImage from '@/assets/beard-service.jpg';
import vipImage from '@/assets/vip-service.jpg';

const mainServices = [
  {
    image: haircutImage,
    icon: Scissors,
    title: 'Corte Simples',
    description: 'Corte personalizado com técnicas modernas, consulta de estilo e finalização premium',
    price: '14€',
    duration: '40 min',
    highlight: false,
  },
  {
    image: vipImage,
    icon: Crown,
    title: 'Pacote Premium',
    description: 'Corte + Barba + Limpeza Facial (Skincare). A experiência completa VIP',
    price: '25€',
    duration: '90 min',
    highlight: true,
    badge: 'MAIS POPULAR',
  },
  {
    image: beardImage,
    icon: Scissors,
    title: 'Barba Profissional',
    description: 'Aparo, design e hidratação. Toalha quente + produtos premium',
    price: '6€',
    duration: '20 min',
    highlight: false,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-gold-gradient">Serviços</span>
          </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
            Tratamento VIP para o homem moderno. Qualidade premium em cada detalhe.
          </p>
          <div className="divider-gold mt-6" />
        </motion.div>

         <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-lg overflow-hidden card-hover ${
                service.highlight ? 'ring-2 ring-primary' : 'border border-border'
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {service.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="text-2xl font-display font-bold text-gold-gradient">
                    {service.price}
                  </div>
                </div>

                <a
                  href="#agendar"
                  className={`block text-center py-3 rounded-sm font-display font-semibold uppercase tracking-wider transition-all ${
                    service.highlight
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Agendar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-display tracking-wider text-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`card-premium p-5 hover-lift group relative ${
                service.category === "premium" ? "ring-1 ring-primary/50" : ""
              }`}
            >
              {/* Premium Badge */}
              {service.category === "premium" && (
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-display">
                  PREMIUM
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg tracking-wider text-foreground mb-1 truncate">
                    {service.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      {service.price}€
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {service.duration} min
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#agendar" className="btn-gold inline-flex items-center gap-2">
            <Scissors className="w-5 h-5" />
            AGENDAR SERVIÇO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;