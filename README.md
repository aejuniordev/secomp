# SECOMP 2026

Site oficial da Semana da Computação da UFPA — edição 2026.

## Requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Desenvolvimento

Inicia o servidor local com hot-reload:

```bash
npm run dev
```

Acesse em [http://localhost:5173](http://localhost:5173).

## Build para produção

Gera os arquivos estáticos otimizados na pasta `dist/`:

```bash
npm run build
```

Para empacotar a pasta `dist/` em um arquivo `.zip` para entrega:

```bash
zip -r dist.zip ./dist
```
