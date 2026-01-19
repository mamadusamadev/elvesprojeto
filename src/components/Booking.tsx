import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle, Scissors, Crown, Sparkles, Mail, Lock, UserCircle } from 'lucide-react';

const services = [
  { id: 'corte-simples', name: 'Corte Simples', duration: 40, price: 14, icon: Scissors },
  { id: 'corte-barba', name: 'Corte + Barba', duration: 45, price: 17, icon: Scissors },
  { id: 'pacote-premium', name: 'Pacote Premium', duration: 90, price: 25, icon: Crown },
  { id: 'barba', name: 'Barba', duration: 20, price: 6, icon: Sparkles },
  { id: 'corte-freestyle', name: 'Corte + Freestyle', duration: 45, price: 17, icon: Scissors },
  { id: 'limpeza-facial', name: 'Limpeza Facial', duration: 30, price: 10, icon: Sparkles },
];

const professionals = [
  { id: 'miguel', name: 'Miguel Falcão', role: 'Mestre Barbeiro', avatar: '👨‍🦱' },
  { id: 'andre', name: 'André Santos', role: 'Barbeiro Senior', avatar: '👨' },
  { id: 'any', name: 'Sem preferência', role: 'Qualquer profissional disponível', avatar: '✂️' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

const generateDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    // Skip Sundays (0) and Mondays (1)
    if (date.getDay() !== 0 && date.getDay() !== 1) {
      dates.push(date);
    }
  }
  return dates;
};

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '',
    firstTime: '',
    wantsAccount: false,
    password: '',
    confirmPassword: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const availableDates = generateDates();

  const formatDate = (date: Date) => {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  const validatePassword = () => {
    if (formData.wantsAccount) {
      if (formData.password.length < 6) {
        setPasswordError('A senha deve ter no mínimo 6 caracteres');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('As senhas não coincidem');
        return false;
      }
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = () => {
    if (formData.wantsAccount && !validatePassword()) {
      return;
    }
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
    setStep(5);
  };

  const getSelectedServiceDetails = () => {
    return services.find((s) => s.id === selectedService);
  };

  const getSelectedProfessionalDetails = () => {
    return professionals.find((p) => p.id === selectedProfessional);
  };

  return (
    <section ref={ref} id="agendar" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Agende Seu <span className="text-gold-gradient">Horário</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Marque online em 4 passos simples. Confirmação imediata via WhatsApp.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap"
        >
          {[
            { num: 1, label: 'Serviço' },
            { num: 2, label: 'Profissional' },
            { num: 3, label: 'Data/Hora' },
            { num: 4, label: 'Dados' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= s.num
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground'
                }`}
              >
                {step > s.num ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> : s.num}
              </div>
              <span className="hidden sm:block text-xs md:text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-6 md:p-8"
        >
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-primary" />
                Escolha o Serviço
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <service.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{service.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{service.duration} min</span>
                      <span className="text-lg font-bold text-primary">{service.price}€</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => selectedService && setStep(2)}
                  disabled={!selectedService}
                  className="btn-gold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Professional Selection */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-primary" />
                Escolha o Profissional
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {professionals.map((pro) => (
                  <button
                    key={pro.id}
                    onClick={() => setSelectedProfessional(pro.id)}
                    className={`p-6 rounded-lg border-2 text-center transition-all ${
                      selectedProfessional === pro.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="text-4xl mb-3">{pro.avatar}</div>
                    <div className="font-medium text-foreground">{pro.name}</div>
                    <div className="text-sm text-muted-foreground">{pro.role}</div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline-gold rounded-sm"
                >
                  Voltar
                </button>
                <button
                  onClick={() => selectedProfessional && setStep(3)}
                  disabled={!selectedProfessional}
                  className="btn-gold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Escolha Dia e Hora
              </h3>

              {/* Date Selection */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4">Selecione uma data:</p>
                <div className="flex gap-3 overflow-x-auto pb-4">
                  {availableDates.map((date, index) => {
                    const formatted = formatDate(date);
                    const isSelected = selectedDate?.getTime() === date.getTime();
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 p-3 rounded-lg border-2 text-center transition-all min-w-[80px] ${
                          isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-xs text-muted-foreground">{formatted.day}</div>
                        <div className="text-2xl font-bold text-foreground">{formatted.date}</div>
                        <div className="text-xs text-muted-foreground">{formatted.month}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Selecione um horário:</p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                          selectedTime === time
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary/50 text-foreground'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="btn-outline-gold rounded-sm"
                >
                  Voltar
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(4)}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-gold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Personal Data */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Seus Dados
              </h3>

              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-premium w-full"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-premium w-full"
                    placeholder="912 345 678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-premium w-full"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primeira vez na Falcão?</label>
                  <div className="flex gap-4">
                    {['Sim', 'Não'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setFormData({ ...formData, firstTime: option })}
                        className={`flex-1 py-3 rounded-lg border-2 font-medium transition-all ${
                          formData.firstTime === option
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border hover:border-primary/50 text-muted-foreground'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account Creation Option - Only show for new users */}
                {formData.firstTime === 'Sim' && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-start gap-3 mb-4">
                      <input
                        type="checkbox"
                        id="wantsAccount"
                        checked={formData.wantsAccount}
                        onChange={(e) => setFormData({ ...formData, wantsAccount: e.target.checked })}
                        className="mt-1 w-4 h-4 accent-primary"
                      />
                      <label htmlFor="wantsAccount" className="text-sm">
                        <span className="font-medium">Criar uma conta</span>
                        <p className="text-muted-foreground text-xs mt-1">
                          Crie uma conta para agendar mais rápido, ver histórico e acumular pontos de fidelidade.
                        </p>
                      </label>
                    </div>

                    {formData.wantsAccount && (
                      <div className="space-y-4 pl-7">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Lock className="w-4 h-4 inline mr-1" />
                            Senha *
                          </label>
                          <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="input-premium w-full"
                            placeholder="Mínimo 6 caracteres"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Lock className="w-4 h-4 inline mr-1" />
                            Confirmar Senha *
                          </label>
                          <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="input-premium w-full"
                            placeholder="Repita a senha"
                          />
                        </div>
                        {passwordError && (
                          <p className="text-sm text-destructive">{passwordError}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="btn-outline-gold rounded-sm"
                >
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.phone || !formData.email}
                  className="btn-gold rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar Agendamento
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && isSubmitted && (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gold-gradient mb-4">
                Agendamento Confirmado!
              </h3>
              <div className="bg-secondary/50 rounded-lg p-6 max-w-md mx-auto mb-6">
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Serviço:</span>
                    <span className="font-medium">{getSelectedServiceDetails()?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profissional:</span>
                    <span className="font-medium">{getSelectedProfessionalDetails()?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data:</span>
                    <span className="font-medium">
                      {selectedDate && formatDate(selectedDate).day}, {selectedDate?.getDate()} {formatDate(selectedDate!).month}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hora:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor:</span>
                    <span className="font-bold text-primary">{getSelectedServiceDetails()?.price}€</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Confirmação enviada para o seu email e WhatsApp.<br />
                Chegue 5 minutos antes do horário marcado.
                {formData.wantsAccount && (
                  <>
                    <br /><br />
                    <span className="text-primary">✓ Conta criada com sucesso!</span>
                  </>
                )}
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  setIsSubmitted(false);
                  setSelectedService(null);
                  setSelectedProfessional(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: '', phone: '', email: '', firstTime: '', wantsAccount: false, password: '', confirmPassword: '' });
                }}
                className="btn-outline-gold rounded-sm"
              >
                Fazer Novo Agendamento
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}