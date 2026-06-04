# SECOMP 2026 — Landing Page

Site da **Semana da Computação da UFPA (SECOMP 2026)** — 26 a 29 de Agosto de 2026, Belém, Pará.

Projeto construído com **React 18** + **Vite 6** + **Tailwind CSS**.

## Pré-requisitos

- **Node.js 18 ou superior** ([download](https://nodejs.org)) — verifique com `node --version`
- **npm** (já vem com o Node) ou **pnpm**

## Como rodar na sua máquina

### 1. Clonar / acessar o projeto

```bash
cd secomp
```

### 2. Instalar as dependências

Usando npm:

```bash
npm install
```

Ou usando pnpm:

```bash
pnpm install
```

### 3. Rodar em modo de desenvolvimento

```bash
npm run dev
```

O servidor inicia em **http://localhost:3000** e abre o navegador automaticamente.
As alterações no código aparecem na hora (hot reload).

## Outros comandos

| Comando           | O que faz                                                        |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento em `localhost:3000`          |
| `npm run build`   | Gera a versão de produção na pasta `dist/`                       |
| `npm run preview` | Serve localmente a build de produção para conferir antes do deploy |

## Estrutura do projeto

```
secomp/
├── index.html          # Página HTML base
├── src/
│   ├── main.jsx        # Ponto de entrada do React
│   ├── App.jsx         # Componente principal
│   ├── index.css       # Estilos globais (Tailwind)
│   └── components/     # Seções da página (Header, Hero, Programação, etc.)
├── public/             # Arquivos estáticos (ícones, imagens, PDFs)
├── vite.config.js      # Configuração do Vite (porta 3000)
├── tailwind.config.js  # Configuração do Tailwind CSS
└── package.json        # Dependências e scripts
```

## Solução de problemas

- **`vite: command not found` ou erros estranhos:** rode `npm install` antes do `npm run dev`.
- **Versão antiga do Node:** o Vite 6 exige Node 18+. Atualize o Node se `node --version` mostrar algo menor.
- **Porta 3000 ocupada:** altere a porta em [vite.config.js](vite.config.js) (campo `server.port`).
