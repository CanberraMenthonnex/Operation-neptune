# Operation-neptune

## Description

Operation Neptune is a web application that help the game master during a role-playing game session. It provides a way to manage the characters and the scenarios.
It is a mono-repo that contains the [client](./client/README.md), the [api](./api/README.md) server and the [ia](./ia/README.md) server.

### Technologies

- React
- Express
- Mistral
- Flask

More information in the README of each directory :

- [Client](./client/README.md)
- [Api](./api/README.md)
- [IA](./ia/README.md)

### Context

This repository was developed as an academic project for the course of Software Architecture.

## Commands

### Install
```bash
npm install
```

### Run in development mode

```bash
npm dev
```

This command will start the client application at [http://localhost:5173](http://localhost:5173/) and the api server at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```



