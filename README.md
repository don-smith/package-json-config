# package-json-config

Making it easy for your npm package to save its config in the host application's `package.json`.


## Installation

```sh
npm install package-json-config
```


## Usage

Some App is an application that has taken a dependency on your npm package, Greeter.

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
// some-app/node_modules/greeter/index.js

const getConfig = require('package-json-config')
const config = getConfig('greeterConfig')

module.exports = function () {
  console.log(`Hello, ${config.recipient}.`) // Hello, Mr. Anderson.
}
```


## Documentation

In this repo, you can find a working [example and instructions for how to run it](https://github.com/don-smith/package-json-config/tree/master/example).


## The Important Caveat

You must use `package-json-config` in the entry-point module of your npm package. It uses `module.parent.parent` to find the module using your package so you **must** use `package-json-config` in the entry point (index.js) of your package. If you find this makes using `package-json-config` too difficult in your package, submit a new [issue](https://github.com/don-smith/package-json-config/issues) describing your scenario and I'll see what I can do. [Pull requests](https://github.com/don-smith-package-json-config/pulls) are encouraged as well :wink:
