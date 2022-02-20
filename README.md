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