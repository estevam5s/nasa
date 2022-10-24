<h1 align="center">
    <img src="https://user-images.githubusercontent.com/83369803/197357210-335a06f9-53f7-4a80-990c-c958a9243807.png" alt="DevSite" width="2000">
</h1>

<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Uma estrutura <a href="http://nodejs.org" target="_blank">Node.js</a> progressiva para criar aplicativos do lado do servidor eficientes e escalonáveis 🔥🚀</p>
  <p align="center">
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Node&message=v14.15.4&labelColor=339933&color=757575&logoColor=FFFFFF&logo=Node.js" alt="Node.js"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=Npm&message=v6.14.10&labelColor=CB3837&logoColor=FFFFFF&color=757575&logo=npm" alt="Npm"/>
    <img src="https://img.shields.io/static/v1.svg?style=flat&label=NestJs&message=v8.2.6&labelColor=E0234E&logoColor=FFFFFF&color=757575&logo=Nestjs" alt="NestJs"/>
    <a href="https://github.com/rudemex/nestjs-starter/releases/latest">
        <img alt="Last Release" src="https://img.shields.io/github/v/tag/rudemex/nestjs-starter?label=release">
    </a>
    <a href="./license.md">
        <img alt="GitHub license" src="https://img.shields.io/github/license/rudemex/nestjs-starter?style=flat">
    </a>
    <br>
    <a href="https://github.com/rudemex/nestjs-starter/actions/workflows/master.yml" target="_blank">
        <img alt="GitHub Workflow Status" src="https://github.com/rudemex/nestjs-starter/actions/workflows/master.yml/badge.svg?branch=master">
    </a>
    <a href="https://app.codecov.io/gh/rudemex/nestjs-starter/" target="_blank">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/rudemex/nestjs-starter?logoColor=FFFFFF&logo=Codecov&labelColor=#F01F7A">
    </a>
    <a href="https://sonarcloud.io/summary/new_code?id=rudemex_nestjs-starter" target="_blank">    
        <img src="https://sonarcloud.io/api/project_badges/measure?project=rudemex_nestjs-starter&metric=alert_status" alt="sonarcloud">
    </a>    
    <a href="https://snyk.io/test/github/rudemex/nestjs-starter" target="_blank">
        <img src="https://snyk.io/test/github/rudemex/nestjs-starter/badge.svg" alt="Snyk">
    </a>
    <br/> 
</p>

</br>

<p align="center">
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="yarn" />

<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJs" />

<img src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql" alt="Graphql" />

<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma.io" />

<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />

<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Prisma" />

<img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript" alt="TypeScript" />

<img src="https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=jest" alt="Jest" />

<img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js" alt="Node.js" />

<img src="https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=JSONWebTokens" alt="JWT" />

---

## Descrição

> Arquitetura padrão para nestjs

*Você consegue [Request Feature][ack-issues] ou [Report Bug][ack-issues] seguindo este link*

