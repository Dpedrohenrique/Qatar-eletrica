import pialLogo from "@assets/1 (2)_1759842907300.png";
import philipsLogo from "@assets/2 (2)_1759842908522.png";
import siemensLogo from "@assets/3 (4)_1759842909622.png";
import schmersalLogo from "@assets/4 (3)_1759842910580.png";
import schneiderLogo from "@assets/5 (2)_1759842911712.png";
import balluffLogo from "@assets/6 (2)_1759842912792.png";
import prysmianLogo from "@assets/7 (2)_1759842914204.png";
import steckLogo from "@assets/8 (2)_1759842916516.png";

export default function Partners() {
  const partners = [
    { name: "PIAL", image: pialLogo },
    { name: "PHILIPS", image: philipsLogo },
    { name: "SIEMENS", image: siemensLogo },
    { name: "SCHMERSAL", image: schmersalLogo },
    { name: "Schneider Electric", image: schneiderLogo },
    { name: "BALLUFF", image: balluffLogo },
    { name: "PRYSMIAN", image: prysmianLogo },
    { name: "STECK", image: steckLogo }
  ];

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-handshake mr-2"></i>
            Principais Marcas
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0202C6' }}>
            Trabalhamos com as Melhores Marcas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcerias sólidas com os principais fabricantes do mercado garantem a qualidade e confiabilidade dos nossos produtos.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center rounded-xl hover:shadow-md transition-shadow overflow-hidden"
                data-testid={`partner-${index}`}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center rounded-xl hover:shadow-md transition-shadow overflow-hidden"
                data-testid={`partner-duplicate-${index}`}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
