<p align="center">
  Junior nodejs task repository by Andrzej Jagielski.
</p>

## Installation

```bash
$ npm install
```
## MySql 

Mysql confing is included in src/config/typeorm.config.ts
change the data if needed.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Routes

GET || GET ALL http://127.0.0.1:3000/product
GET || GET ONE http://127.0.0.1:3000/product/:id
POST || CREATE http://127.0.0.1:3000/product
PATCH || UPDATE http://127.0.0.1:3000/product/:id
DELETE || DELETE http://127.0.0.1:3000/product/:id

