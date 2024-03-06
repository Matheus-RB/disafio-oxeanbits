# Instruções para Iniciar um Projeto React

Este guia fornecerá instruções passo a passo sobre como iniciar um projeto React a partir de um repositório GitHub, configurar as variáveis de ambiente e obter uma chave de API do site [The Movie Database (TMDb)](https://www.themoviedb.org/) para uso em seu projeto.

## Passos

1. **Clone o Repositório do GitHub:**

```
 git clone https://github.com/Matheus-RB/disafio-oxeanbits
```

2. **Instale as Dependências:**

```
 npm install
```

3. **Copie o Arquivo `.env.example`:**

- No diretório do seu projeto, localize o arquivo `.env.example`.
- Faça uma cópia deste arquivo e renomeie-a para `.env`:
  ```
  cp .env.example .env
  ```

4. **Obtenha uma Chave de API do TMDb:**

- Acesse [The Movie Database (TMDb)](https://www.themoviedb.org/) e crie uma conta ou faça login, se necessário.
- Após fazer login, vá para a seção de configurações da sua conta.
- Na seção de API, gere uma chave de API (API Key) e token.
- Copie a chave de API e o token gerado.

5. **Configure a Chave de API no Arquivo `.env`:**

- Abra o arquivo `.env` que você criou anteriormente.
- Adicione uma variável de ambiente:
  ```
  VITE_API_KEY=sua_chave_de_api_aqui
  ```
  ```
  VITE_TOKEN=seu_token_aqui
  ```

6. **Inicie o Servidor de Desenvolvimento:**
   ```
   npm run dev
   ```
