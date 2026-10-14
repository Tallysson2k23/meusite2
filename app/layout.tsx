import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./navigation";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Pacova Desenvolvimento | Soluções digitais sob medida",
    template: "%s | Pacova Desenvolvimento",
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
              aria-label="Pacova Desenvolvimento, início"
            >
              <span className="brand-mark">p.</span>
              <span>
                pacova<span className="brand-caption">DESENVOLVIMENTO</span>
              </span>
            </Link>
            <Navigation />
          </div>
        </header>
        <main id="conteudo">{children}</main>
        <footer className="container footer">
          <Link className="footer-brand" href="/">
            pacova<span>.</span>
          </Link>
          <p>© {new Date().getFullYear()} Pacova Desenvolvimento</p>
          <a href="/#inicio">Voltar ao início ↑</a>
        </footer>
      </body>
    </html>
  );
}
