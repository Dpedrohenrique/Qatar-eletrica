export default function Map() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Nossa Localização
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos localizados na Vila Formosa, São Paulo.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="aspect-[4/2] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4836502833996!2d-46.54891072593073!3d-23.527447978765468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fb27c9bf5d5%3A0x7e0e59fb7d5f4b8f!2sRua%20Anjo%20Cust%C3%B3dio%2C%2058%20-%20Vila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003358-040!5e0!3m2!1spt-BR!2sbr!4v1696794851234!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Qatar Elétrica"
                data-testid="map-location"
              />
            </div>
            <div className="p-6 bg-muted border-t">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-secondary"></i>
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Rua Anjo Custódio, 58<br />
                    Vila Formosa - São Paulo/SP<br />
                    CEP: 03358-040
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-4 flex items-center">
                    🕗 Horário de Funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 08h00 às 17h30<br />
                    Sábado: Fechado<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}