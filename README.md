# meu-site

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.
> *Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.27.*

---

## 📂 1. Pasta Principal `src/` (Código Fonte)

Tudo o que se refere ao desenvolvimento do aplicativo fica dentro desta pasta.

- **`index.html`** — É a página principal e única do HTML que o navegador carrega. O Angular é uma **SPA (Single Page Application)**, ou seja, todas as outras páginas/componentes são carregados dinamicamente dentro deste arquivo.
- **`main.ts`** — O ponto de partida do Angular. É o arquivo TypeScript inicial que inicializa ("dá o boot") no projeto e carrega o componente principal.
- **`styles.css`** — Onde ficam os estilos globais CSS que se aplicam a todo o site.

---

## 📂 2. Pasta `src/app/` (O Coração da Aplicação)

Aqui ficam a lógica, as telas e as rotas do sistema.

### Componente Principal (`AppComponent`)

- **`app.component.ts`** — A classe TypeScript do componente principal. Define a lógica e faz a ponte com o HTML.
- **`app.component.html`** — O HTML principal do componente raiz. Contém a tag `<app-home></app-home>`, que chama o componente de Home, e a tag `<router-outlet />`, responsável por renderizar dinamicamente os componentes associados às rotas conforme o usuário navega pelo site.
- **`app.component.css`** — Estilos CSS exclusivos para o `app.component.html`.
- **`app.component.spec.ts`** — Arquivo de testes automatizados para esse componente.

### Configurações de Aplicação e Rotas

- **`app.routes.ts`** — Onde são cadastrados os caminhos da URL (ex: `/home`, `/sobre`, `/contato`) e indicado qual componente deve ser exibido em cada um.
- **`app.config.ts`** — Arquivo de configurações globais da aplicação (provedores, cliente HTTP, roteador, etc.).

---

## 📂 3. Pasta `components/home` (Componente criado)

A pasta `components/home` foi criada via comando `ng generate component components/home` (ou pela extensão do VS Code).

No Angular, cada tela ou bloco da interface é dividido em um **Componente**, composto por 4 arquivos básicos:

- **`home.component.ts`** — Lógica em TypeScript para a Home.
- **`home.component.html`** — O visual (HTML) da Home.
- **`home.component.css`** — Estilos CSS restritos apenas à Home.
- **`home.component.spec.ts`** — Testes automatizados da Home.

---

## 📂 4. Arquivos de Configuração na Raiz

São arquivos de infraestrutura do projeto:

- **`angular.json`** — Configurações do projeto Angular CLI (caminhos de assets, configurações de build, scripts, etc.).
- **`package.json`** — Gerenciador de dependências do Node.js (bibliotecas instaladas e scripts do terminal).
- **`tsconfig.json` / `tsconfig.app.json` / `tsconfig.spec.json`** — Configurações do compilador TypeScript.
- **`node_modules/`** — Pasta onde ficam todas as bibliotecas e o próprio framework Angular, baixados via `npm install`.
- **`public/`** — Pasta para arquivos estáticos como imagens e ícones (ex: `favicon.ico`), servidos diretamente sem compilação TypeScript.

---

## 📂 5. O Terminal

No seu terminal você executou:
Bash

- **`ng serve`** 

- Este comando compila a sua aplicação e sobe um servidor local para que você possa testar o site no navegador (geralmente em http://localhost:4200). A mensagem Component update sent to client(s) indica que ele detectou alterações que você fez no arquivo e atualizou a página automaticamente.

---

## 💻 Development server *(Servidor de desenvolvimento)*

To start a local development server, run:
> *Para iniciar um servidor de desenvolvimento local, execute:*

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
> *Com o servidor em execução, abra o navegador e acesse `http://localhost:4200/`. A aplicação recarrega automaticamente sempre que você modificar algum arquivo fonte.*

---

## 🧱 Code scaffolding *(Geração de código)*

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:
> *O Angular CLI possui ferramentas poderosas de geração de código. Para criar um novo componente, execute:*

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:
> *Para ver a lista completa de esquemas disponíveis (como `components`, `directives` ou `pipes`), execute:*

```bash
ng generate --help
```

---

## 📦 Building *(Build / Compilação)*

To build the project run:
> *Para compilar o projeto, execute:*

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
> *Isso irá compilar o projeto e armazenar os artefatos gerados na pasta `dist/`. Por padrão, o build de produção otimiza a aplicação para desempenho e velocidade.*

---

## 🧪 Running unit tests *(Executando testes unitários)*

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:
> *Para executar os testes unitários com o [Karma](https://karma-runner.github.io), utilize o seguinte comando:*

```bash
ng test
```

---

## 🔍 Running end-to-end tests *(Executando testes end-to-end)*

For end-to-end (e2e) testing, run:
> *Para testes end-to-end (e2e), execute:*

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
> *O Angular CLI não inclui um framework de testes e2e por padrão. Você pode escolher o que melhor se adequar às suas necessidades.*

---

## 📚 Additional Resources *(Recursos adicionais)*

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
> *Para mais informações sobre o uso do Angular CLI, incluindo referência detalhada de comandos, acesse a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).*
