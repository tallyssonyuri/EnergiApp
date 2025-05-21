# EnergiApp

Aplicação web para monitoramento e registro de consumo de energia elétrica, desenvolvida com React, TypeScript, Vite e TailwindCSS.

Aplicação baseada no desgin criado no Figma, disponível em: https://www.figma.com/design/2uWgq57qHpQJbMlNlsRjRc/Gest%C3%A3o-de-consumo-de-energia?node-id=0-1&p=f&t=FArmM4UAkI5cuAi9-0

Abaixo segue a ideia base de como deveria funcionar a aplicação: https://www.figma.com/proto/2uWgq57qHpQJbMlNlsRjRc/Gest%C3%A3o-de-consumo-de-energia?node-id=42-326&starting-point-node-id=42%3A326

Este projeto foi elaborado para a disciplina de CCP310 - Experiência do Usuário Front-End, do curso de Ciência da Computação no Centro Universitário FEI.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/tallyssonyuri/energiapp.git
cd energiapp
npm install
```

## Executando em modo de desenvolvimento

Para rodar o projeto localmente com recarregamento automático:

```sh
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Build para produção

Para gerar os arquivos otimizados para produção:

```sh
npm run build
```

Os arquivos finais ficarão na pasta `dist/`.

## Visualizar o build de produção localmente

Após o build, você pode visualizar o resultado com:

```sh
npm run preview
```

## Scripts disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera o build de produção
- `npm run preview` — Visualiza o build localmente
- `npm run lint` — Executa o linter (ESLint)
- `npm run tailwind:init` — Inicializa a configuração do TailwindCSS

## Estrutura do Projeto

```
EnergiApp/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── desgin/
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
├── tsconfig.json
└── ...
```

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) (gráficos)
- [Lucide React](https://lucide.dev/) (ícones)

---

