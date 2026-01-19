import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contacto" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Onde Nos <span className="text-gold-gradient">Encontrar</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-border h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.1234567890!2d-7.4994!3d39.8222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ5JzIwLjAiTiA3wrAyOSc1Ny44Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Falcão BarberShop"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Localização</h3>
                <p className="text-muted-foreground">
                  Av. da Carapalha 11<br />
                  6000-320 Castelo Branco
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Telefone / WhatsApp</h3>
                <a
                  href="tel:+351925203598"
                  className="text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
                >
                  925 203 598
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 bg-card border border-border rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Terça a Sábado: 09:00 - 19:00<br />
                  <span className="text-destructive">Domingo e Segunda: Fechado</span>
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  ⚠️ Atendimento apenas com marcação
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+da+Carapalha+11,+Castelo+Branco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 btn-gold rounded-sm w-full"
            >
              <Navigation className="w-5 h-5" />
              Como Chegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}