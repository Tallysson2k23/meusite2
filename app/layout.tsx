import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./navigation";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Pacovan Desenvolvimento | Soluções digitais sob medida",
    template: "%s | Pacovan Desenvolvimento",
  },
  description:
    "Sistemas web e locais para simplificar a gestão do seu negócio. Conheça os projetos da Pacova e os arquivos disponíveis para download.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="site-header">
          <div className="container header-inner">
            <Link
              href="/"
              className="brand"
              aria-label="Pacovan Desenvolvimento, início"
            >
              <span className="brand-mark">p.</span>
              <span>
                pacovan<span className="brand-caption">DESENVOLVIMENTO</span>
              </span>
            </Link>
            <Navigation />
          </div>
        </header>
        <main id="conteudo">{children}</main>
        <footer className="container footer">
          <Link className="footer-brand" href="/">
            pacovan<span>.</span>
          </Link>
          <p>© {new Date().getFullYear()} Pacovan Desenvolvimento</p>
          <a href="/#inicio">Voltar ao início ↑</a>
        </footer>
      </body>
    </html>
  );
}
