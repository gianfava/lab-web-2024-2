# Web2024-2

## Descrição

Este é um projeto básico em Node.js utilizando o framework **Hapi.js** para gerenciamento de rotas e o **Joi** para validação de dados. Foi construído na disciplina de Laboratório Web da **Fatec Franca** como uma estrutura base para o desenvolvimento de APIs REST.

O projeto implementa as APIs de **Produtos** e **Alunos**, e utiliza um banco de dados PostgreSQL local para persistência dos dados.

---

## Requisitos

- **Node.js** (versão recomendada: 14.x ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **PostgreSQL** (banco de dados local)

### Configuração do Banco de Dados

1. Instale o PostgreSQL localmente em sua máquina.
2. Crie um banco de dados chamado `web2024`.
3. Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto:
   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=web2024
   DATABASE_USER=seu_usuario
   DATABASE_PASSWORD=sua_senha


# Rotas da API

Este documento lista as rotas disponíveis na API de Produtos e Alunos.

Link Documentação Swagger:

https://app.swaggerhub.com/apis-docs/GIANFAVA_2/api-de_produtos/1.0.0

---

## Produtos

### Endpoints:

- **GET /v1/produtos**
  - Lista todos os produtos cadastrados.
  - Parâmetros opcionais:
    - `nome`: Filtra produtos pelo nome.
    - `categoria`: Filtra produtos pela categoria.

- **GET /v1/produtos/{id}**
  - Busca um produto específico pelo ID.

- **POST /v1/produtos**
  - Cria um novo produto.

- **PUT /v1/produtos/{id}**
  - Atualiza os dados de um produto existente.

- **DELETE /v1/produtos/{id}**
  - Exclui um produto pelo ID.

---

## Alunos

### Endpoints:

- **GET /v1/alunos**
  - Lista todos os alunos cadastrados.
  - Parâmetros opcionais:
    - `nome`: Filtra alunos pelo nome.
    - `idade`: Filtra alunos pela idade.

- **GET /v1/alunos/{id}**
  - Busca um aluno específico pelo ID.

- **POST /v1/alunos**
  - Cria um novo aluno.

- **PUT /v1/alunos/{id}**
  - Atualiza os dados de um aluno existente.

- **DELETE /v1/alunos/{id}**
  - Exclui um aluno pelo ID.

---

## Telas do POSTMAN

**Teste POST -  Criar um produto**
![enter image description here](https://github.com/gianfava/lab-web-2024-2/blob/main/screenshots/01.jpg?raw=true)

**Teste  GET -  Listar produtos por  ID***
![enter image description here](https://github.com/gianfava/lab-web-2024-2/blob/main/screenshots/02.jpg?raw=true)
*Sem o ID definido como parametro, são listados TODOS os produtos cadastrados no BD


**Teste PUT - Atualizar produto por ID**
![enter image description here](https://github.com/gianfava/lab-web-2024-2/blob/main/screenshots/03.jpg?raw=true)

**Teste DELETE -  Apagar produto**
![enter image description here](https://github.com/gianfava/lab-web-2024-2/blob/main/screenshots/04.jpg?raw=true)

------
## Informações Gerais

- Todas as rotas utilizam o padrão REST.
- Certifique-se de que o servidor está rodando na URL base: `http://localhost:5005`.



## Scripts Disponíveis
**1. Rodar em Produção**
Para rodar o projeto no modo de produção, execute:

`npm start`

Isso executará o arquivo principal do projeto (index.js) usando o comando node index.js.

O servidor será iniciado na URL base configurada no projeto

`http://localhost:5005`

**2. Rodar em Desenvolvimento**
Para rodar o projeto no modo de desenvolvimento com recarga automática, execute:

`npm run dev`
Esse comando utiliza ferramentas como nodemon para reiniciar o servidor automaticamente sempre que houver alterações no código.


Teste o servidor acessando a URL no navegador ou utilizando ferramentas como **Postman**.

------

### Erros Comuns
**ERRO DE CONEXÃO COM O BANCO DE DADOS**

Verifique se o PostgreSQL está rodando e configurado corretamente.
Certifique-se de que as credenciais no arquivo .env estão corretas.

**PORTA EM USO**

Se a porta configurada já estiver em uso, edite a variável PORT no arquivo .env para usar uma porta diferente.

