import wiresImage from "@assets/1 (2)_1759802009752.png";
import lightingImage from "@assets/image_1759802084544.png";
import infrastructureImage from "@assets/image_1759835699824.png";
import outletsImage from "@assets/stock_images/electrical_outlets_s_10e38bb9.jpg";
import motorsImage from "@assets/image_1759835827184.png";
import sensorsImage from "@assets/image_1759835928129.png";
import toolsImage from "@assets/image_1759836017588.png";
import automationImage from "@assets/image_1759836139725.png";
import safetyImage from "@assets/image_1759836257564.png";

import ScrollAnimation from "./ScrollAnimation";

export default function Products() {
  const products = [
    {
      image: wiresImage,
      title: "Fios e Cabos",
      description: "Fios e cabos elétricos de alta qualidade para instalações residenciais, comerciais e industriais.",
      objectFit: "cover"
    },
    {
      image: lightingImage,
      title: "Iluminação",
      description: "Soluções completas em iluminação LED, lâmpadas e luminárias para todos os ambientes.",
      objectFit: "contain"
    },
    {
      image: infrastructureImage,
      title: "Infraestrutura",
      description: "Componentes para infraestrutura elétrica, quadros de distribuição e painéis de controle.",
      objectFit: "contain"
    },
    {
      image: outletsImage,
      title: "Tomadas e Interruptores",
      description: "Tomadas, interruptores e componentes para instalações elétricas residenciais e comerciais.",
      objectFit: "cover"
    },
    {
      image: motorsImage,
      title: "Motores",
      description: "Motores elétricos industriais e comerciais para diversas aplicações e potências.",
      objectFit: "contain"
    },
    {
      image: sensorsImage,
      title: "Sensores",
      description: "Sensores industriais para automação, controle de processos e monitoramento.",
      objectFit: "contain"
    },
    {
      image: toolsImage,
      title: "Ferramentas",
      description: "Ferramentas profissionais e equipamentos para instalação e manutenção elétrica.",
      objectFit: "contain"
    },
    {
      image: automationImage,
      title: "Automação",
      description: "Sistemas de automação industrial, CLPs, IHMs e soluções para controle de processos.",
      objectFit: "contain"
    },
    {
      image: safetyImage,
      title: "EPIS",
      description: "Equipamentos de proteção individual para segurança em trabalhos com eletricidade.",
      objectFit: "contain"
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-boxes mr-2"></i>
            Nossos Produtos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Linha Completa de Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de materiais elétricos e soluções de automação industrial para atender todas as suas necessidades.
          </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm card-hover p-6 border border-border"
              data-testid={`card-product-${index}`}
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-[#162741]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="192"
                  className={`w-full h-full object-${product.objectFit} hover:scale-105 transition-transform duration-300 rounded-2xl`}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
