# Pacova Desenvolvimento

Site em Next.js com portfólio, contato e biblioteca de downloads.

## Testar antes de enviar ao GitHub

No terminal, dentro desta pasta, use Node.js 20.9 ou superior:

```powershell
npm ci
npm run dev
```

Abra http://localhost:3000. As alterações aparecem automaticamente. Para encerrar, pressione Ctrl+C.

Confira:
- Home e imagens dos cinco projetos.
- Menu Projetos, Sobre, Downloads e contato.
- Layout no celular: F12 → modo de dispositivo, usando 375 px e 390 px.
- Navegação com Tab e destaque do foco.
- Coloque seus arquivos JSON em `public/downloads/`, recarregue /downloads e confira os botões de download.
- Baixe um arquivo e confira se o conteúdo corresponde ao original.
- Links do WhatsApp e Instagram.

Para verificar a versão de produção, encerre o servidor de desenvolvimento e execute:

```powershell
npm run build
npm start
```

Abra novamente http://localhost:3000. Só envie quando a compilação terminar sem erros e a navegação funcionar. Você também pode executar `npm run lint`.

Se houver erro de certificado no npm e seu Windows tiver o certificado confiável instalado, em versões recentes do Node que suportam certificados do sistema:

```powershell
$env:NODE_OPTIONS='--use-system-ca'
npm ci
```

Não desative a verificação de certificados.

## Adicionar downloads

1. Coloque seus arquivos `.json` diretamente em `public/downloads/`. Exemplo: `public/downloads/meu-fluxo.json`.
2. Em desenvolvimento (`npm run dev`), recarregue a página /downloads para conferir a lista.
3. Em produção, execute `npm run build` novamente e publique a nova versão para incluir os arquivos na lista e na hospedagem.

A página identifica automaticamente os arquivos JSON, ordena pelo nome e mostra o tamanho e o botão de download. Não é necessário editar o código da página. O nome `meu-fluxo.json` aparece como “Meu fluxo”. Os arquivos são disponibilizados sem modificar o conteúdo.

Somente arquivos `.json` diretamente na pasta entram na lista; subpastas não são percorridas. Sem arquivos, a página mostra “Novos arquivos em breve”. O `.gitkeep` apenas mantém a pasta no Git e não aparece na lista.

Tudo dentro de `public` é público: coloque apenas arquivos que deseja compartilhar. Para remover um download, retire o arquivo da pasta e publique novamente.

## Estrutura

- `app/page.tsx`: página inicial e projetos.
- `app/downloads/page.tsx`: biblioteca de downloads.
- `app/globals.css`: visual e comportamento responsivo.
- `app/layout.tsx`: cabeçalho, rodapé, idioma e metadados.
- `public/downloads/`: arquivos para baixar.

## Enviar ao GitHub

Revise as mudanças com `git diff` e `git status`, faça um commit e envie pela interface do GitHub Desktop ou pelo fluxo Git que você já utiliza. Não inclua `node_modules`, `.next` nem arquivos de segredos.

Enviar o código ao GitHub não publica automaticamente o site, a menos que seu repositório já tenha integração com uma hospedagem. O projeto mantém o modo padrão do Next.js; GitHub Pages exige configuração adicional de exportação estática.

## Melhorias de carregamento

O vídeo automático de aproximadamente 8 MB deixou de ser carregado pela página. Os projetos usam imagens otimizadas pelo Next.js e carregadas sob demanda. As fontes usam a pilha local do sistema, sem depender de download externo. O vídeo original foi preservado em `public`.

## Verificações realizadas nesta revisão

Na revisão visual, o layout foi conferido em tela pequena sem rolagem horizontal. A auditoria de produção terminou sem vulnerabilidades conhecidas. A auditoria completa ainda registra cinco alertas altos na cadeia de desenvolvimento do ESLint (braces/fast-glob); a correção automática sugerida exige uma mudança incompatível e não foi aplicada.

