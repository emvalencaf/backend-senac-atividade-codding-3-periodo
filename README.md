# Backend
## Sobre

Back-end desenvolvido com o *framework* Nest.js para fins da 1ª Atividade da disciplina de `Análise e Projeto de Sistema` da Faculdade do SENAC.

## Como usar

1. Criar um arquivo `.env` na raiz do projeto:
![Print do arquivo .env](/docs/print-dotenv.png)
2. Preencher o arquivo `.env` com as seguintes variáveis de ambiente:
![Print preenchendo o arquivo .env](/docs/print-preenchendo-dotenv.png)
3. Para obter a `api key` se cadastre na API [Open Weather Map](https://openweathermap.org/api)
![Print do dashboard da API](/docs/print-pegando-api-keys.png)
4. Instale as dependências com o comando `npm install`

<video width="600" controls>
  <source src="./docs/install-deps.mp4" type="video/mp4">
  Seu navegador não suporta a tag de vídeo.
</video>

5. Execute o comando `npm run start:dev` para executar o backend (que por padrão vai rodar na rota `5000`)

<video width="600" controls>
  <source src="./docs/run-code.mp4" type="video/mp4">
  Seu navegador não suporta a tag de vídeo.
</video>

## Explicação

O usuário fará a chamada ao `controller` do módulo Weather que fará as chamadas ao `service` do módulo. O `endpoint` do receberá as `query params` da requisição do tipo `GET` para fazer as requisições dos dados relacionados ao clima.
![Print do código do controller](/docs/print-controller.png)
Por sua vez, o `service` do módulo fará a chamada a API do `Open Weather Map`.
![Print do código do service](/docs/print-service.png)