Nessa postagem criamos um CRUD de planetas, utilizando o o framework [Nest](https://nestjs.com/), GraphQL [GraphQL](https://graphql.org/), Apollo [Apollo](https://www.apollographql.com/), Prisma [Prisma](https://www.prisma.io/), Docker [Docker](https://www.docker.com/), Postgres [Postgres](https://www.postgresql.org/), Jest [Jest](https://jestjs.io/pt-BR/), Node.js [Node.js](https://nodejs.org/en/), JWT [JWT](https://jwt.io/) e o Yarn [Yarn](https://yarnpkg.com/).
 
Assim podemos criar, deletar, pesquisar e atualizar uma tabela de planetas no banco de dados. Usamos também o [Prisma](https://www.prisma.io/) como ORM e criamos um container com o banco de dados postgres usando o [Docker Compose](https://docs.docker.com/compose/).

Este projeto, foi utilizado conceitos sobre astronomia. O projeto foi criado com o intuito de aprender mais sobre o framework NestJS, GraphQL, Apollo, Prisma, Docker, Postgres, Jest, Node.js, JWT e o Yarn.

Este projeto tem como intuito de mostrar como podemos criar um CRUD de planetas do nosso sistema sola utilizando o NestJS e GraphQL. Além disso, também mostramos como podemos criar um container com o banco de dados postgres usando o Docker Compose. Vamos subir a nossa aplicação usando o Docker Compose e acessar o GraphQL Playground para testar nossas queries e mutations.

---

## Pré-requisitos

Assumimos que todos que chegam aqui são _**`programadores com conhecimento intermediário`**_ e também precisamos entender mais antes de começar para reduzir a lacuna de conhecimento.

1. Entenda [NestJs Fundamental](http://nestjs.com), Main Framework. NodeJs Framework com suporte totalmente TypeScript.
2. Entenda [Typescript Fundamental](https://www.typescriptlang.org), Linguagem de Programação. Isso nos ajudará a escrever e ler o código.
3. Entenda [ExpressJs Fundamental](https://nodejs.org), NodeJs Base Framework. Isso nos ajudará a entender como o NestJs Framework funciona.
4. Entenda [Docker](ref-docker) que pode ajudá-lo a executar o projeto
5. Entenda [GraphQL](ref-graphql) que pode ajudá-lo a entender como funciona o GraphQL
6. Entenda [Apollo](ref-apollo) que pode ajudá-lo a entender como funciona o Apollo
7. Entenda [Prisma](ref-prisma) que pode ajudá-lo a entender como funciona o Prisma
8. Entenda [Postgres](ref-postgres) que pode ajudá-lo a entender como funciona o Postgres
9. Entenda [Jest](ref-jest) que pode ajudá-lo a entender como funciona o Jest
10. Entenda [Node.js](ref-nodejs) que pode ajudá-lo a entender como funciona o Node.js
11. Entenda [JWT](ref-jwt) que pode ajudá-lo a entender como funciona o JWT
12. Entenda [Yarn](ref-yarn) que pode ajudá-lo a entender como funciona o Yarn
13. Opcional, entenda [Docker Compose](ref-docker-compose) que pode ajudá-lo a executar o projeto

---

<h2>Índice</h2>

- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Configurar](#configurar)
- [Ambientes de configuração](#ambientes-de-configuração)
- [NPM scripts](#npm-scripts)
- [Exemplo de solicitação](#Exemplo-de-solicitação)
    - [Para obter os dados dos planetas com gravidade alta na api da nasa](#para-obter-os-dados-dos-planetas-com-gravidade-alta-na-api-da-nasa)
    - [dado um planeta, instala uma estação de carregamento no planetas](#dado-um-planeta,-instala-uma-estação-de-carregamento-no-planetas)
    - [Para obter as estações no planeta, irá listar todas as estações instaladas nos planetas](#para-obter-as-estações-no-planeta,-irá-listar-todas-as-estações-instaladas-nos-planetas )
    - [dado uma estação e um datetime de quanto a recarga irá finalizar, realiza uma recarga](#dado-uma-estação-e-um-datetime-de-quanto-a-recarga-irá-finalizar,-realiza-uma-recarga)
    - [reservation, que dado uma estação, um usuário e um intervalo de tempo, cria uma reserva da estação para o usuário naquele determinado intervalo de tempo.](#reservation,-que-dado-uma-estação,-um-usuário-e-um-intervalo-de-tempo,-cria-uma-reserva-da-estação-para-o-usuário-naquele-determinado-intervalo-de-tempo.)
    - [stationHistory, onde será possível visualizar o histórico de recargas de uma estação (mostrar o horário, o tempo de duração da recarga e o usuário que realizou)](#stationHistory,-onde-será-possível-visualizar-o-histórico-de-recargas-de-uma-estação-(mostrar-o-horário,-o-tempo-de-duração-da-recarga-e-o-usuário-que-realizou))
- [Clonar repositório](#clonar-repositório)
- [Instalar dependências](#instalar-dependências)
- [Criar ambiente](#criar-ambiente)
- [Sem usar o Docker](#sem-usar-o-docker)
- [Usando o Docker](#ssando-o-docker)
- [Instalação](#instalação)
- [Rodando a aplicação](#rodando-a-aplicação)
- [Iniciar aplicativo](#iniciar-aplicativo)
- [Testes](#testes)
    - [Teste específico](#teste-específico)
- [Migração de banco de dados](#migração-de-banco-de-dados)
    - [_Create migration_](#create-migration)
    - [_Run migration_](#run-migration)
    - [_Revert migration_](#revert-migration)
- [Iniciando o servidor](#iniciando-o-servidor)
- [Observação](#observação)
- [Documentação](#documentação)
- [Estrutura](#estrutura)
- [Features](#features)
- [Features covered](#features-covered)
- [Rotas](#rotas)
    - [createUser](#createUser)
    - [findAll](#findAll)
    - [findOne](#findOne)
    - [updateUser](#updateUser)
    - [removeUser](#removeUser)
- [Tutorial](#tutorial)
- [Autenticação](#autenticação)
- [Deployment](#deployment)
- [License](#license)
- [BuyMeACoffee](#buyMeACoffee)
- [Importante](#importante)
- [Objetivo](#objetivo)
- [Todo](#todo)
- [Database](#database)
<!-- - [Features](#features)
    - [CQRS](#cqrs)
    - [Guard](#guard)
    - [Functions](#functions)
        - [_Authentication_](#authentication)
        - [_Refresh token (incoming)_](#refresh-token-incoming)
        - [_Manage device login_](#manage-device-login)
        - [_Two authenticator (incoming)_](#two-authenticator-incoming)
        - [_CRUD users_](#crud-users)
        - [_Reset password_](#reset-password)
        - [_Send mail_](#send-mail)
        - [_Upload file S3 (incoming)_](#upload-file-s3-incoming)
        - [_I18n (incoming)_](#i18n-incoming)
    - [Migrations](#migrations)
    - [Transformers](#transformers)
    - [Exceptions filter](#exceptions-filter)
    - [Rate limiting](#rate-limiting)
    - [Swagger](#swagger)
    - [Compodoc](#compodoc)
    - [Linter](#linter) -->

---

## Configurar

- O NestJs é um framework NodeJs que usa Typescript como linguagem de programação. Ele é baseado no ExpressJs, mas com uma estrutura mais organizada e com algumas funcionalidades extras.
- Para configurar o projeto, você precisa ter o NodeJs instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/en/download/).
- Você também precisa ter o Yarn instalado em sua máquina. Você pode baixá-lo [aqui](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
- Você também precisa ter o Docker instalado em sua máquina. Você pode baixá-lo [aqui](https://docs.docker.com/get-docker/).
- Você também precisa ter o Docker Compose instalado em sua máquina. Você pode baixá-lo [aqui](https://docs.docker.com/compose/install/).
- Ao usar o docker-compose, ele vai fazer o download da imagem do postgres e criar um container para você. Você pode verificar isso usando o comando `docker ps` no seu terminal.
- Com o docker-compose, você pode subir o container do postgres e o container da aplicação usando o comando `docker-compose up -d` no seu terminal.
- Como o arquivo docker-compose deve estar:
    
```yml

version: '3'
services:
  app:
    build: .
    entrypoint: .docker/entrypoint.sh
    container_name: postgres
    ports:
      - '49153:49153'
    volumes:
      - .:/home/node/app
    depends_on:
      - db

  db:
    build: docker/postgres
    container_name: postgres
    restart: always
    tty: true
    ports:
      - '49153:49153'
    volumes:
      - docker/dbdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgrespw
      POSTGRES_DB: postgres

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    tty: true
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: pgadminpw
    ports:
      - '8000:80'
    depends_on:
      - db
    restart: always

```

---

## Ambientes de configuração

- Instale dependências executando ``` yarn install ```
- Crie o arquivo ***.env*** executando ```cp .env.example .env``` e substitua as variáveis ​​env existentes
- Crie o arquivo ***ormconfig.json*** executando ```cp ormconfig.example.json ormconfig.json``` e substitua as variáveis ​​env existentes
- Crie o arquivo ***ormconfig.test.json*** executando ```cp ormconfig.test.example.json ormconfig.test.json``` e substitua as variáveis ​​env existentes
- O arquivo ***ormconfig.json*** é usado para configurar o Prisma e o TypeORM, enquanto o arquivo ***ormconfig.test.json*** é usado para configurar o TypeORM para testes.
- Como ficará o arquivo ***.env***:
    
```env

# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB (Preview).
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

USER_DATABASE=dbase
PASSWORD_DATABASE=dbase
DATABASE=dbase
DATABASE_URL="postgres://postgres:postgrespw@localhost:49153"
# DATABASE_URL="postgresql://${USER_DATABASE}:${PASSWORD_DATABASE}@localhost:5432/${DATABASE}?schema=public"

```

---

> Você pode criar o arquivo ***.env.development*** ou ***.env.staging*** ou ***.env.production*** dependendo do seu ambiente

---

## NPM scripts

-   `npm run start` - Start application
-   `npm run start:watch` - Start application in watch mode
-   `npm run test` - run Jest test runner
-   `npm run start:prod` - Build application

Ao executar o comando `npm run start`, o NestJs vai executar o arquivo ***main.ts*** que está na raiz do projeto. Esse arquivo é responsável por iniciar o servidor da aplicação.

Os comando do npm é ideal para executar o projeto em modo de desenvolvimento, mas para executar em modo de produção, você precisa usar o comando `npm run start:prod` que vai gerar uma pasta chamada ***dist*** na raiz do projeto. Essa pasta contém os arquivos compilados do projeto. Você pode executar o projeto usando o comando `node dist/main.js`.

---

## Exemplo de solicitação, primeiramente no insomnia

#### Para obter os dados dos planetas com gravidade alta na api da nasa

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

{
  "query": 
    "query 
    { 
        suitablePlanets 
        { 
            pl_name,
            pl_bmassj
        }
  }"
}

```

Onde pl_name é o nome do planeta e pl_bmassj é a massa do planeta.

E o resultado deste pedido é :

<!-- fazer um servico que consome essa api: ttps://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj+from+ps+where+pl_bmassj%3E10&format=json -->



```json

{
  "data": 
    {
        "suitablePlanets": 

        [
            {
                "pl_name": "HD 22781 b",
                "pl_bmassj": 13.65000
            },
            {
                "pl_name": "30 Ari B b",
                "pl_bmassj": 13.82000
            },
            {
                "pl_name": "BD+20 2457 b",
                "pl_bmassj": 55.59000
            },
            {
                "pl_name": "HD 13189 b",
                "pl_bmassj": 10.95000
            },
            {
                "pl_name": "HD 162020 b",
                "pl_bmassj": 14.40000
            },
            {
                "pl_name": "11 UMi b",
                "pl_bmassj": 14.74000
            },
            {
                "pl_name": "BD+20 2457 c",
                "pl_bmassj": 12.47000
            },
            {
                "pl_name": "HD 158996 b",
                "pl_bmassj": 14.00000
            },
            {
                "pl_name": "tau Gem b",
                "pl_bmassj": 20.60000
            },
            {
                "pl_name": "NSVS 14256825 b",
                "pl_bmassj": 14.15000
            },
            {
                "pl_name": "CT Cha b",
                "pl_bmassj": 17.00000
            },
            {
                "pl_name": "Kepler-75 b",
                "pl_bmassj": 10.10000
            },
            {
                "pl_name": "b Cen AB b",
                "pl_bmassj": 10.90000
            },
            {
                "pl_name": "AB Pic b",
                "pl_bmassj": 13.50000
            },
            {
                "pl_name": "Kepler-407 c",
                "pl_bmassj": 12.60000
            },
            {
                "pl_name": "HIP 78530 b",
                "pl_bmassj": 23.00000
            },
            {
                "pl_name": "VHS J125601.92-125723.9 b",
                "pl_bmassj": 42.80000
            },
            {
                "pl_name": "Kepler-30 d",
                "pl_bmassj": 17.00000
            },
            {
                "pl_name": "HIP 79098 AB b",
                "pl_bmassj": 20.50000
            },
            {
                "pl_name": "VHS J125601.92-125723.9 b",
                "pl_bmassj": 43.30000
            },
            {
                "pl_name": "Oph 11 b",
                "pl_bmassj": 21.00000
            },
            {
                "pl_name": "ROXs 42 B b",
                "pl_bmassj": 10.50000
            },
            {
                "pl_name": "KMT-2019-BLG-0371L b",
                "pl_bmassj": 11.98000
            },
            {
                "pl_name": "HD 106906 b",
                "pl_bmassj": 11.00000
            },
            {
                "pl_name": "kap And b",
                "pl_bmassj": 12.80000
            },
            {
                "pl_name": "WISEP J121756.91+162640.2 A b",
                "pl_bmassj": 22.00000
            },
            {
                "pl_name": "Oph 11 b",
                "pl_bmassj": 14.00000
            },
            {
                "pl_name": "HIP 78530 b",
                "pl_bmassj": 23.04000
            },
            {
                "pl_name": "HIP 78530 b",
                "pl_bmassj": 24.00000
            },
            {
                "pl_name": "Kepler-47 c",
                "pl_bmassj": 28.00000
            },
            {
                "pl_name": "USco1556 b",
                "pl_bmassj": 15.00000
            },
            {
                "pl_name": "1RXS J160929.1-210524 b",
                "pl_bmassj": 12.00000
            },
            {
                "pl_name": "FU Tau b",
                "pl_bmassj": 16.00000
            },
            {
                "pl_name": "DH Tau b",
                "pl_bmassj": 11.00000
            },
            {
                "pl_name": "2MASS J01225093-2439505 b",
                "pl_bmassj": 24.50000
            },
            {
                "pl_name": "2MASS J21402931+1625183 A b",
                "pl_bmassj": 20.95000
            },
            {
                "pl_name": "PH2 b",
                "pl_bmassj": 80.00000
            },
            {
                "pl_name": "2MASS J22362452+4751425 b",
                "pl_bmassj": 12.50000
            },
            {
                "pl_name": "HD 106906 b",
                "pl_bmassj": 12.95000
            },
            {
                "pl_name": "Kepler-39 b",
                "pl_bmassj": 17.90000
            },
            {
                "pl_name": "kap And b",
                "pl_bmassj": 13.61600
            },
            {
                "pl_name": "Kepler-39 b",
                "pl_bmassj": 20.10000
            },
            {
                "pl_name": "EPIC 248847494 b",
                "pl_bmassj": 13.00000
            },
            {
                "pl_name": "VHS J125601.92-125723.9 b",
                "pl_bmassj": 11.20000
            },
            {
                "pl_name": "CFBDSIR J145829+101343 b",
                "pl_bmassj": 10.50000
            },
            {
                "pl_name": "Kepler-39 b",
                "pl_bmassj": 18.00000
            },
            {
                "pl_name": "nu Oph b",
                "pl_bmassj": 22.20600
            },
            {
                "pl_name": "OGLE-2013-BLG-0102L b",
                "pl_bmassj": 14.00000
            },
            {
                "pl_name": "OGLE-2013-BLG-0102L b",
                "pl_bmassj": 13.00000
            },
            {
                "pl_name": "OGLE-2019-BLG-0954L b",
                "pl_bmassj": 14.20000
            },
            {
                "pl_name": "HD 153557 d",
                "pl_bmassj": 27.31185
            }
        ]
    }
}

```

<img src=".assets/insomnia/suitablePlanets.jpeg" alt="suitablePlanets">

#### dado um planeta, instala uma estação de carregamento no planetas

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

mutation installStation
{
    installStation(planetName:"teste")
    {
        id,
        planetName
    }
}

```

Onde `installStation` é o nome da mutation e `planetName` é o nome do planeta que você deseja instalar a estação de carregamento.

E o resultado deste pedido é:

```json

{
	"data": {
		"installStation": {
			"id": "8",
			"planetName": "Kepler-62 r"
		}
	}
}

```

<img src=".assets/insomnia/installStation.png" alt="installStation">

#### Para obter as estações no planeta, irá listar todas as estações instaladas nos planetas 

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

{
    query:
	    stations
        {
	        id,
            planetName
        }
}

```

Onde `stations` é o nome do resolver que você quer executar e `id` e `planetName` são os campos que você quer retornar.

E o resultado deste pedido é:

```json

{
	"data": {
		"query": [
			{
				"id": "1",
				"planetName": "teste"
			},
			{
				"id": "2",
				"planetName": "teste"
			},
			{
				"id": "3",
				"planetName": "teste"
			},
			{
				"id": "4",
				"planetName": "teste"
			},
			{
				"id": "5",
				"planetName": "teste"
			}
		]
	}
}

```

<img src=".assets/insomnia/stations.png" alt="stations">


#### dado uma estação e um datetime de quanto a recarga irá finalizar, realiza uma recarga

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

mutation recharge
{
	recharge(data:
		{
			stationID: 5,fin_recarga:"2022-10-26",usuario:"user"
		}
	)
	{
		stationID, fin_recarga, usuario
	}
}

```

Onde `rechargeStation` é o nome da mutation e `stationId` é o id da estação que você deseja recarregar e `finishRecharge` é o datetime de quando a recarga irá finalizar.

E o resultado deste pedido é:

```json

{
	"data": {
		"recharge": {
			"stationID": 5,
			"fin_recarga": "2022-10-26T00:00:00.000Z",
			"usuario": "user"
		}
	}
}

```

<img src=".assets/insomnia/recharge.png" alt="recharge">

#### reservation, que dado uma estação, um usuário e um intervalo de tempo, cria uma reserva da estação para o usuário naquele determinado intervalo de tempo.

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

mutation reservation
{
        reservation
        (
            stationID: 1
            usuario: "João"
            inicio: "2021-06-01T00:00:00.000Z"
            fin: "2021-06-01T01:00:00.000Z"
        )
}

```

Onde `reservation` é o nome da mutation e `stationId` é o id da estação que você deseja reservar, `usuario` é o nome do usuário que irá reservar a estação, `inicio_reserva` é o datetime de quando a reserva irá começar e `fim_reserva` é o datetime de quando a reserva irá finalizar.

E o resultado deste pedido é:

```json

{
	"data": {
		"reservation": "Recarga realizada"
	}
}

```

<img src=".assets/insomnia/reservation.png" alt="reservation">

#### stationHistory, onde será possível visualizar o histórico de recargas de uma estação (mostrar o horário, o tempo de duração da recarga e o usuário que realizou)

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

query {
	stationHistory(stationID: 2) 
	{
		stationID
		usuario
		inicio_recarga
		fin_recarga
	}
} from

```

Onde `stationHistory` é o nome do resolver que você quer executar e `stationID` é o id da estação que você deseja ver o histórico de recargas, `inicio_recarga` é o datetime de quando a recarga começou, `fin_recarga` é o datetime de quando a recarga finalizou e `usuario` é o nome do usuário que realizou a recarga.

E o resultado deste pedido é:

```json

{
    "data": {
        "query": [
            {
                "stationID": 5,
                "inicio_recarga": "2022-10-26T00:00:00.000Z",
                "fin_recarga": "2022-10-26T00:00:00.000Z",
                "usuario": "user"
            }
        ]
    }
}

```

<img src=".assets/insomnia/stationHistory.png" alt="stationHistory">

#### cancelar recarga de uma estação

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

  mutation cancelRecharge {
        cancelRecharge(id: 1) {
            stationID
						usuario
            inicio_recarga
            fin_recarga
        }
    }

```

Onde `cancelRecharge` é o nome da mutation e `id` é o id da recarga que você deseja cancelar, `stationID` é o id da estação que você deseja cancelar a recarga, `inicio_recarga` é o datetime de quando a recarga começou, `fin_recarga` é o datetime de quando a recarga finalizou e `usuario` é o nome do usuário que realizou a recarga.

E o resultado deste pedido é:

```json

{
    "data": {
        "cancelRecharge": {
            "stationID": 5,
            "inicio_recarga": "2022-10-26T00:00:00.000Z",
            "fin_recarga": "2022-10-26T00:00:00.000Z",
            "usuario": "user"
        }
    }
}

```

<img src=".assets/insomnia/cancelRecharge.png" alt="cancelRecharge">

#### cancelar reserva de uma estação

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

  mutation cancelStation {
        cancelStation(reservationID: 1)
    }

```

Onde `cancelStation` é o nome da mutation e `reservationID` é o id da reserva que você deseja cancelar.

E o resultado deste pedido é:

```json

{
    "data": {
        "cancelStation": "Reserva cancelada"
    }
}

```

<img src=".assets/insomnia/cancelStation.png" alt="cancelStation">

#### ver o histórico de reservas de uma estação

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

query {
    stationHistory(stationID: 2) 
    {
        stationID
        usuario
        inicio_reserva
        fim_reserva
    }
} from

```

Onde `stationHistory` é o nome do resolver que você quer executar e `stationID` é o id da estação que você deseja ver o histórico de reservas, `inicio_reserva` é o datetime de quando a reserva começou, `fim_reserva` é o datetime de quando a reserva finalizou e `usuario` é o nome do usuário que realizou a reserva.

E o resultado deste pedido é:

```json

{
    "data": {
        "query": [
            {
                "stationID": 5,
                "inicio_reserva": "2022-10-26T00:00:00.000Z",
                "fim_reserva": "2022-10-26T00:00:00.000Z",
                "usuario": "user"
            }
        ]
    }
}

```

<img src=".assets/insomnia/stationHistory.png" alt="stationHistory">

#### ver o histórico de reservas de um usuário

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

query {
    userHistory(usuario: "user") 
    {
        stationID
        usuario
        inicio_reserva
        fim_reserva
    }
} from

```

Onde `userHistory` é o nome do resolver que você quer executar e `usuario` é o nome do usuário que você deseja ver o histórico de reservas, `inicio_reserva` é o datetime de quando a reserva começou, `fim_reserva` é o datetime de quando a reserva finalizou e `stationID` é o id da estação que o usuário reservou.

E o resultado deste pedido é:

```json

{
    "data": {
        "query": [
            {
                "stationID": 5,
                "inicio_reserva": "2022-10-26T00:00:00.000Z",
                "fim_reserva": "2022-10-26T00:00:00.000Z",
                "usuario": "user"
            }
        ]
    }
}

```

<img src=".assets/insomnia/userHistory.png" alt="userHistory">

#### ver o histórico de recargas de um usuário

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

query {
    userHistory(usuario: "user") 
    {
        stationID
        usuario
        inicio_recarga
        fin_recarga
    }
} from

```

Onde `userHistory` é o nome do resolver que você quer executar e `usuario` é o nome do usuário que você deseja ver o histórico de recargas, `inicio_recarga` é o datetime de quando a recarga começou, `fin_recarga` é o datetime de quando a recarga finalizou e `stationID` é o id da estação que o usuário recarregou.

E o resultado deste pedido é:

```json

{
    "data": {
        "query": [
            {
                "stationID": 5,
                "inicio_recarga": "2022-10-26T00:00:00.000Z",
                "fin_recarga": "2022-10-26T00:00:00.000Z",
                "usuario": "user"
            }
        ]
    }
}

```

<img src=".assets/insomnia/userHistory.png" alt="userHistory">

#### ver o histórico de recargas de uma estação

`POST http://localhost:3000/graphql` com o seguinte corpo :

```graphql

query {
    stationHistory(stationID: 2) 
    {
        stationID
        usuario
        inicio_recarga
        fin_recarga
    }
} from

```

Onde `stationHistory` é o nome do resolver que você quer executar e `stationID` é o id da estação que você deseja ver o histórico de recargas, `inicio_recarga` é o datetime de quando a recarga começou, `fin_recarga` é o datetime de quando a recarga finalizou e `usuario` é o nome do usuário que realizou a recarga.

E o resultado deste pedido é:

```json

{
    "data": {
        "query": [
            {
                "stationID": 5,
                "inicio_recarga": "2022-10-26T00:00:00.000Z",
                "fin_recarga": "2022-10-26T00:00:00.000Z",
                "usuario": "user"
            }
        ]
    }
}

```

<img src=".assets/insomnia/stationHistory.png" alt="stationHistory">

---

#### Clonar repositório

Clone rest-api-nasa com git.

```bash
# Clone this repository
$ git clone https://github.com/estevam5s/rest-api-nasa
```

#### Instalar dependências

Este projeto precisa de algumas dependências. Vamos instalá-lo.

```bash
# yarn
$ yarn install
#or
# npm
$ npm install
```

#### Criar ambiente

Faça seu próprio ambiente com cópia de `.env.example` e edite algum valor. Por exemplo, você pode mudar o nome do aplicativo.

```bash
# Copy environment
$ cp .env.example .env
```

- ### Sem usar o Docker

Você tem que instalar `Mysql`, `Redis`, `Postgres` e substituir as respectivas variáveis ​​env no arquivo env que se envontra na raiz do projeto.

```bash
# development
$ yarn db:setup:local
```

- ### Usando o Docker

É ideal que use o Docker para executar o projeto como o docker-compose já está configurado para executar o projeto.

Ao rodar o projeto com o docker-compose, você não precisa instalar o `Mysql`, `Redis`, `Postgres` e substituir as respectivas variáveis ​​env no arquivo env que se envontra na raiz do projeto.

ELe ficará em execução em segundo plano e você pode acessar o banco de dados usando o `localhost:3306` para o `Mysql`, `localhost:5432` para o `Postgres` e `localhost:6379` para o `Redis`.

```bash
# Start docker -> mysql, redis, postgres -> Iniciar o docker em segundo plano
$ docker-compose up -d
```

> Você pode usar o arquivo `docker-compose.dev.yml` para o ambiente de desenvolvimento e o arquivo `docker-compose.prod.yml` para o ambiente de produção.

---

## Instalação

```bash
# Instalação das dependências -> yarn ou npm
$ yarn

# Iniciar container com banco de dados postgress (Você precisa ter o docker instalado!):
$ yarn up:db

# Migração dos models definidos no schema.prisma para o banco de dados
$ yarn prisma migrate dev
```

## Rodando a aplicação

> Se a versão do mongodb < 5, [Leia esta seção para ajustar a configuração do mongoose.](#adjust-mongoose-setting)

Finalmente, Felicidades 🍻🍻!!! passamos todas as etapas.

Agora, o projeto pode ser visto em `http://localhost:3000`.

Agora podemos executar rest-api-nasa e usar todos os recursos.

```bash
# development -> http://localhost:3000 (http://localhost:3000/graphql)
$ yarn start

# watch mode -> Para desenvolvimento (reinicia o servidor automaticamente quando os arquivos são alterados)
$ yarn start:dev

# production mode -> Para produção (compila o código e executa o código compilado)
$ yarn start:prod
```

## Iniciar aplicativo

Para ambiente de desenvolvimento, você pode usar o comando `yarn start:dev` para iniciar o servidor. O servidor será iniciado na porta 3000. Você pode acessar o servidor em `http://localhost:3000`. O servidor será reiniciado automaticamente se você alterar qualquer um dos arquivos de origem. Você pode usar o comando `yarn start:debug` para iniciar o servidor em modo de depuração. Você pode usar o comando `yarn start:prod` para iniciar o servidor em modo de produção. O servidor será iniciado na porta 3000. Você pode acessar o servidor em `http://localhost:3000`. O servidor será reiniciado automaticamente se você alterar qualquer um dos arquivos de origem.

```bash
# development -> http://localhost:3000 (http://localhost:3000/graphql) -> Para desenvolvimento (reinicia o servidor automaticamente quando os arquivos são alterados)
$  yarn migration:run

# watch mode -> Para desenvolvimento (reinicia o servidor automaticamente quando os arquivos são alterados) -> Para desenvolvimento (reinicia o servidor automaticamente quando os arquivos são alterados)
$  yarn start:dev
```

Para ambiente de produção você pode usar o comando `yarn start:prod` para iniciar o servidor. O servidor será iniciado na porta 3000. Você pode acessar o servidor em `http://localhost:3000`. O servidor será reiniciado automaticamente se você alterar qualquer um dos arquivos de origem.

```bash
# production mode -> Para produção (compila o código e executa o código compilado) -> Para produção (compila o código e executa o código compilado)
$  yarn migration:run

# production mode -> Para produção (compila o código e executa o código compilado) -> Para produção (compila o código e executa o código compilado)
$  yarn start:prod
```

## Testes

```bash
# unit tests -> Para testes unitários (testes de unidade)
$ yarn test

# e2e tests -> Para testes de integração (testes de integração) só em ambiente de desenvolvimento
$ yarn test:e2e

# test coverage -> Para testes de cobertura (testes de cobertura) só em ambiente de desenvolvimento
$ yarn test:cov
```

rest-api-nasa fornece 3 testes de automação `testes unitários`, `testes de integração` e `testes e2e`.

```bash
# Unit testing
$ yarn test
```

#### Teste específico

Para testes de unidade

```bash
# Unit testing
$ yarn test:unit
```

Para testes de integração (testes de integração)

```bash
# Integration testing
$ yarn test:integration
```

Para testes E2E 

```bash
# E2E testing
$ yarn test:e2e
```

[Jump to details](#environment)

#### Migração de banco de dados

- #### _Create migration_

Crie uma nova migração executando

```bash
$ yarn migration:generate {name-of-migration}
```

A nova migração será criada em ```src/databases/migrations```.

- #### _Run migration_

```bash
$ yarn migration:run
```

- #### _Revert migration_

```bash
$ yarn migration:revert
```

> Se você deseja implementar `transaction`, você deve instalar o `Mongodb Replication Set`. Você precisa executar o `mongodb`. Existem tantas opções que você pode fazer por conta própria com a pesquisa no `google`.

Migração de banco de dados rest-api-nasa usada [NestJs-Command](https://gitlab.com/aa900031/nestjs-command)

Para migrar o banco de dados, você pode usar o comando `yarn migration:run` para iniciar o servidor. O servidor será iniciado na porta 3000. Você pode acessar o servidor em `http://localhost:3000`. O servidor será reiniciado automaticamente se você alterar qualquer um dos arquivos de origem.

```bash
# Migrate
$ yarn migrate
```

For rollback

```bash
# Rollback
$ yarn rollback
```

## Iniciando o servidor

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Observação

```bash
# Para remover o container criado:
$ yarn rm:db
```

---

## Documentação

Antes de começarmos, precisamos instalar alguns pacotes e ferramentas que usaremos para criar nossa aplicação.
A versão recomendada é a versão LTS para cada ferramenta e pacote, pois é a versão mais estável e com mais suporte.
Caso instale uma versão diferente, pode ocorrer erros e bugs, e não é recomendado.

> Certifique-se de que as ferramentas foram instaladas com sucesso.

* [NodeJs](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Git](https://git-scm.com)
* [Docker](https://www.docker.com)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Postman](https://www.postman.com)

Para mais informações, acesse a [documentação](https://docs.nestjs.com/).

---

## Estrutura ┃

```bash

📦{your-app}
 ┣ 📂.assets
 ┣ 📂.github
 ┃ ┃ ┃ ┗ 📂workflows
 ┃ ┣ ┣ ┣ ┣ 📜ci.yml
 ┃ ┗ ┗ ┗ ┗ 📜release.yml
 ┣ 📂.husky
 ┃ ┣ 📜commit-msg
 ┃ ┗ 📜pre-commit
 ┣ 📂dist
 ┃ ┃ ┣ 📂src
 ┃ ┣ ┣ ┣ 📂app
 ┃ ┣ ┣ ┣ ┣ 📂controllers
 ┃ ┣ ┣ ┣ ┃ ┣ 📜app.controller.js
 ┃ ┣ ┣ ┣ ┃ ┗ 📜app.controller.spec.js
 ┃ ┣ ┣ ┣ ┣ 📂entities
 ┃ ┣ ┣ ┣ ┃ ┗ 📜app.entity.js
 ┃ ┣ ┣ ┣ ┣ 📂services
 ┃ ┣ ┣ ┣ ┃ ┣ 📜app.service.js
 ┃ ┣ ┣ ┣ ┃ ┗ 📜app.service.spec.js
 ┃ ┣ ┣ ┣ ┗ 📜app.module.js
 ┃ ┃ ┃ ┣ 📂databases
 ┃ ┣ ┣ ┣ ┣ 📂migrations
 ┃ ┣ ┣ ┣ ┃ ┗ 📜1589810000000-InitialMigration.js
 ┃ ┣ ┣ ┣ ┣ 📂seeders
 ┃ ┣ ┣ ┣ ┃ ┗ 📜1589810000000-InitialSeeder.js
 ┃ ┣ ┣ ┣ ┗ 📜database.module.js
 ┃ ┣ ┣ ┣ 📂main
 ┃ ┣ ┣ ┣ ┣ 📜main.js
 ┃ ┣ ┣ ┣ ┗ 📜main.spec.js
 ┃ ┣ ┣ ┣ 📂modules
 ┃ ┣ ┣ ┣ ┣ 📂nasa
 ┃ ┣ ┣ ┣ ┃ ┣ 📂controllers
 ┃ ┣ ┣ ┣ ┃ ┃ ┣ 📜nasa.controller.js
 ┃ ┣ ┣ ┣ ┃ ┃ ┗ 📜nasa.controller.spec.js
 ┃ ┣ ┣ ┣ ┃ ┣ 📂entities
 ┃ ┣ ┣ ┣ ┃ ┃ ┗ 📜nasa.entity.js
 ┃ ┣ ┣ ┣ ┃ ┣ 📂services
 ┃ ┣ ┣ ┣ ┃ ┃ ┣ 📜nasa.service.js
 ┃ ┣ ┣ ┣ ┃ ┃ ┗ 📜nasa.service.spec.js
 ┃ ┣ ┣ ┣ ┃ ┗ 📜nasa.module.js
 ┃ ┣ ┣ ┣ ┗ 📂users
 ┃ ┣ ┣ ┣ ┃ ┣ 📂controllers
 ┃ ┃ ┣ ┣ ┣ ┃ ┣ 📜users.controller.js
 ┃ ┃ ┣ ┣ ┣ ┃ ┗ 📜users.controller.spec.js
 ┃ ┃ ┣ ┣ ┣ ┣ 📂entities
 ┃ ┃ ┣ ┣ ┣ ┃ ┗ 📜users.entity.js
 ┃ ┃ ┣ ┣ ┣ ┣ 📂services
 ┃ ┃ ┣ ┣ ┣ ┃ ┣ 📜users.service.js
 ┃ ┃ ┣ ┣ ┣ ┃ ┗ 📜users.service.spec.js
 ┃ ┗ ┗ ┗ ┗ ┗ 📜users.module.js
 ┣ 📂docker
 ┃ ┃ ┃ ┃ ┃ ┣ 📂postgres
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Dockerfile
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜init.sql
 ┃ ┃ ┃ ┃ ┃ ┣ 📜docker-compose.yml
 ┃ ┗ ┗ ┗ ┗ ┗ 📜docker-compose.yml.example
 ┣ 📂docs
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apidoc.json
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apidoc.yml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.html
 ┃ ┗ ┗ ┗ ┗ ┗ 📜index.js
 ┣ 📂.vscode
 ┃ ┣ 📜launch.json
 ┃ ┗ 📜settings.json
 ┣ 📂prisma
 ┃ ┃ ┣ 📂migration
 ┃ ┃ ┃ ┣ 📂20200526190000_planets
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜README.md
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prisma.module.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prisma.service.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜schema.prisma
 ┃ ┗ ┗ ┗ ┗ ┗ 📜seed.ts
 ┣ 📂src
 ┃ ┣ 📂database
 ┃ ┃ ┗ 📜database.module.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂decorators
 ┃ ┃ ┃ ┗ 📜auth-user.decorator.ts
 ┃ ┣ 📂graphql
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜create-user.input.ts
 ┃ ┃ ┃ ┣ 📜login.input.ts
 ┃ ┃ ┃ ┗ 📜update-user.input.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┣ 📜user.entity.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.model.ts
 ┃ ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┃ ┃ ┣ 📂resolvers
 ┃ ┃ ┃ ┃ ┣ 📜auth.resolver.ts
 ┃ ┃ ┃ ┃ ┣ 📜user.resolver.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.resolver.spec.ts
 ┃ ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┃ ┣ 📜auth.service.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜auth.service.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜user.service.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜user.service.spec.ts
 ┃ ┃ ┃ ┗ ┗ 📜graphql.module.ts
 ┃ ┃ ┣ 📂planets
 ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┣ 📜create-planet.input.ts
 ┃ ┃ ┃ ┃ ┣ 📜update-planet.input.ts
 ┃ ┃ ┃ ┃ ┗ 📜update-planet.input.spec.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┣ 📜planet.entity.ts
 ┃ ┃ ┃ ┃ ┗ 📜planet.model.ts
 ┃ ┃ ┃ ┃ ┣ 📂resolvers
 ┃ ┃ ┃ ┃ ┃ ┣ 📜planet.resolver.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜planet.resolver.spec.ts
 ┃ ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┃ ┣ 📜planet.service.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜planet.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ ┗ 📜planets.module.ts
 ┃ ┃ ┃ ┣ 📂recharge
 ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-recharge.input.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜update-recharge.input.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜update-recharge.input.spec.ts
 ┃ ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┣ 📜recharge.entity.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜recharge.model.ts
 ┃ ┃ ┃ ┃ ┣ 📂resolvers
 ┃ ┃ ┃ ┃ ┃ ┣ 📜recharge.resolver.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜recharge.resolver.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜recharge.service.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜recharge.service.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ ┗ 📜recharge.module.ts
 ┃ ┃ ┃ ┃ ┣ 📂station
 ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ 📜create-station.input.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ 📜update-station.input.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┗ 📜update-station.input.spec.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ 📂entities
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜station.entity.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜station.model.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ 📂resolvers
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜station.resolver.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜station.resolver.spec.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ 📂services
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜station.service.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜station.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ ┗ 📜station.module.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂users
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂dto
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜create-user.input.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜login.input.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜update-user.input.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂entities
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜user.entity.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜user.model.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂guards
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜auth.guard.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂resolvers
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜auth.resolver.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜user.resolver.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜user.resolver.spec.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📂services
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜auth.service.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜auth.service.spec.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┣ 📜user.service.ts
 ┃ ┣ ┣ ┣ ┣ ┣ ┣ ┣ ┗ 📜user.service.spec.ts
 ┃ ┗ ┗ ┗ ┗ ┗ ┗ ┗ 📜graphql.module.ts
 ┣ 📜.dockerignore
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.gitattributes
 ┣ 📜.gitconfig
 ┣ 📜.gitignore
 ┣ 📜.gitignore_global
 ┣ 📜.huskyrc
 ┣ 📜.nvmrc
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜.prettierrc.ts
 ┣ 📜.commitlint.config.js
 ┣ 📜Dockerfile
 ┣ 📜gulpfile.js
 ┣ 📜nest-cli.json
 ┣ 📜nodemon-debug.json
 ┣ 📜nodemon.json
 ┣ 📜ormconfig.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜renovate.json
 ┣ 📜tsconfig.build.json
 ┣ 📜tsconfig.json
 ┣ 📜yarn.lock

```

---

## Features

- ✅ Authentication and Authorization (JWT, OAuth2, API Key, Basic Auth, Role Management) [NestJS Passport](https://docs.nestjs.com/techniques/authentication)
- ✅ [NestJS 8](https://nestjs.com/)
- ✅ Database Migration (NestJs-Command) [TypeORM](https://typeorm.io/#/)
- ✅ Next generation build system with [Nx](https://nx.dev/)
- ✅ Unit Testing with [Jest](https://jestjs.io/)
- ✅ End-to-End Testing with [Cypress](https://www.cypress.io/)
- ✅ Linter with EsLint for Typescript [EsLint](https://eslint.org/)
- ✅ [ESLint](https://eslint.org/)
- ✅ [Prettier](https://prettier.io/)
- ✅ [Husky](https://typicode.github.io/husky/#/)
- ✅ Support CI/CD with Github Action or Jenkins or CircleCI or TravisCI or GitlabCI or Bitbucket Pipelines [CI/CD](https://docs.nestjs.com/recipes/ci-cd)
- ✅ Support Docker Installation [Docker](https://www.docker.com/)
- ✅ [Prisma](https://www.prisma.io/)
- ✅ [GraphQL](https://graphql.org/)
- ✅ [Apollo GraphQL](https://www.apollographql.com/)
- ✅ [Postgres](https://www.postgresql.org/)
- ✅ [TypeScript](https://www.typescriptlang.org/)

---

## Features covered

-   📱 **NestJS** — latest version
-   🎉 **TypeScript** - Type checking
-   ⚙️ **Dotenv** - Supports environment variables
-   🗝 **Authentication** - JWT, RSA256, oauth
-   🏪 **MikroORM** - Database ORM
-   🏪 **PostgreSQL** - Open-Source Relational Database
-   🧠 **Configuration** - Single config for all
-   📃 **Swagger** - API Documentation
-   🐳 **Docker Compose** - Container Orchestration
-   😴 **Insomnia** - Insomnia config for endpoints
-   📏 **ESLint** — Pluggable JavaScript linter
-   💖 **Prettier** - Opinionated Code Formatter

<details>
<summary>💬 Para ver detalhadamente todas as propriedades da configuração do package.json, clique aqui..</summary>

<!-- arquivo package.json -->
``` json

{
  "name": "backend-graphql",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "repository": {
    "type": "git",
    "url": "https://github.com/estevam5s/api-nasa-nest"
  },
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json",
    "up:db": "docker-compose -f ./docker/docker-compose.yml --env-file .env  up -d",
    "rm:db": "docker rm -f postgres"
  },
  "dependencies": {
    "@nestjs/apollo": "^10.0.9",
    "@nestjs/axios": "^0.1.0",
    "@nestjs/common": "^8.0.0",
    "@nestjs/core": "^8.0.0",
    "@nestjs/graphql": "^10.0.10",
    "@nestjs/platform-express": "^8.0.0",
    "@types/axios": "^0.14.0",
    "apollo-server-express": "^3.6.7",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.13.2",
    "graphql": "^16.4.0",
    "husky": "8.0.1",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0"
  },
  "devDependencies": {
    "@nestjs/cli": "^8.0.0",
    "@nestjs/schematics": "^8.0.0",
    "@nestjs/testing": "^8.0.0",
    "@prisma/client": "^3.13.0",
    "@types/express": "^4.17.13",
    "@types/jest": "27.4.1",
    "@types/node": "^16.0.0",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "gulp": "^4.0.2",
    "gulp-typescript": "^6.0.0-alpha.1",
    "jest": "^27.2.5",
    "prettier": "^2.3.2",
    "prisma": "^3.13.0",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "^27.0.3",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "^3.10.1",
    "typescript": "^4.3.5"
  },
  "husky": {
    "hooks": {
      "pre-commit": "prettier --write . && git add -A .",
      "pre-push": "npm run lint",
      "post-merge": "$_SCRIPT",
      "post-checkout": "$_SCRIPT",
      "post-rewrite": "$_SCRIPT",
      "post-commit": "$_SCRIPT"
    }
  },
  "lint-staged": {
    "*": "prettier --write",
    "src/**/*.{js,jsx,json,css}": [
      "prettier --single-quote --write",
      "git add"
    ]
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "resolutions": {
      "normalize-url": "6.0.1",
      "glob-parent": "6.0.0"
    },
    "bugs": {
      "url": "https://github.com/estevam5s/api-nasa-nest"
    },
    "keywords": [
      "github",
      "profile",
      "readme"
    ],
    "testTimeout": 30000,
    "moduleNameMapper": {
      "^@entities": "<rootDir>/entities/index",
      "^@common/(.*)$": "<rootDir>/common/$1",
      "^@modules/(.*)$": "<rootDir>/modules/$1",
      "^@lib/(.*)$": "<rootDir>/lib/$1"
    },
    "lint-staged": {
      "*.{ts,tsx}": [
        "eslint --cache --fix",
        "prettier --write"
      ],
      "*.{json,md,scss,yaml,yml}": [
        "prettier --write"
      ]
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

```

</details>

---

## Rotas

```

Mapped {/graphql, POST} route +1ms

```

Diferentemente das APIs Rest onde existem os métodos get, post, delete, update e path, em uma API do tipo GraphQL existe somente uma rota com o método post com <strong>querys</strong> e <strong>mutations</strong>.

```graphql

# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type Planet {
  pl_name: String!
  pl_bmassj: Float!
}

type Recharge {
  stationID: Float!
  usuario: String!
  inicio_recarga: DateTime!
  fin_recarga: DateTime!
}

"""
A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format.
"""
scalar DateTime

type Station {
  id: ID!
  planetName: String!
}

type User {
  id: ID!
  email: String!
  name: String!
}

type Query {
  users: [User!]!
  user(id: Int!): User!
  suitablePlanets: [Planet!]!
  stations: [Station!]!
}

type Mutation {
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(updateUserInput: UpdateUserInput!): User!
  removeUser(id: Int!): User!
  installStation(planetName: String!): Station!
  recharge(data: CreateRechargeInput!): Recharge!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  id: Int!
  email: String
  name: String
}

input CreateRechargeInput {
  stationID: Float!
  fin_recarga: DateTime!
  usuario: String!
}

```

para realizar as querys e mutations abra o Insomnia:

<details>

<summary>Insomnia</summary>

```json

{

    "__schema": {

        "queryType": {

            "name": "Query"

        },
        "mutationType": {

            "name": "Mutation"

        },

        "subscriptionType": null,

        "types": [

        {

            "kind": "OBJECT",

            "name": "Planet",

            "fields": [

            {

            "name": "pl_name",

            "args": [],

            "type": {

            "kind": "NON_NULL",

            "name": null,

            "ofType": {

                "kind": "SCALAR",

                "name": "String",

                "ofType": null

            }

        },

        "isDeprecated": false,

        "deprecationReason": null

    },

    {

        "name": "pl_bmassj",

        "args": [],

        "type": {

            "kind": "NON_NULL",

            "name": null,

            "ofType": {

                "kind": "SCALAR",

                "name": "Float",

                "ofType": null

            }

        },

        "isDeprecated": false,

        "deprecationReason": null

        }

    ],

    "inputFields": null,

    "interfaces": [],

    "enumValues": null,

    "possibleTypes": null

},

```

</details>

Ou, para realizar as querys e mutations abra o navegador em http://localhost:3000/graphql:

<img src=".assets/playground.png" alt="Playground GraphQL Apollo"/>

---

## createUser

```graphql

mutation {
  createUser(
    createUserInput: { name: "tpaphysics", email: "tpaphysics@t.com" }
  ) {
    id
    name
    email
  }
}

```

## findAll

```graphql

query {
  users {
    id
    email
    name
  }
}

```

## findOne

```graphql  

query {
  user(id: 12) {
    id
    email
    name
  }
}

```

## updateUser  

```graphql

mutation {
  updateUser(updateUserInput: { id: 1, name: "tpaphysics" }) {
    id
    name
    email
  }
}

```

## removeUser

```graphql

mutation {
  removeUser(id: 2) {
    id
    name
    email
  }
}

```

---

## Tutorial
[Nest.js | Middleware, Pipes & Interceptors Explained By Example](https://www.youtube.com/watch?v=x1W3FJ1RJlM) 

- Middleware ✅
- Guards ✅
- Interceptors ✅
- Pipes ✅
- Exception Filters ✅
- Custom Decorators ✅
- Custom Providers ✅
- Custom Modules ✅
- Custom CLI ✅
- Custom NestFactory ✅

<!-- importar a imagem da pasta .assets -->

<img src=".assets/output1.png" alt="NestJS">

- Pipes ✅

<img src=".assets/pipe.png" alt="NestJS">

- Filters ✅

<img src=".assets/filter.png" alt="NestJS">

<!-- BADGE LINKS -->
[ack-contributors-shield]: https://img.shields.io/github/contributors/estevam5s/rest-api-nasa?style=for-the-badge
[ack-forks-shield]: https://img.shields.io/github/forks/estevam5s/rest-api-nasa?style=for-the-badge
[ack-stars-shield]: https://img.shields.io/github/stars/estevam5s/rest-api-nasa?style=for-the-badge
[ack-issues-shield]: https://img.shields.io/github/issues/estevam5s/rest-api-nasa?style=for-the-badge
[ack-license-shield]: https://img.shields.io/github/license/estevam5s/rest-api-nasa?style=for-the-badge
[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[mongodb-shield]: https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[yarn-shield]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[docker-shield]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white

<!-- CONTACTS -->
[author-linkedin]: https://linkedin.com/in/estevam5s
[author-instagram]: https://www.instagram.com/___ac.k
[author-email]: mailto:ack@baibay.id
[author-github]: https://github.com/estevam5s

<!-- Repo LINKS -->
[ack-repo]: https://github.com/estevam5s/rest-api-nasa
[ack-e2e]: /e2e
[ack-issues]: https://github.com/estevam5s/rest-api-nasa/issues
[ack-stars]: https://github.com/estevam5s/rest-api-nasa/stargazers
[ack-forks]: https://github.com/estevam5s/rest-api-nasa/network/members
[ack-contributors]: https://github.com/estevam5s/rest-api-nasa/graphs/contributors
[ack-history]: https://github.com/estevam5s/rest-api-nasa/commits/main

<!-- ack microservice -->
[ack-microservice-repo]: https://github.com/estevam5s/ack-microservice-mongoose

<!-- license -->
[license]: LICENSE.md

<!-- Documents -->
[ack-docs]: https://estevam5s.github.io/ack-nestjs-boilerplate-docs/

<!-- Reference -->
[ref-nestjs]: http://nestjs.com
[ref-mongoose]: https://mongoosejs.com/
[ref-mongodb]: https://docs.mongodb.com/
[ref-nodejs-best-practice]: https://github.com/goldbergyoni/nodebestpractices
[ref-nodejs]: https://nodejs.org/
[ref-typescript]: https://www.typescriptlang.org/
[ref-jwt]: https://jwt.io
[ref-jest]: https://jestjs.io/docs/getting-started
[ref-docker]: https://docs.docker.com
[ref-yarn]: https://yarnpkg.com
[ref-postman-import-export]: https://learning.postman.com/docs/getting-started/importing-and-exporting-data/

---

# Authentication

Esses aplicativos usam JSON Web Token (JWT) para lidar com a autenticação. O token é passado com cada solicitação usando o cabeçalho `Authorization` com esquema `Token`. O middleware de autenticação JWT trata da validação e autenticação do token.

---

# Deployment

Você precisa ter o docker e o docker-compose instalados. Além disso, como estamos usando makefiles para implantação, você precisa ter o make instalado.

```sh

  env=dev make deploy    # deploys dev environment
  env=prod make deploy   # deploys prod environment

```

A senha para `redis` e `rabbitmq` é `test@1234` pode ser alterada no arquivo make no script `deploy`

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

---

## License

MIT License

Direitos autorais (c) 2022

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e arquivos de documentação associados (o "Software"), para lidar
no Software sem restrição, incluindo, sem limitação, os direitos
usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e para permitir que as pessoas a quem o Software é
equipado para tal, nas seguintes condições:

O aviso de direitos autorais acima e este aviso de permissão devem ser incluídos em todos os
cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUM CASO A
AUTORES OU DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTROS
RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU DE OUTRA FORMA, DECORRENTE DE,
FORA OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
PROGRAMAS.

---

## BuyMeACoffee

<a href="https://www.buymeacoffee.com/estevamsl" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" width="150" ></a>

---

## Importante

> rest-api-nasa ainda em fase de tentativa e erro e o teste será baseado em projetos ou casos reais. Portanto, haverá (sempre) novas atualizações e novos recursos.

Se você alterar o valor do env de `APP_MODE` para `secure`, isso acionará mais `Middleware` e `Guard`.

1. `TimestampMiddleware`, tolerante a 5 minutos de solicitação.
2. `UserAgentMiddleware`, whitelist do agente do usuário.
3. `ApiKeyGuard`, verifique a chave api com base no banco de dados.
4. `CorsMiddleware`, verifique os cors com base nas configurações.

Você pode ver nosso `arquivo de teste e2e` ou ler a documentação em [seção ambiente][ack-doc-env].

---

## Objetivo

rest-api-nasa tem algum objetivo.

- Simples, escalável e seguro
- Evite o código de espaguete
- Baseado em componentes
- Componente reutilizável
- Fácil manutenção
- Suporte para todos os padrões de microsserviço

---

## Todo

Próximo desenvolvimento

- [x] Importar dados do formulário excel
- [x] Versão 2. Nova estrutura de pastas, novo decorador de upload de arquivos
- [x] Reduza o uso de mixin
- [x] Carregar atualização múltipla do arquivo
- [x] Arquivo grande upload para s3 para vídeo e áudio. usando array de pedaço
- [x] Renomeie o repositório de `ack-nestjs-boilerplate-mongoose` para `rest-api-nasa`
- [x] Mensagem en,id
- [x] Otimize o código, remova o código desnecessário
- [x] Atualizar teste de unidade
- [x] Atualizar teste E2E
- [x] Resposta Excel, converte a resposta do controlador em excel `res.send()`
- [ ] Token básico como ApiKey
- [ ] Atualizar Documentação
---

## Database

<p align="center">
  <a href="https://mikro-orm.io/" target="blank"><img src="https://raw.githubusercontent.com/mikro-orm/mikro-orm/master/docs/static/img/logo-readme.svg?sanitize=true" width="320" alt="Mikro Orm" /></a>
</p>

A base de código de exemplo usa [MikroORM](https://mikro-orm.io/) com um banco de dados Postgres.

Copie o arquivo env de amostra e ajuste as configurações de conexão e outras configurações (jwt, redis, mail, etc) respectivamente no arquivo env de amostra

`Nota`: Os arquivos Env são mantidos na pasta env. A validação de configuração permite 4 ambientes ['dev', 'prod', 'test','stage']. O nome do arquivo env
deve ter o formato .env.[ambiente] Ex. (.env.dev). O env a ser usado deve ser fornecido durante a execução de qualquer script como NODE_ENV=dev npm run dev

Inicie o servidor Postgres local e execute `NODE_ENV=dev make migrate` para aplicar as migrações

Agora você pode iniciar o aplicativo com `NODE_ENV=dev npm run start`.

Nota: Se você estiver usando o Windows, `SET NODE_ENV=dev npm run start`

O env de amostra é gerado usando [sample-env](https://www.github.com/rubiin/sample-env)

---

## **👨‍🚀 Autor**

<!-- colocar uma imagem do autor -->

👋 Meus contatos!

[![Github][github-shield]][author-github]
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/estevam-souza)](https://www.linkedin.com/in/estevam-souza)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:physics.posgrad.@gmail.com)](mailto:estevamsouzalaureth@gmail.com)

<!-- CONTACTS -->
[author-linkedin]: https://linkedin.com/in/estevam5s
[author-email]: mailto:ack@baibay.id
[author-github]: https://github.com/estevam5s

Feito com ❤️ por [Estevam Souza](https://github.com/estevam5s)
