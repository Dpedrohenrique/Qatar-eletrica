import { Zap, Truck, MessagesSquare, Award } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Differentials() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#162741' }}>
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Nossos Diferenciais
          </h2>
          </div>

          {/* Grid de 4 cartões */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Cartão 20K+ */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Zap size={48} style={{ color: '#0202C6' }} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">20K+</h3>
              <p className="text-gray-600 text-base">Itens em Estoque</p>
            </div>
          </div>

          {/* Cartão Nacional */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Truck size={48} style={{ color: '#0202C6' }} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Nacional</h3>
              <p className="text-gray-600 text-base">Pronta Entrega</p>
            </div>
          </div>

          {/* Cartão +12 anos */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award size={48} style={{ color: '#0202C6' }} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">+12</h3>
              <p className="text-gray-600 text-base">anos no mercado</p>
            </div>
          </div>

          {/* Cartão Atendimento personalizado */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MessagesSquare size={48} style={{ color: '#0202C6' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Atendimento personalizado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Equipe Especializada
              </p>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}