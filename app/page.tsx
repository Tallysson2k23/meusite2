import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
const projects = [
  {
    name: "FlorV3",
    category: "VENDAS & ESTOQUE",
    image: "/florv31.png",
    description:
      "Da primeira venda ao controle de estoque. Gestão completa para floriculturas.",
    stack: "React · Node.js · PostgreSQL",
  },
  {
    name: "EspetinhoV2",
    category: "PEDIDOS & OPERAÇÃO",
    image: "/espetinhov21.png",
    description:
      "Pedidos organizados e controle financeiro para acompanhar a rotina do negócio.",
    stack: "Next.js · Prisma · MySQL",
  },
  {
    name: "ReservaCar",
    category: "RESERVAS & FROTA",
    image: "/reservaCar1.png",
    description:
      "Disponibilidade, reservas, clientes e usuários dos veículos em um só lugar.",
    stack: "React · Node.js · MySQL",
  },
  {
    name: "PortalRPC",
    category: "PORTAL CORPORATIVO",
    image: "/portalRPC1.png",
    description:
      "Ferramentas, treinamentos, avisos e arquivos conectados à rotina da equipe.",
    stack: "Next.js · Prisma · PostgreSQL",
  },
  {
    name: "FinanceiroPro",
    category: "GESTÃO FINANCEIRA",
    image: "/financeiroPro.png",
    description:
      "Fluxo de caixa, relatórios e gráficos para enxergar melhor as finanças da empresa.",
    stack: "Next.js · Node.js · PostgreSQL",
  },
];
export default function Home() {
  return (
    <>
      <section className="hero container" id="inicio">
        <div>
          <p className="eyebrow">● TECNOLOGIA COM PROPÓSITO</p>
          <h1>
            Boas ideias.
            <br />
            Soluções digitais.
            <br />
            <span>Novas possibilidades.</span>
          </h1>
          <p className="intro">
            Sistemas que simplificam sua rotina e dão espaço para o seu negócio
            crescer. Do primeiro conceito à solução que você precisa.
          </p>
          <div className="actions">
            <a className="button primary" href="#projetos">
              Explorar projetos <FaArrowRight />
            </a>
            <Link className="button secondary" href="/downloads">
              <FaDownload /> Acessar downloads
            </Link>
          </div>
          <p className="hero-note">
            Desenvolvimento sob medida · Web e sistemas locais
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-top">
            <span>● ● ●</span>
            <span>pacova / workspace</span>
            <span>●</span>
          </div>
          <div className="visual-body">
            <FaCode className="code-symbol" />
            <p className="eyebrow">IDEIAS EM MOVIMENTO</p>
            <h2>
              Seu próximo passo
              <br />
              começa aqui<span>.</span>
            </h2>
            {[
              "Sistemas personalizados",
              "Gestão mais inteligente",
              "Processos conectados",
            ].map((text, i) => (
              <div className="service-row" key={text}>
                <span>0{i + 1}</span>
                {text}
                <FaArrowRight />
              </div>
            ))}
          </div>
          <div className="visual-bottom">
            ● Feito para resolver problemas reais
          </div>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="container">
          <span>DESENVOLVIMENTO COM FOCO EM</span>
          <strong>Performance</strong>
          <i>✳</i>
          <strong>Usabilidade</strong>
          <i>✳</i>
          <strong>Organização</strong>
          <i>✳</i>
          <strong>Seu negócio</strong>
        </div>
      </div>
      <section className="section container" id="projetos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PORTFÓLIO / 01</p>
            <h2>Ideias que viraram soluções.</h2>
          </div>
          <p>
            Projetos para diferentes desafios.
            <br />O mesmo cuidado em cada detalhe.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <article className="project-card" key={p.name}>
              <div className="project-image">
                <Image
                  src={p.image}
                  alt={`Tela do sistema ${p.name}`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                />
                <span className="project-number">0{i + 1}</span>
              </div>
              <div className="project-content">
                <p className="eyebrow">{p.category}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="stack">{p.stack}</div>
              </div>
            </article>
          ))}
          <article className="project-cta">
            <FaCode />
            <p className="eyebrow">O PRÓXIMO PODE SER O SEU</p>
            <h3>
              Qual problema
              <br />
              vamos resolver?
            </h3>
            <p>Uma solução pensada para a realidade do seu negócio.</p>
            <a href="#contato" className="text-link">
              Vamos conversar <FaArrowRight />
            </a>
          </article>
        </div>
      </section>
      <section className="container download-banner">
        <FaDownload className="banner-icon" />
        <div>
          <p className="eyebrow">RECURSOS PARA O SEU DIA A DIA</p>
          <h2>Seus arquivos à mão. Sem complicação.</h2>
          <p>Arquivos JSON disponíveis para download direto.</p>
        </div>
        <Link href="/downloads" className="button primary">
          Ver downloads <FaArrowRight />
        </Link>
      </section>
      <section className="section container about" id="sobre">
        <div>
          <p className="eyebrow">SOBRE / 02</p>
          <h2>
            Tecnologia próxima.
            <br />
            <span>Resultados de verdade.</span>
          </h2>
        </div>
        <div>
          <p>
            A Pacova Desenvolvimento cria sistemas web e locais personalizados
            para empresas que buscam eficiência, organização e crescimento.
          </p>
          <p>
            De vendas e estoque à gestão financeira e automação de processos,
            cada projeto começa com uma pergunta: como tornar o seu dia a dia
            mais simples?
          </p>
          <div className="about-tags">
            <span>Soluções sob medida</span>
            <span>Atenção aos detalhes</span>
            <span>Foco no essencial</span>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contato">
        <div className="container">
          <p className="eyebrow">VAMOS CONSTRUIR JUNTOS / 03</p>
          <h2>
            Sua ideia merece
            <br />
            sair do papel<span>.</span>
          </h2>
          <p>Conte o que você precisa. Vamos pensar no próximo passo.</p>
          <div className="actions">
            <a
              href="https://wa.me/5581993779019"
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              <FaWhatsapp /> Falar no WhatsApp <FaArrowRight />
            </a>
            <a
              href="https://www.instagram.com/luiz_c137/"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
