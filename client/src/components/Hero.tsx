import { Package, Phone } from "lucide-react";
import bannerImage from "@assets/Banner site (2)_1759800507561.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative">
      <div className="w-full">
        <img 
          src={bannerImage} 
          alt="Materiais Elétricos de Qualidade" 
          className="w-full h-[600px] object-cover block"
        />
      </div>
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center flex items-center justify-center gap-2"
              data-testid="button-products"
            >
              <Package className="w-5 h-5" />
              Ver Produtos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center flex items-center justify-center gap-2"
              data-testid="button-contact"
            >
              <Phone className="w-5 h-5" />
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
