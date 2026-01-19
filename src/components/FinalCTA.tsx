import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-barbershop.jpg';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Pronto Para a <span className="text-gold-gradient">Transformação</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Junte-se aos 1000+ homens que confiam na Falcão BarberShop para ficarem na régua
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#agendar" className="btn-gold rounded-sm text-lg">
              Agendar Meu Horário
            </a>
            <a
              href="https://wa.me/351925203598?text=Olá! Gostaria de agendar um horário"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold rounded-sm text-lg"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-8">
            925 203 598 | WhatsApp disponível
          </p>
        </motion.div>
      </div>
    </section>
  );
}