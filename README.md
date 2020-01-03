# nginx-reverse-proxy

Projeto de teste para Proxy Reverso utilizando NGINX contendo uma API em ASP.NET Core 3.1 e um projeto web em Angular consumindo essa API..

## Pré-Requisitos

Certifique-se que tenha instalado:

[Node](https://nodejs.org/en/)

[Angular CLI](https://cli.angular.io/)

[.NET Core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1)

[Docker](https://www.docker.com/)

## Utilização

### Opcional

Caso queira rodar localmente  e individualmente:

Na pasta web execute:
```node
npm install
```

Na pasta app execute
```
dotnet restore
dotnet build
```

### Docker

Na raiz do projeto execute o seguinte comando:

```docker
docker-compose up --build
```

Para verificar os container e as portas execute:

```docker
docker ps -a
```

### Acesse

```url
http://api.localhost/WeatherForecast
```
Para obter os dados da API e
```url
http://localhost
```
Para visualizar o resultado

## Agradecimentos
Luiz Carlos Farias (Gago) - [Site](https://gago.io/), [Github](https://github.com/luizcarlosfaria)

Por tudo que ele tem feito para a comunidade, todos seus vídeos de docker e sua ajuda de forma no telegram e em outros canais de forma totalmente gratuíta.
