# Todo

## Setup

## Setup an app

```shell
git clone https://github.com/ask-me-proj/todo.git
```

```shell
cd todo
```

```shell
yarn -i
```

### Setup a database

Firstly ask somebody for database url, then create `.env` file at the `packages/database`, add `DATABASE_URL` variable with your db url value. After these steps run following commands:

```shell
# generates type from your schema models
yarn db:generate
```

```shell
# builds code generated from schema
yarn db:build
```

## Running the app

```shell
yarn dev
```

## Testing

```shell
yarn test
```

## Linting

```shell
yarn lint
```

## How to install new packages

For installing new package, write this command:

```shell
yarn workspace [workspace_name] add [package_name]
```

Where `workspace_name` - name of the workspace, where you will install the package, you can find it in `name` field of `package.json` file
