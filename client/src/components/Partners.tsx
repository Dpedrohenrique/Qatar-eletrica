export default function Partners() {
  const partners = [
    { name: "STECK", color: "text-red-600" },
    { name: "Schneider Electric", color: "text-green-600", subtitle: "Electric" },
    { name: "EATON", color: "text-blue-600" },
    { name: "PHILIPS", color: "text-blue-500" },
    { name: "OSRAM", color: "text-orange-500" },
    { name: "BALLUFF", color: "text-gray-800" },
    { name: "ifm", color: "text-orange-500" },
    { name: "HellermannTyton", color: "text-blue-700" },
    { name: "SICK", color: "text-blue-500" },
    { name: "PRYSMIAN", color: "text-purple-600" },
    { name: "PIAL", color: "text-gray-700" },
    { name: "Conexel", color: "text-orange-500" },
    { name: "OMRON", color: "text-blue-600" },
    { name: "DAISA", color: "text-red-600" },
    { name: "SIEMENS", color: "text-teal-600" },
    { name: "Kanaflex", color: "text-blue-500" },
    { name: "POLEODUTO", color: "text-gray-700" },
    { name: "SINDAL", color: "text-red-600" },
    { name: "SCHMERSAL", color: "text-gray-700" },
    { name: "MAGNET", color: "text-red-600" },
    { name: "Allen-Bradley", color: "text-red-600" },
    { name: "SENSE", color: "text-green-600" }
  ];

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-handshake mr-2"></i>
            Principais Parceiros
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Trabalhamos com as Melhores Marcas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcerias sólidas com os principais fabricantes do mercado garantem a qualidade e confiabilidade dos nossos produtos.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-muted rounded-xl hover:shadow-md transition-shadow"
              data-testid={`partner-${index}`}
            >
              <div className={`${partner.color} font-bold text-xl text-center`}>
                {partner.name}
                {partner.subtitle && (
                  <>
                    <br />
                    <span className="text-sm">{partner.subtitle}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
