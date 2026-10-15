import type { Metadata } from "next";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { FaArrowDown, FaFileAlt, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Arquivos JSON e aplicativos APK disponibilizados pela Pacovan Desenvolvimento para download.",
};

// A lista é gerada na compilação. Adicione os arquivos e publique novamente.
export const dynamic = "force-static";

async function getDownloads() {
  const directory = path.join(process.cwd(), "public", "downloads");
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && [".json", ".apk"].includes(path.extname(entry.name).toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR", { numeric: true }));

  return Promise.all(files.map(async (file) => {
    const { size } = await stat(path.join(directory, file.name));
    const format = path.extname(file.name).slice(1).toUpperCase();
    const title = path.basename(file.name, path.extname(file.name)).replace(/[-_]+/g, " ");
    return {
      file: file.name,
      format,
      name: title.charAt(0).toLocaleUpperCase("pt-BR") + title.slice(1),
      size: size < 1024
        ? `${size} bytes`
        : size < 1024 * 1024
          ? `${(size / 1024).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} KB`
          : `${(size / (1024 * 1024)).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} MB`,
    };
  }));
}

export default async function Downloads() {
  const downloads = await getDownloads();

  return (
    <div className="container downloads-page">
      <div className="download-heading">
        <p className="eyebrow">BIBLIOTECA PACOVAN</p>
        <h1>Arquivos disponíveis.<br /><span>Prontos para baixar.</span></h1>
        <p className="intro">
          Encontre os arquivos JSON e aplicativos APK compartilhados pela Pacovan.
          Escolha o arquivo que precisa e baixe diretamente para o seu dispositivo.
        </p>
        <div className="download-benefits">
          {["Gratuito", "Sem cadastro", "Download direto"].map((text) => (
            <span key={text}><FaCheckCircle />{text}</span>
          ))}
        </div>
      </div>
      <div className="section-heading">
        <h2>Arquivos para download</h2>
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
                <span className="format-tag">{item.format}</span>
              </div>
              <h3 className="download-filename">{item.name}</h3>
              <p className="download-filename">{item.file}</p>
              <small>Arquivo {item.format} · {item.size}</small>
              <a className="button secondary" href={`/downloads/${encodeURIComponent(item.file)}`} download={item.file} aria-label={`Baixar ${item.file}`}>
                Baixar {item.format} <FaArrowDown />
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="resource-card">
          <h3>Novos arquivos em breve</h3>
          <p>Os arquivos estarão disponíveis aqui assim que forem publicados.</p>
        </div>
      )}
      <aside className="download-help">
        <FaFileAlt />
        <div>
          <h2>Como baixar?</h2>
          <p>Clique em “Baixar JSON” ou “Baixar APK” no arquivo desejado. Os arquivos JSON podem ser importados na ferramenta compatível. Os arquivos APK são instaladores de aplicativos para Android.</p>
        </div>
      </aside>
    </div>
  );
}
