import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimation";

function WhatsAppButton() {
  const phoneNumber = "551126517674"; // Brazil country code + phone number (correct E.164 format)
  const message = "Olá! Gostaria de saber mais sobre os materiais elétricos da Qatar Elétrica.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      data-testid="whatsapp-button"
      title="Fale conosco no WhatsApp"
      aria-label="Fale conosco no WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Solicitação de Orçamento - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Cidade: ${formData.city}\n` +
      `Estado: ${formData.state}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    const mailtoLink = `mailto:vendas@qatareletrica.com.br?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Solicitação Enviada",
      description: "Seu cliente de e-mail foi aberto com os dados preenchidos.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', city: '', state: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#162741]">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Fale com Nossa Equipe
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades em<br />
            materiais elétricos e automação industrial.
          </p>
          </div>
        
          <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-building text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-0.5">Razão Social</h4>
                  <p className="text-muted-foreground" data-testid="text-company-name">QATAR COMÉRCIO DE MATERIAIS ELÉTRICOS LTDA</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-cnpj">CNPJ: 18.758.925/0001-61</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-0.5">Endereço</h4>
                  <p className="text-muted-foreground" data-testid="text-address">Rua Anjo Custódio, 58 – Vila Formosa</p>
                  <p className="text-muted-foreground" data-testid="text-city">São Paulo – SP, CEP: 03358-040</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-0.5">Telefone</h4>
                  <p className="text-muted-foreground" data-testid="text-phone">(11) 2651-7674</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-0.5">E-mail</h4>
                  <p className="text-muted-foreground" data-testid="text-email">vendas@qatareletrica.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/551126517674?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20materiais%20el%C3%A9tricos%20da%20Qatar%20El%C3%A9trica."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors text-center"
                  data-testid="button-whatsapp"
                >
                  <i className="fas fa-mobile-alt mr-2" style={{ color: '#0202C6' }}></i>
                  Chamar no WhatsApp
                </a>
                <a
                  href="mailto:vendas@qatareletrica.com.br"
                  className="flex-1 border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors text-center"
                  data-testid="button-email"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Enviar E-mail
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-[#162741] rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  data-testid="input-phone"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2 font-medium">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Sua cidade"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    data-testid="input-city"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Estado</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="SP"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    data-testid="input-state"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Mensagem</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva suas necessidades em materiais elétricos..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                data-testid="button-submit"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Solicitar Orçamento
              </button>
            </form>
          </div>
          </div>
        </ScrollAnimation>
      </div>
      <WhatsAppButton />
    </section>
  );
}
