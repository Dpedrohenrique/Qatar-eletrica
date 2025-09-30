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
    <section id="home" className="gradient-bg hero-pattern pt-40 pb-48 lg:pt-52 lg:pb-56">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Materiais Elétricos de{" "}
              <span className="text-accent">Qualidade</span>
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
          <div className="lg:text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/20 rounded-xl p-6 text-center">
                  <i className="fas fa-bolt text-4xl text-accent mb-4"></i>
                  <div className="text-2xl font-bold text-white" data-testid="text-stock-count">20K+</div>
                  <div className="text-white/80 text-sm">Itens em Estoque</div>
                </div>
                <div className="bg-white/20 rounded-xl p-6 text-center">
                  <i className="fas fa-shipping-fast text-4xl text-accent mb-4"></i>
                  <div className="text-2xl font-bold text-white" data-testid="text-delivery">Nacional</div>
                  <div className="text-white/80 text-sm">Pronta Entrega</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
