# Database

## Description

Package with database for the main app

## Setup

Ask somebody for the database url and paste it into environment file

## Commands

```shell
# generates types from schema models
yarn db:generate

# runs ui where you can have a look on db's data
yarn prisma:studio

# builds code generated from schema
yarn db:build

# pushes models from your schema to db
yarn db:push

# pulls models from the db to your schema
yarn db:pull
```
