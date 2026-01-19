import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import haircutImage from '@/assets/haircut-1.jpg';
import haircut2Image from '@/assets/haircut-2.jpg';
import beardImage from '@/assets/beard-service.jpg';
import vipImage from '@/assets/vip-service.jpg';
import heroImage from '@/assets/hero-barbershop.jpg';
import toolsImage from '@/assets/barber-tools.jpg';

const galleryImages = [
  { src: haircutImage, alt: 'Corte fade profissional', category: 'Cortes' },
  { src: beardImage, alt: 'Barba profissional', category: 'Barba' },
  { src: vipImage, alt: 'Experiência VIP', category: 'VIP' },
  { src: heroImage, alt: 'Ambiente da barbearia', category: 'Espaço' },
  { src: haircut2Image, alt: 'Degradê moderno', category: 'Cortes' },
  { src: toolsImage, alt: 'Ferramentas premium', category: 'Equipamentos' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Nossos <span className="text-gold-gradient">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada corte é uma obra de arte. Veja o resultado do nosso trabalho.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 || index === 5 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-foreground font-medium">{image.alt}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-outline-gold rounded-sm"
          >
            <Instagram className="w-5 h-5" />
            Ver Mais no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}