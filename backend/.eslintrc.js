module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser para TypeScript
  parserOptions: {
    project: './tsconfig.json',        // Aponta para o tsconfig do projeto
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',               // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TS
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Regras personalizadas, por exemplo:
    'quotes': ['error', 'single'],      // Aspas simples
    'semi': ['error', 'always'],        // Ponto e vírgula obrigatório
    'no-console': 'warn',                // Aviso para console.log
  },
};
