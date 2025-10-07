import aboutImage from "@assets/freepik__isometric-geometric-illustration-clean-and-modern-__47779_1758737487270.png";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImage}
              alt="Electrical equipment and industrial workspace"
              className="rounded-2xl shadow-xl w-80 h-auto"
              data-testid="img-about-workspace"
            />
          </div>
          <div>
            <div className="inline-flex items-center bg-muted text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-award mr-2"></i>
              Sobre a Qatar Elétrica
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0202C6' }}>
              Excelência em Materiais Elétricos
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <strong>Qatar Elétrica</strong> é uma distribuidora de materiais elétricos que trabalha com as melhores marcas do mercado, tendo a linha completa de produtos para sua obra, manutenção ou reparo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Localizada em São Paulo (SP), a empresa atua em todo o território nacional, com pronta entrega em toda a linha de materiais elétricos, controles e automação industrial.
            </p>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
