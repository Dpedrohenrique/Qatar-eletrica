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
    <section id="home" className="bg-[#162741] hero-pattern pt-40 pb-48 lg:pt-52 lg:pb-56">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Materiais Elétricos de{" "}
              <span className="text-white">Qualidade</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Distribuidora especializada com mais de 20 mil itens em estoque para sua obra, manutenção ou reparo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-center"
                data-testid="button-products"
              >
                <i className="fas fa-boxes mr-2"></i>
                Ver Produtos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center"
                data-testid="button-contact"
              >
                <i className="fas fa-phone mr-2"></i>
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
