# Trilha Digital — Especialidade de Computação

Guia informativo e mobile-first para apoiar o ensino das Especialidades de Computação 1 e 2 dos Desbravadores. O projeto não exige cadastro nem login.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Organização do código

```text
src/
├── App.tsx                     # Coordena navegação e estado da página atual
├── content/
│   ├── pages.ts                # Textos e ilustração associada a cada página
│   └── quiz.ts                 # Perguntas, opções e respostas do quiz
├── components/
│   ├── BookNavigation.tsx      # Controles fixos de página
│   ├── ChapterMenu.tsx         # Índice das páginas
│   ├── KnowledgeQuiz.tsx      # Interação e resultado do quiz
│   ├── PageContent.tsx        # Composição do conteúdo de uma página
│   ├── SiteHeader.tsx         # Cabeçalho e botão do índice
│   ├── Shield.tsx             # Símbolo reutilizado no site
│   └── illustrations/         # Ilustrações independentes e registro visual
└── styles/
    ├── theme.css               # Cores e tokens visuais
    ├── reader.css              # Estrutura, tipografia e navegação
    ├── *-art.css               # Estilos das ilustrações por tema
    ├── quiz.css                # Quiz e resultado
    └── responsive.css          # Ajustes para tamanhos de tela
```

## Como fazer mudanças comuns

- **Editar um texto:** altere o objeto correspondente em `src/content/pages.ts`.
- **Adicionar uma pergunta:** acrescente uma entrada em `src/content/quiz.ts`. `answer` é o índice da opção correta, começando em zero.
- **Trocar uma ilustração de página:** escolha outra chave `visual` já existente em `pages.ts`.
- **Criar uma ilustração:** adicione um componente em `src/components/illustrations/`, registre a chave em `IllustrationKey` e no mapa de `Illustration.tsx`, e coloque seus estilos no arquivo `*-art.css` adequado.
- **Ajustar cores:** edite os tokens em `src/styles/theme.css`.
- **Ajustar navegação ou estrutura:** os componentes estão separados em `src/components/`; `src/App.tsx` conecta esses componentes.

O tipo `IllustrationKey` e o mapa de ilustrações mantêm os nomes de `pages.ts` alinhados aos componentes visuais. Se uma chave estiver faltando, o TypeScript aponta o problema durante a compilação.
