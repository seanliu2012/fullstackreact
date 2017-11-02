## How to run
In first termial, bundle all files by using `webpack`.
```shell
yarn webpack
```

In second termial, launch `nodemon` and start development.
```shell
yarn dev
```

## Steps to set up

### Global commands
On Windows, we make some commands globally available.
```shell
npm i -g babel-cli nodemon
```

### Set up ESLint
First of all, linting should be in place.
```shell
yarn add --dev eslint eslint-plugin-react babel-eslint
```

### Server side
Use `Express` as web framework, and `Ejs` as the view/template engine. Feel free for other choices if desired.
```shell
yarn add express ejs
```

Add babel packages for ES6 syntax.
```shell
yarn add babel-preset-env babel-preset-react babel-preset-stage-2
```

Update `package.json` for babel.
```json
  "babel": {
    "presets": [
      "react",
      "env",
      "stage-2"
    ]
  },
```

Update `package.json` for nodemon.
```json
  "scripts": {
    "dev": "nodemon --exec babel-node lib/server.js",
  },
```

### Client side
Add packages for using `react` and `webpack`.
```shell
yarn add react react-dom
yarn add babel-core babel-loader babel-polyfill
yarn add webpack
```

Edit `webpack.config.js`
 * Add babel-polyfill as the first entry
 * In module > rules, exclude node_modules and use babel-loader

Update `package.json` for bundling via webpack.
```json
  "scripts": {
    "dev": "nodemon --exec babel-node lib/server.js",
    "webpack": "webpack -wd"
  },
```

### Tests
Add packages for using react and webpack.
```shell
yarn add --dev jest
```

Update `package.json` for unit testing.
```json
  "scripts": {
    "dev": "nodemon --exec babel-node lib/server.js",
    "webpack": "webpack -wd",
    "test": "jest --watch"
  },
```
