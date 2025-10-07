import { Package, Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="bg-[#162741] hero-pattern min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Materiais Elétricos de{" "}
            <span className="text-[#0DCAF0]">Qualidade</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8">
            Distribuidora especializada com mais de 20 mil itens em estoque para sua obra, manutenção ou reparo.
          </p>
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
        </ScrollAnimation>
      </div>
    </section>
  );
}
