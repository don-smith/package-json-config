const getConfig = require('package-json-config')

// This module does not intend to work.
// package-json-config must be used from the main entry point into the package.
// This is a submodule of the main entry point to the package.

module.exports = {
  getConfig: name => getConfig(name)
}
