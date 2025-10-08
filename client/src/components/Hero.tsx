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
      <div className="w-full h-[300px] sm:h-[400px] md:h-auto bg-[#162741]">
        <img 
          src={bannerImage} 
          alt="Materiais Elétricos de Qualidade" 
          className="w-full h-full object-contain object-center md:object-cover md:h-auto"
        />
      </div>
      <div className="absolute bottom-6 sm:bottom-12 md:bottom-16 left-0 right-0">
        <div className="pl-4 pr-0 sm:px-8 md:pl-24 lg:pl-28">
          <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 max-w-[280px] sm:max-w-none">
            <button
              onClick={() => scrollToSection('products')}
              className="border-2 border-white text-white px-2.5 py-1 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-base w-full sm:w-auto"
              data-testid="button-products"
            >
              <i className="fas fa-box text-[9px] sm:text-base"></i>
              Ver Produtos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-2.5 py-1 sm:px-8 sm:py-4 rounded-md sm:rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-base w-full sm:w-auto"
              data-testid="button-contact"
            >
              <i className="fas fa-phone text-[9px] sm:text-base"></i>
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
