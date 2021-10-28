<h1 align="center">Welcome to NLW Heat 2021 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
  <a href="https://github.com/marcelorbueno/nlw-heat-2021#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kefranabg/readme-md-generator/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/marcelorbueno/nlw-heat-2021/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://camo.githubusercontent.com/408116b648180becb83ae93945100c71de70f661b61f1b637bc69401972108b0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d79656c6c6f772e737667" />
  </a>
  <a href="https://twitter.com/marcelorezbueno" target="_blank">
    <img alt="Twitter: marcelorezbueno" src="https://img.shields.io/twitter/follow/marcelorezbueno.svg?style=social" />
  </a>
</p>

> Repositório que contém os códigos da aplicação construída durante o NLW Heat 2021.

### 🏠 [Homepage](https://github.com/marcelorbueno/nlw-heat-2021#readme)

## Prerequisites

- npm >=5.5.0
- node >=9.3.0

## Techmologies

- ReactJS
- NodeJS
- Prisma
- Github Authentication
- Typescript

## Screenshots

### Authentication view:

![alt Authentication View](docs/images/doc-001.png "Authentication View")

### Index View:

![alt Index View](docs/images/doc-002.png "Index View")

## Install

```sh
# Clone this repository
$ git clone https://github.com/marcelorbueno/nlw-heat-2021

# Go into frontend module
$ cd web

# Install dependencies
$ yarn

# Go into backend module
$ cd ../backend

# Install dependencies
$ yarn

# Set values to .env fields
# More info at https://docs.github.com/pt/rest/guides/basics-of-authentication
GITHUB_CLIENT_SECRET=
GITHUB_CLIENT_ID=

# Preference large random alpha numeric value
JWT_SECRET=

# Run Prisma Migrations
$ yarn prisma migrate dev
```

## Usage

```sh
# Go into frontend module
$ cd web

# Install dependencies
$ yarn dev

# Go into backend module
$ cd ../backend

# Install dependencies
$ yarn dev
```

- Run in:\
  <http://localhost:3000>

## Run tests

```sh
yarn test
```

## Author

👤 **Marcelo Bueno**

- Website: http://marcelorbueno.com
- Twitter: [@marcelorezbueno](https://twitter.com/marcelorezbueno)
- Github: [@marcelorbueno](https://github.com/marcelorbueno)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Marcelo Bueno](https://github.com/marcelorbueno).<br />
This project is [MIT](https://github.com/marcelorbueno/nlw-heat-2021/blob/main/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
