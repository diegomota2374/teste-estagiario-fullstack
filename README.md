# Gerenciador de Tarefas Fullstack com React e Node.js

## Descrição

Este projeto é uma aplicação web para gerenciamento de tarefas, construída utilizando React para o frontend e Node.js com TypeScript para o backend. A aplicação permite aos usuários se registrarem, fazerem login, e gerenciarem suas tarefas com funcionalidades completas de CRUD (criar, ler, atualizar e excluir).

## Funcionalidades

- **Cadastro e Autenticação de Usuário**:
  - Registro de novos usuários com e-mail e senha.
  - Login e logout utilizando JSON Web Tokens (JWT).

- **Gerenciamento de Tarefas**:
  - Listagem de todas as tarefas do usuário autenticado.
  - Adição de novas tarefas com título e descrição.
  - Edição de tarefas existentes.
  - Marcação de tarefas como concluídas.
  - Exclusão de tarefas.

- **Interface de Usuário**:
  - Interface responsiva e intuitiva desenvolvida com React.
  - Utiliza Context API para gerenciamento de estado.
  - Navegação com React Router.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - TypeScript
  - React Router
  - Context API
  - Axios para requisições HTTP

- **Backend**:
  - Node.js
  - Express.js
  - TypeScript
  - SQLite para armazenamento de dados
  - JWT para autenticação

## Configuração e Execução

### Backend

1. Navegue para o diretório do backend:
    ```bash
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm run dev
    ```

   O servidor estará disponível em `http://localhost:5000`.

### Frontend

1. Navegue para o diretório do frontend:
    ```bash
    cd frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o aplicativo:
    ```bash
    npm start
    ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **Backend**:
  - `src/controllers/` - Controladores da API
  - `src/models/` - Modelos de dados
  - `src/routes/` - Rotas da API
  - `src/services/` - Serviços de negócios
  - `src/app.ts` - Configuração do servidor e middleware

- **Frontend**:
  - `src/components/` - Componentes React
  - `src/context/` - Contexto para gerenciamento de estado
  - `src/pages/` - Páginas da aplicação
  - `src/services/` - Serviços para chamadas API
  - `src/App.tsx` - Configuração das rotas e layout principal

## Testes (Opcional)

Para rodar os testes, execute:
- **Backend**:
  ```bash
  npm run test
