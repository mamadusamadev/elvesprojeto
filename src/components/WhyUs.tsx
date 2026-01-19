import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Scissors, Target, Star } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Tratamento VIP',
    description: 'Atendimento personalizado e atenção aos detalhes que fazem você se sentir único',
  },
  {
    icon: Scissors,
    title: 'Cortes Diferenciados',
    description: 'Técnicas modernas + tradição clássica para resultados impecáveis',
  },
  {
    icon: Target,
    title: 'Precisão na Régua',
    description: 'Cada linha, cada detalhe, cada ângulo perfeito como você merece',
  },
  {
    icon: Star,
    title: '4.9 Estrelas',
    description: 'Quase 40 avaliações 5 estrelas falam por si!',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Por Que <span className="text-gold-gradient">Falcão BarberShop</span>?
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-lg card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}