export default function Differentials() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#162741' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Nossos Diferenciais
          </h2>
        </div>

        {/* Grid de cartões principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Cartão 20K+ */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: '#0202C6' }}>
                ⚡
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">20K+</h3>
              <p className="text-gray-600 text-lg">Itens em Estoque</p>
            </div>
          </div>

          {/* Cartão Nacional */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4" style={{ color: '#0202C6' }}>
                🚚
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Nacional</h3>
              <p className="text-gray-600 text-lg">Pronta Entrega</p>
            </div>
          </div>
        </div>

        {/* Seção Especialistas em */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Especialistas em:</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">
            <span className="px-4 py-2 bg-white/10 rounded-full">Materiais Elétricos</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Controles</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Automação</span>
          </div>
        </div>

        {/* Cartão Expert */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="flex justify-center items-center text-6xl mb-4" style={{ color: '#0202C6' }}>
                <span className="mr-2">👥</span>
                <span>⚙️</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">Expert</h3>
              <p className="text-gray-600 text-lg">Equipe Especializada</p>
            </div>
            
            {/* Box com borda suave */}
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50">
              <p className="text-gray-700 text-center leading-relaxed">
                Conte com nossa equipe de profissionais para orientá-lo na melhor escolha de produtos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}