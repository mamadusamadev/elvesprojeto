import { motion } from 'framer-motion';
import { Star, ChevronDown, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-barbershop.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Falcão BarberShop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Barber Pole Decoration */}
      <div className="absolute left-4 md:left-10 top-1/4 hidden md:block">
        <div className="barber-pole w-4 h-40 rounded-full opacity-60" />
      </div>
      <div className="absolute right-4 md:right-10 top-1/3 hidden md:block">
        <div className="barber-pole w-4 h-40 rounded-full opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Castelo Branco</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4">
            <span className="text-gold-gradient text-shadow-gold">FALCÃO</span>
            <br />
            <span className="text-foreground">BARBERSHOP</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-elegant text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-2"
          >
            Onde Estilo Encontra Tradição
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="section-divider my-8"
          />

          {/* Sub-features */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-muted-foreground text-sm md:text-base tracking-wider mb-8"
          >
            TRATAMENTO VIP &nbsp;•&nbsp; CORTES PREMIUM &nbsp;•&nbsp; EXPERIÊNCIA ÚNICA
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-primary fill-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">- 37 Avaliações</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#agendar" className="btn-gold rounded-sm text-lg">
              Agendar Horário
            </a>
            <a href="#galeria" className="btn-outline-gold rounded-sm text-lg">
              Ver Trabalhos
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest">DESCUBRA MAIS</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}