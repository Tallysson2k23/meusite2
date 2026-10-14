import type { Metadata } from "next";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { FaArrowDown, FaFileAlt, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Arquivos JSON disponibilizados pela Pacova Desenvolvimento para download.",
};

// A lista é gerada na compilação. Adicione os arquivos e publique novamente.
export const dynamic = "force-static";

async function getDownloads() {
  const directory = path.join(process.cwd(), "public", "downloads");
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".json"))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR", { numeric: true }));

  return Promise.all(files.map(async (file) => {
    const { size } = await stat(path.join(directory, file.name));
    const title = file.name.replace(/\.json$/i, "").replace(/[-_]+/g, " ");
    return {
      file: file.name,
      name: title.charAt(0).toLocaleUpperCase("pt-BR") + title.slice(1),
      size: size < 1024
        ? `${size} bytes`
        : `${(size / 1024).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} KB`,
    };
  }));
}

export default async function Downloads() {
  const downloads = await getDownloads();

  return (
    <div className="container downloads-page">
      <div className="download-heading">
        <p className="eyebrow">BIBLIOTECA PACOVA</p>
        <h1>Arquivos disponíveis.<br /><span>Prontos para baixar.</span></h1>
        <p className="intro">
          Encontre os arquivos JSON compartilhados pela Pacova.
          Escolha o arquivo que precisa e baixe diretamente para o seu dispositivo.
        </p>
        <div className="download-benefits">
          {["Gratuito", "Sem cadastro", "Download direto"].map((text) => (
            <span key={text}><FaCheckCircle />{text}</span>
          ))}
        </div>
      </div>
      <div className="section-heading">
        <h2>Arquivos JSON</h2>
        <span className="resource-count">
          {downloads.length} {downloads.length === 1 ? "arquivo disponível" : "arquivos disponíveis"}
        </span>
      </div>
      {downloads.length > 0 ? (
        <div className="project-grid">
          {downloads.map((item) => (
            <article className="resource-card" key={item.file}>
              <div className="resource-top">
                <span className="resource-icon"><FaFileAlt /></span>
                <span className="format-tag">JSON</span>
              </div>
              <h3 className="download-filename">{item.name}</h3>
              <p className="download-filename">{item.file}</p>
              <small>Arquivo JSON · {item.size}</small>
              <a className="button secondary" href={`/downloads/${encodeURIComponent(item.file)}`} download={item.file} aria-label={`Baixar ${item.file}`}>
                Baixar JSON <FaArrowDown />
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="resource-card">
          <h3>Novos arquivos em breve</h3>
          <p>Os arquivos JSON estarão disponíveis aqui assim que forem publicados.</p>
        </div>
      )}
      <aside className="download-help">
        <FaFileAlt />
        <div>
          <h2>Como baixar?</h2>
          <p>Clique em “Baixar JSON” no arquivo desejado. Depois de salvar, você pode abri-lo em um editor de texto ou importá-lo na ferramenta compatível com aquele arquivo.</p>
        </div>
      </aside>
    </div>
  );
}
