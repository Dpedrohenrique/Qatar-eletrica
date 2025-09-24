import wiresImage from "@assets/stock_images/electrical_wires_and_d3b0721c.jpg";
import lightingImage from "@assets/stock_images/led_lighting_bulbs_a_8c580eb0.jpg";
import infrastructureImage from "@assets/stock_images/electrical_control_p_7ff11fc6.jpg";
import outletsImage from "@assets/stock_images/electrical_outlets_s_10e38bb9.jpg";
import motorsImage from "@assets/stock_images/industrial_electric__a64fc299.jpg";
import sensorsImage from "@assets/stock_images/industrial_sensors_p_5fdaedcc.jpg";
import toolsImage from "@assets/stock_images/electrical_tools_pro_8d8bec7e.jpg";
import automationImage from "@assets/stock_images/industrial_automatio_81aefaeb.jpg";
import safetyImage from "@assets/stock_images/electrical_safety_eq_500f700e.jpg";

export default function Products() {
  const products = [
    {
      image: wiresImage,
      title: "Fios e Cabos",
      description: "Fios e cabos elétricos de alta qualidade para instalações residenciais, comerciais e industriais."
    },
    {
      image: lightingImage,
      title: "Iluminação",
      description: "Soluções completas em iluminação LED, lâmpadas e luminárias para todos os ambientes."
    },
    {
      image: infrastructureImage,
      title: "Infraestrutura",
      description: "Componentes para infraestrutura elétrica, quadros de distribuição e painéis de controle."
    },
    {
      image: outletsImage,
      title: "Tomadas e Interruptores",
      description: "Tomadas, interruptores e componentes para instalações elétricas residenciais e comerciais."
    },
    {
      image: motorsImage,
      title: "Motores",
      description: "Motores elétricos industriais e comerciais para diversas aplicações e potências."
    },
    {
      image: sensorsImage,
      title: "Sensores",
      description: "Sensores industriais para automação, controle de processos e monitoramento."
    },
    {
      image: toolsImage,
      title: "Ferramentas",
      description: "Ferramentas profissionais e equipamentos para instalação e manutenção elétrica."
    },
    {
      image: automationImage,
      title: "Automação",
      description: "Sistemas de automação industrial, CLPs, IHMs e soluções para controle de processos."
    },
    {
      image: safetyImage,
      title: "EPIS",
      description: "Equipamentos de proteção individual para segurança em trabalhos com eletricidade."
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
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
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="192"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{product.title}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="text-secondary font-medium">
                <i className="fas fa-arrow-right mr-2"></i>
                Ver produtos
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
