# Todo

## Setup

```shell
git clone https://github.com/ask-me-proj/todo.git
cd todo
yarn -i
yarn db:generate
yarn build
yarn dev
```

## How to install new packages

For installing new package, write this command:

```shell
yarn workspace [workspace_name] add [package_name]
```

Where `workspace_name` - name of the workspace, where you will install the package, you can find it in `name` field of `package.json` file
