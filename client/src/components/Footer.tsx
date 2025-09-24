export default function Footer() {
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
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="@assets/Qatar png_1758732165959.png" 
                alt="Qatar Elétrica" 
                className="h-8 w-auto filter brightness-0 invert"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Distribuidora especializada em materiais elétricos e automação industrial.
            </p>
            <div className="text-sm text-primary-foreground/60" data-testid="text-footer-cnpj">
              CNPJ: 18.758.925/0001-61
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-products-fios"
                >
                  Fios e Cabos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-products-iluminacao"
                >
                  Iluminação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-products-infraestrutura"
                >
                  Infraestrutura
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-products-automacao"
                >
                  Automação
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-about"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partners')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-partners"
                >
                  Parceiros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-white transition-colors text-left"
                  data-testid="footer-nav-contact"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center" data-testid="footer-phone">
                <i className="fas fa-phone w-4 mr-2"></i>
                <span>(11) 2651-7674</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <i className="fas fa-envelope w-4 mr-2"></i>
                <span>vendas@qatareletrica.com.br</span>
              </div>
              <div className="flex items-start" data-testid="footer-address">
                <i className="fas fa-map-marker-alt w-4 mr-2 mt-1"></i>
                <span>Rua Anjo Custódio, 58<br />Vila Formosa - São Paulo/SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Qatar Elétrica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
