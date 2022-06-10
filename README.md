# Goodreads Quotes Client

O Goodreads Quotes Client é um projeto front end construído em `ReactJS`.

![screenshot](screenshot.png?raw=true "screenshot")

## Funcionalidade do projeto

O projeto obtêm uma frase (quote), de um determinado autor, através do [Goodreads Quotes Server API](https://pt-br.reactjs.org) (que fornece esses dados de forma aleatória, baseado em um arquivo `.csv`) e exibe na tela. Quando o botão `Nova frase` é pressionado, um som é tocado e uma nova frase aparece.

## Tecnologias e dependências

-   [ReactJS 18.1.0](https://pt-br.reactjs.org)
-   [Styled Components 5.3.5](https://styled-components.com)
-   [Mock Service Worker](https://mswjs.io)

## Técnicas abordadas

-   Boas práticas na criação dos `components`
-   Variáveis locais com `.env`
-   Test Driven Development (TDD)
-   Testes unitários
    -   `jest`
    -   `msw`
-   React Hooks
    -   `useState`
    -   `useEffect`
-   Services
    -   `fetch`
    -   `json`

###

# Instalação

-   Primeiramente, é preciso clonar o repositório [Goodreads Quotes Server API]() e executar o mesmo, seguindos os passos descritos no seu README (caso queira receber os dados pela API)
-   Depois, clone este repositório e instale as suas dependencias utilizando o seguinte comando:

```sh
$ npm install
```

# Execução

Execute a aplicação com o comando `npm start`, ele irá iniciar o programa em [localhost:3000](http://localhost:3000)

```sh
$ npm start
```

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
