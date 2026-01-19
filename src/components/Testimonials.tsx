import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Filipe Ferreira',
    text: 'Corte sensacional, tratamento VIP, ótimo profissional ❤️🫶 10 ESTRELAS',
    rating: 5,
  },
  {
    name: 'João Mendes',
    text: 'O lugar certo para quem pretende ficar bonito e na régua, excelente serviço!!',
    rating: 5,
  },
  {
    name: 'Pedro Santos',
    text: 'Não há quem corta cabelo aqui e não se torna cliente... Ambiente incrível e profissionalismo de outro nível.',
    rating: 5,
  },
  {
    name: 'Marco Silva',
    text: 'Melhor barbearia de Castelo Branco! Atendimento impecável e resultado perfeito.',
    rating: 5,
  },
  {
    name: 'Ricardo Costa',
    text: 'Profissionalismo e qualidade. Sempre saio satisfeito. Recomendo a todos!',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} id="testemunhos" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            O Que Dizem <span className="text-gold-gradient">Nossos Clientes</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            {/* Content */}
            <div className="relative text-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl font-elegant text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Name */}
                <p className="text-lg font-display font-bold text-gold-gradient">
                  {testimonials[currentIndex].name}
                </p>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Testemunho anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Próximo testemunho"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}