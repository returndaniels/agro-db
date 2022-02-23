# AGRO DB v1.0.0
Agro DB is your platform to manage and organize agricultural equipment in a simple and agile way.

## Installation

Use git clone to clone the repository. Then install the dependencies with npm.

```bash
git clone git@github.com:returndaniels/agro-db.git
cd agro-db

npm install
```

## $ Scripts

In the project directory you can run:
`npm start` or `npm run dev`


## Project structure

```/controllers``` - Contains all the functions with the logic of the APIs.

```/routes``` - Contains all routes created using Express Router and what they do is exported from a controller file.

```/models``` - Contains all schema files.

```/database``` - Contains the mongodb database connection file.

```/index.js``` - This file is be the entry point of the Express application.

```
agro-db/
├── controllers/
├── routes/
├── models/
├── database/
└── index.js
```


## Dependencies
```
agro-db@1.0.0 /agro-db
├── body-parser@1.19.2
├── cors@2.8.5
├── dotenv@16.0.0
├── express@4.17.3
├── http@0.0.1-security
├── mongodb@4.4.0
├── mongoose@6.2.2
└── nodemon@2.0.15
```

## Architecture Diagram
The project's architecture was based on a simple structure, very common in small projects made in Node.js. It has some traits similar to the MVC design pattern.

![Architecture Diagram](./git/Agro%20DB%20Server.drawio.svg)

## API

Server: [https://agro-db-backend.herokuapp.com](https://agro-db-backend.herokuapp.com)

This document is a brief manual that will serve as a basis for working on the Project - from the front-end in Node.js - in an independent professional way, maintaining the API standard described in it.


## POST Create tractor

Endpoint: ```/tractors```

This endpoint will be used to add tractors to the system. When using a tractor, the inserted data is returned in the Response json.

### Body
```json
{
    "name": "Trator Estreito 5EN",
    "description": "Tranquilidade e confiança, válido...",
    "imageUrl": null,
    "modelYear": "2020",
    "model": "John Deere 5EN"
}
```

### Response
```json
{
    "tractor": {
        "name": "Trator Estreito 5EN",
        "description": "Tranquilidade e confiança, válido...",
        "imageUrl": "https://ik.imagekit.io/returndaniels/logo-agro-db_3-Tm1nl4m.jpg",
        "modelYear": "2020",
        "model": "John Deere 5EN"
    }
}
```

### Error Response
```json
{
    "message": "Tractor name already exists."
}
```

## GET Fetch tractors

Endpoint: ```/tractors```

This endpoint will be used to search for all registered tractors.

### Response
```json
[
  {
    "_id":"62127575baa8a55595ca4a7d",
    "name":"Trator Estreito 5EN",
    "model":"John Deere 5EN",
    "modelYear":"2017-01-01T00:00:00.000Z",
    "description":"Tranquilidade e confiança, válido...",
    "imageUrl":"https://ik.imagekit.io/returndaniels/logo-agro-db_3-Tm1nl4m.jpg",
    "createdAt":"2022-02-20T17:08:05.172Z",
    "updatedAt":"2022-02-23T15:44:46.536Z",
    "__v":0,
    "value":null
  }
]
```

## DELETE Delete tractor by name

Endpoint: ```/tractors```

This endpoint will be used to remove a registered tractor.

### Body
```json
{
    "name": "Trator Estreito 5EN"
}
```

### Error Response
```json
{
    "message": "Bad request"
}
```


## PATCH Update tractor by name

Endpoint: ```/tractors```

This endpoint will be used to update a registered tractor.

### Body
```json
{
    "name": "Trator Estreito 5EN",
    "data": {
        "modelYear": "2021"
    }
}
```

### Response
```json
{
    "message": "Updated",
    "tractor": {
        "_id": "62127575baa8a55595ca4a7d",
        "name": "Trator Estreito 5EN",
        "model": "John Deere 5EN",
        "modelYear": "2021-01-01T00:00:00.000Z",
        "description": "Tranquilidade e confiança, válido...",
        "imageUrl": "https://ik.imagekit.io/returndaniels/logo-agro-db_3-Tm1nl4m.jpg",
        "createdAt": "2022-02-20T17:08:05.172Z",
        "updatedAt": "2022-02-23T22:16:49.333Z",
        "__v": 0,
        "value": null
    }
}
```

### Error Response
```json
{
    "message": "Bad request"
}
```