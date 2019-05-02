/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

module.exports = function getPackageJsonConfig (packageName, thisModule = module) {
  const start = path.dirname(thisModule.parent.parent.filename)
  const packageJson = 'package.json'
  let atPartitionRoot = false
  let found = false
  let level = 0

  while (!found && !atPartitionRoot) {
    const levelsUp = new Array(level).fill('..')
    const currentPath = path.join(start, ...levelsUp, packageJson)
    atPartitionRoot = currentPath === `/${packageJson}`

    try {
      const contents = fs.readFileSync(currentPath, 'utf-8')
      found = true
      return JSON.parse(contents)[packageName]
    } catch (err) {
      // ignore the current error to try the next path
    }

    level += 1
  }

  if (!found) {
    throw new Error(`Unable to find ${packageJson}. Make sure you are invoking package-json-config in the entry point module of your package (index.js).`)
  }
}
