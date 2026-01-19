import { Scissors, Instagram, Facebook, Phone, MapPin, Clock } from 'lucide-react';

const quickLinks = [
  { href: '#agendar', label: 'Agendar Horário' },
  { href: '#servicos', label: 'Serviços & Preços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#testemunhos', label: 'Testemunhos' },
  { href: '#contacto', label: 'Contacto' },
];

const services = [
  { label: 'Corte Premium', price: '14€' },
  { label: 'Barba Profissional', price: '6€' },
  { label: 'Pacote Premium', price: '25€' },
  { label: 'Corte + Barba', price: '17€' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-gold-gradient">
                  FALCÃO
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">
                  BARBERSHOP
                </span>
              </div>
            </a>
            <p className="font-elegant text-muted-foreground mb-4">
              Onde estilo encontra tradição
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary">★</span>
              ))}
              <span className="text-foreground font-semibold ml-2">4.9/5</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/351925203598"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{service.label}</span>
                  <span className="text-primary font-semibold">{service.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Av. da Carapalha 11<br />Castelo Branco</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+351925203598" className="hover:text-primary transition-colors">
                  925 203 598
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Ter-Sáb: 9h-19h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Falcão BarberShop. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <span className="text-primary font-semibold">AlbiCode</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}