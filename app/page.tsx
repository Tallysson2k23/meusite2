import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-start justify-center text-center px-6 pt-28 md:pt-40">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/matrix.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-4xl mx-auto">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-snug">
            Transformando ideias em{" "}
            <span className="text-blue-500">
              Sistemas Digitais
            </span>
          </h1>

          <p className="text-zinc-300 mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Desenvolvedor especializado em sistemas web modernos,
            criando soluções completas para empresas que querem crescer.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projetos"
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
            >
              Ver Projetos
            </a>

            <a
              href="#contato"
              className="border border-zinc-600 px-6 py-3 rounded-xl hover:bg-zinc-800 transition w-full sm:w-auto"
            >
              Falar Comigo
            </a>
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Sobre Mim
        </h2>

        <p className="text-zinc-400 text-center max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Bacharel em Desenvolvimento, especializado na criação de sistemas
          web personalizados para empresas que buscam crescimento,
          organização e eficiência operacional.

          Desenvolvo soluções completas para automação de processos,
          controle de vendas, estoque e gestão financeira, com foco em
          performance, escalabilidade e experiência do usuário.

          Mais do que programar, entrego ferramentas estratégicas que
          ajudam negócios a reduzir erros, otimizar tempo e aumentar resultados.
        </p>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
            Projetos Desenvolvidos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* FLORV3 */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-xl">
              <img src="/florv3.png" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">FlorV3</h3>
                <p className="text-zinc-400 mt-4 text-sm">
                  Sistema completo para gestão de floricultura com controle
                  de vendas, estoque, relatórios e painel administrativo.
                </p>
                <p className="text-blue-500 mt-4 text-sm">
                  React • Node.js • PostgreSQL
                </p>
              </div>
            </div>

            {/* ESPETINHOV2 */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-xl">
              <img src="/espetinhov2.png" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">EspetinhoV2</h3>
                <p className="text-zinc-400 mt-4 text-sm">
                  Sistema de pedidos e controle financeiro com painel
                  administrativo e acompanhamento em tempo real.
                </p>
                <p className="text-blue-500 mt-4 text-sm">
                  Next.js • Prisma • MySQL
                </p>
              </div>
            </div>

            {/* RESERVACAR */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-xl">
              <img src="/reservaCar.png" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">ReservaCar</h3>
                <p className="text-zinc-400 mt-4 text-sm">
                  Sistema de reserva e gestão de veículos com controle de disponibilidade,
                  cadastro de clientes e contrele de quem usa os veículos.
                </p>
                <p className="text-blue-500 mt-4 text-sm">
                  React • Node.js • MySQL
                </p>
              </div>
            </div>

            {/* PORTALRPC */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-xl">
              <img src="/portalRPC.png" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">PortalRPC</h3>
                <p className="text-zinc-400 mt-4 text-sm">
                  Portal corporativo para gerenciamento interno,
                  controle de usuários e painel administrativo estratégico. Foco em reuniar todas as ferramentas, treinamentos, avissos, arquivos usados internamente pela empresa.
                </p>
                <p className="text-blue-500 mt-4 text-sm">
                  Next.js • Prisma • PostgreSQL
                </p>
              </div>
            </div>

            {/* FINANCEIROPRO */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition shadow-xl">
              <img src="/financeiroPro.png" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">FinanceiroPro</h3>
                <p className="text-zinc-400 mt-4 text-sm">
                  Sistema avançado de controle financeiro empresarial
                  com relatórios detalhados, fluxo de caixa e análise de desempenho e graficos.
                </p>
                <p className="text-blue-500 mt-4 text-sm">
                  Next.js • Node.js • PostgreSQL
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* CONTATO */}
<section id="contato" className="py-20 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-8">
    Vamos criar algo incrível juntos?
  </h2>

  <p className="text-zinc-400 mb-10 text-sm md:text-base">
    Entre em contato e acompanhe meu trabalho nas redes sociais.
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

    {/* WHATSAPP */}
    <a
      href="https://wa.me/5581993779019"
      target="_blank"
      className="bg-green-600 px-8 py-4 rounded-xl text-base md:text-lg hover:bg-green-700 transition inline-block"
    >
      Falar no WhatsApp
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/luiz_c137/"
      target="_blank"
      className="flex items-center gap-3 border border-pink-500 text-pink-500 px-8 py-4 rounded-xl hover:bg-pink-500 hover:text-white transition"
    >
      <FaInstagram size={22} />
      Instagram
    </a>

  </div>
</section>


    </main>
  );
}
