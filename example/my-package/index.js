// Works:
const getConfig = require('package-json-config')

// Does NOT work: don't use from inside a submodule
// const { getConfig } = require('./config')

module.exports = {
  sayHello: () => {
    // Works:
    const config = getConfig('my-package')

    // Does NOT work: don't use from inside a submodule
    // const config = getConfig('my-package')

    // eslint-disable-next-line no-console
    console.log(`\nHello, ${config.user}.`)
  }
}
