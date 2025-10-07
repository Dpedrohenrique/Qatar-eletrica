import bannerImage from "@assets/Banner site_1759841791449.png";

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
          className="w-full h-auto block"
        />
      </div>
      <div className="absolute bottom-16 left-0 right-0">
        <div className="pl-10 sm:pl-16 md:pl-24 lg:pl-28">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center flex items-center justify-center gap-2"
              data-testid="button-products"
            >
              <i className="fas fa-box"></i>
              Ver Produtos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center flex items-center justify-center gap-2"
              data-testid="button-contact"
            >
              <i className="fas fa-phone"></i>
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
