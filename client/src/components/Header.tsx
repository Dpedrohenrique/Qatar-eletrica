import { useState, useEffect } from "react";
import qatarLogo from "@assets/qatar_logo_1758735886400.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height || 112;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-transparent backdrop-blur-md' : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img 
                src={qatarLogo}
                alt="Qatar Elétrica" 
                className="h-16 w-auto rounded-lg"
                data-testid="img-logo"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-secondary transition-colors font-medium"
              data-testid="nav-home"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-secondary transition-colors font-medium"
              data-testid="nav-about"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-secondary transition-colors font-medium"
              data-testid="nav-products"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className="text-foreground hover:text-secondary transition-colors font-medium"
              data-testid="nav-partners"
            >
              Parceiros
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-secondary transition-colors font-medium"
              data-testid="nav-contact"
            >
              Contato
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md hover:bg-secondary/90 transition-colors font-medium"
              data-testid="header-quote"
            >
              <i className="fas fa-calculator mr-2"></i>
              Solicite um orçamento
            </button>
          </div>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
            data-testid="mobile-menu-toggle"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => {
                  scrollToSection('home');
                  setMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-secondary transition-colors text-left"
                data-testid="nav-home"
              >
                Início
              </button>
              <button
                onClick={() => {
                  scrollToSection('about');
                  setMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-secondary transition-colors text-left"
                data-testid="nav-about"
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  scrollToSection('products');
                  setMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-secondary transition-colors text-left"
                data-testid="nav-products"
              >
                Produtos
              </button>
              <button
                onClick={() => {
                  scrollToSection('partners');
                  setMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-secondary transition-colors text-left"
                data-testid="nav-partners"
              >
                Parceiros
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-secondary transition-colors text-left"
                data-testid="nav-contact"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
