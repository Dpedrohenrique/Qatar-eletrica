export default function Products() {
  const products = [
    {
      icon: "fas fa-plug",
      gradient: "from-blue-500 to-blue-600",
      title: "Fios e Cabos",
      description: "Fios e cabos elétricos de alta qualidade para instalações residenciais, comerciais e industriais."
    },
    {
      icon: "fas fa-lightbulb",
      gradient: "from-yellow-500 to-orange-500",
      title: "Iluminação",
      description: "Soluções completas em iluminação LED, lâmpadas e luminárias para todos os ambientes."
    },
    {
      icon: "fas fa-building",
      gradient: "from-gray-500 to-gray-600",
      title: "Infraestrutura",
      description: "Componentes para infraestrutura elétrica, quadros de distribuição e painéis de controle."
    },
    {
      icon: "fas fa-power-off",
      gradient: "from-red-500 to-red-600",
      title: "Tomadas e Interruptores",
      description: "Tomadas, interruptores e componentes para instalações elétricas residenciais e comerciais."
    },
    {
      icon: "fas fa-cog",
      gradient: "from-green-500 to-green-600",
      title: "Motores",
      description: "Motores elétricos industriais e comerciais para diversas aplicações e potências."
    },
    {
      icon: "fas fa-satellite-dish",
      gradient: "from-purple-500 to-purple-600",
      title: "Sensores",
      description: "Sensores industriais para automação, controle de processos e monitoramento."
    },
    {
      icon: "fas fa-tools",
      gradient: "from-indigo-500 to-indigo-600",
      title: "Ferramentas",
      description: "Ferramentas profissionais e equipamentos para instalação e manutenção elétrica."
    },
    {
      icon: "fas fa-robot",
      gradient: "from-teal-500 to-teal-600",
      title: "Automação",
      description: "Sistemas de automação industrial, CLPs, IHMs e soluções para controle de processos."
    },
    {
      icon: "fas fa-shield-alt",
      gradient: "from-orange-500 to-red-500",
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
              <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center mb-4`}>
                <i className={`${product.icon} text-white text-2xl`}></i>
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
