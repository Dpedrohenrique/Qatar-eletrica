import pialLogo from "@assets/1_1759839878463.png";
import philipsLogo from "@assets/2_1759839880952.png";
import siemensLogo from "@assets/3_1759839882963.png";
import schmersalLogo from "@assets/4_1759839884699.png";
import schneiderLogo from "@assets/5_1759839886216.png";
import balluffLogo from "@assets/6_1759839888083.png";
import deusermanLogo from "@assets/7_1759839898488.png";
import steckLogo from "@assets/8_1759839906395.png";
import sickLogo from "@assets/9_1759839908111.png";
import ifmLogo from "@assets/10_1759839909942.png";

export default function Partners() {
  const partners = [
    { name: "PIAL", image: pialLogo },
    { name: "PHILIPS", image: philipsLogo },
    { name: "SIEMENS", image: siemensLogo },
    { name: "SCHMERSAL", image: schmersalLogo },
    { name: "Schneider Electric", image: schneiderLogo },
    { name: "BALLUFF", image: balluffLogo },
    { name: "DEUSERMAN", image: deusermanLogo },
    { name: "STECK", image: steckLogo },
    { name: "SICK", image: sickLogo },
    { name: "ifm", image: ifmLogo }
  ];

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-handshake mr-2"></i>
            Principais Marcas
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
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
                className="flex-shrink-0 w-48 mx-4 flex items-center justify-center p-6 bg-muted rounded-xl hover:shadow-md transition-shadow"
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
                className="flex-shrink-0 w-48 mx-4 flex items-center justify-center p-6 bg-muted rounded-xl hover:shadow-md transition-shadow"
                data-testid={`partner-duplicate-${index}`}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="h-12 w-auto object-contain ml-[10px] mr-[10px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
