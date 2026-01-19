import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsTooltipVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClick = () => {
    setHasInteracted(true);
    setIsTooltipVisible(false);
  };

  const dismissTooltip = () => {
    setIsTooltipVisible(false);
    setHasInteracted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3"
          >
            <div className="relative bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs">
              <button
                onClick={dismissTooltip}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Fechar"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-sm text-foreground">
                👋 Olá! Precisa de ajuda para agendar?
              </p>
              <div className="absolute bottom-0 right-8 translate-y-full">
                <div className="w-3 h-3 bg-card border-r border-b border-border rotate-45 -translate-y-1.5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/351925203598?text=Olá! Gostaria de agendar um horário na Falcão BarberShop"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Agendar via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
    </div>
  );
}