export default function Hero() {
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
    <section id="home" className="bg-[#162741] hero-pattern pt-40 pb-40 lg:pt-52 lg:pb-52">
      <div className="container mx-auto px-4">
        <div className="text-white max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Materiais Elétricos de{" "}
            <span className="text-white">Qualidade</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90">
            Distribuidora especializada com mais de 20 mil itens em estoque para sua obra, manutenção ou reparo.
          </p>
        </div>
      </div>
    </section>
  );
}
