# package-json-config

Making it easy for your npm package to save its config in the host application's `package.json`.


## Installation

```sh
npm install package-json-config
```


## Usage

```js
// some-app/package.json

{
  "name": "some-app",
  "greeterConfig": {
    "recipient": "Mr. Anderson"
  }
}
```

```js
// some-app/index.js
const greet = require('greeter')
greet()
```

```js
// greeter/index.js

const getConfig = require('package-json-config')
const config = getConfig('greeterConfig')

module.exports = function () {
  console.log(`Hello, ${config.recipient}.`)
}
```

## Documentation

In this repo, you can find a working [example and instructions for how to run it](example).
