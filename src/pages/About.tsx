import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Award, Target, Users, Heart, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import barberPortrait from '@/assets/falcao.png';
import heroImage from '@/assets/hero-barbershop.jpg';
import barberTools from '@/assets/barber-tools.jpg';

const values = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Não aceitamos menos que perfeito. Cada detalhe importa.',
  },
  {
    icon: Clock,
    title: 'Tradição',
    description: 'Respeitamos a arte clássica da barbearia vintage.',
  },
  {
    icon: Target,
    title: 'Inovação',
    description: 'Sempre atualizados com as últimas tendências e técnicas.',
  },
  {
    icon: Users,
    title: 'Profissionalismo',
    description: 'Pontualidade e comprometimento em cada atendimento.',
  },
  {
    icon: Heart,
    title: 'Relacionamento',
    description: 'Cada cliente é único e especial para nós.',
  },
  {
    icon: Scissors,
    title: 'Qualidade',
    description: 'Usamos apenas produtos premium importados.',
  },
];

const features = [
  'Ar condicionado',
  'WiFi grátis',
  'Música ambiente',
  'TV/Entretenimento',
  'Bebidas cortesia',
  'Estacionamento próximo',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4"
            >
              Sobre <span className="text-gold-gradient">Nós</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl"
            >
              Onde Estilo Encontra Tradição
            </motion.p>
          </div>
        </section>

        {/* History Section */}
        <section ref={ref} className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                 BEM-VINDO À  <span className="text-gold-gradient">FALCÃO BARBERSHOP</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Somos mais que uma barbearia - somos um refúgio masculino e feminino onde tradição e modernidade se encontram.
                  </p>
                  <p>
                    Fundada por Elves Falcão, a Falcão nasceu da paixão por 
                    transformar o simples ato de cortar cabelo em uma 
                    experiência memorável.
                  </p>
                  <p>
                    Aqui, cada detalhe importa. Desde a consulta personalizada 
                    até o acabamento final, trabalhamos com precisão cirúrgica 
                    para garantir que você saia "na régua" - exatamente como 
                    nossos mais de 1000 clientes satisfeitos atestam.
                  </p>
                  <p>
                    Com 4.9 estrelas e avaliações que falam de "tratamento VIP" 
                    e "cortes diferenciados", nos orgulhamos de ter criado não 
                    apenas uma barbearia, mas uma comunidade de homens que 
                    valorizam qualidade, estilo e profissionalismo.
                  </p>
                  <p>
                      Usamos apenas produtos premium importados, técnicas 
                      atualizadas constantemente, e mantemos o compromisso de 
                      fazer cada cliente se sentir único.
                  </p>
                  <p>
                    Seja para um corte executivo, um degradê moderno, ou 
                    tratamento completo de barba - a Falcão BarberShop é 
                    seu destino para excelência.
                  </p>
                  <p>
                    Agende seu horário e descubra por que "não há quem corta 
                    aqui e não se torna cliente".
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden border-2 border-primary/20">
                  <img
                    src={barberTools}
                    alt="Interior da Falcão BarberShop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Barber Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
                    <img
                      src={barberPortrait}
                      alt="Mestre Barbeiro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                  O <span className="text-gold-gradient">Barbeiro</span>
                </h2>
                <p className="text-primary font-semibold mb-4">Mestre Barbeiro | Fundador</p>
                <div className="flex gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-xs text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground">Clientes Satisfeitos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4.9★</div>
                    <div className="text-xs text-muted-foreground">Avaliação Média</div>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Com mais de 7 anos de experiência no ramo, o fundador da Falcão BarberShop 
                    dedicou sua carreira à arte da barbearia, aperfeiçoando técnicas tradicionais 
                    e modernas.
                  </p>
                  <p>
                    Especialista em degradês, barbas e cortes clássicos, combina precisão técnica 
                    com atenção personalizada a cada cliente.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    "Minha missão é fazer cada homem sair daqui se sentindo mais confiante e na régua."
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nossos <span className="text-gold-gradient">Valores</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam cada atendimento e fazem da Falcão BarberShop referência em Castelo Branco.
              </p>
              <div className="section-divider mt-6" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Section */}
        <section className="py-20 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                O <span className="text-gold-gradient">Espaço</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Um ambiente pensado para proporcionar conforto e uma experiência premium.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-video rounded-lg overflow-hidden border-2 border-primary/20"
              >
                <img
                  src={heroImage}
                  alt="Espaço da Falcão BarberShop"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-display font-bold mb-6">Diferenciais do Espaço</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="/#agendar" className="btn-gold rounded-sm">
                    Agendar Visita
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
