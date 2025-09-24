import aboutImage from "@assets/freepik__the-style-is-candid-image-photography-with-natural__47778_1758737225046.png";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Electrical equipment and industrial workspace"
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about-workspace"
            />
          </div>
          <div>
            <div className="inline-flex items-center bg-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-award mr-2"></i>
              Sobre a Qatar Elétrica
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Excelência em Materiais Elétricos
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <strong>Qatar Elétrica</strong> é uma distribuidora de materiais elétricos que trabalha com as melhores marcas do mercado, tendo a linha completa de produtos para sua obra, manutenção ou reparo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Localizada em São Paulo (SP), a empresa atua em todo o território nacional, com pronta entrega em toda a linha de materiais elétricos, controles e automação industrial.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-muted rounded-xl">
                <i className="fas fa-warehouse text-3xl text-secondary mb-3"></i>
                <div className="text-2xl font-bold text-primary" data-testid="text-about-stock">20K+</div>
                <div className="text-sm text-muted-foreground">Itens em Estoque</div>
              </div>
              <div className="text-center p-6 bg-muted rounded-xl">
                <i className="fas fa-users-cog text-3xl text-secondary mb-3"></i>
                <div className="text-2xl font-bold text-primary" data-testid="text-about-expertise">Expert</div>
                <div className="text-sm text-muted-foreground">Equipe Especializada</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-6">
              <p className="text-primary font-medium">
                <i className="fas fa-quote-left text-secondary mr-2"></i>
                Conte com nossa equipe de profissionais para orientá-lo na melhor escolha de produtos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
