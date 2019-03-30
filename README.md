# Node with typescript

```js
yarn add -D typescript sucrase
yarn add -D nodemon
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

yarn eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
? What format do you want your config file to be in? JavaScript

delete package-lock.json
yarn

add this config on editor:
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
]

yarn add prettier eslint-config-prettier  eslint-plugin-prettier

yarn add express cors mongoose
yarn add -D @types/express @types/cors @types/mongoose
```