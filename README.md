# Gerenciador de Tarefas Fullstack com React e Node.js

## Descrição

Este projeto é uma aplicação web para gerenciamento de tarefas, construída utilizando React para o frontend e Node.js para o backend com TypeScript. A aplicação permite aos usuários se registrarem, fazerem login, e gerenciarem suas tarefas com funcionalidades completas de CRUD (criar, ler, atualizar e excluir).

## Funcionalidades

- **Cadastro e Autenticação de Usuário**:
  - Registro de novos usuários com Nome, e-mail e senha.
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
  - Alertas com Sonner.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - TypeScript
  - React Router
  - Context API
  - Axios para requisições HTTP
  - Jest para testes unitarios
  - Styled Components para estilos css
  - React Hook Form para validação de formularios
  - Sonner para alertas
  - JWT para autenticação


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
    cd teste-estagiario-fullstack-backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm run dev
    ```

   O servidor estará disponível em `http://localhost:4000`.

### Frontend

1. Navegue para o diretório do frontend:
    ```bash
    cd teste-estagiario-fullstack-frontend
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
  - `src/config/` - Configurações de autenticação
  - `src/controllers/` - Controladores da API
  - `src/database/` - Configuração do BD
  - `src/entities/` - Definição das entidades
  - `src/interfaces/` - Definição das Interfaces
  - `src/middleware/` - Configuração do Middleware
  - `src/routes/` - Rotas da API
  - `src/types/` - Configuração dos tipos typescript
  - `src/utils/` - Codigos uteis
  - `src/index.ts` - Configuração do servidor

- **Frontend**:
  - `src/__mocks__/` - Mock axios com respostas customizadas
  - `src/components/` - Componentes React
  - `src/context/` - Contexto para gerenciamento de estado
  - `src/hooks/` - Hooks da aplicação
  - `src/pages/` - Páginas da aplicação
  - `src/services/` - Serviços para chamadas API
  - `src/styles/` - Estilos globais
  - `src/App.tsx` - Configuração das rotas e layout principal
  - `src/index.tsx` - Cria uma raiz para a aplicação
  - `src/setupTests.tsx` - Configuração do jest
  - `src/types.tsx` - interfaces da aplicação

## Testes (Opcional)

Para rodar os testes, execute:
- **Frontend**:
  ```bash
  npm run test
