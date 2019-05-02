jest.mock('fs')

const getPackageJsonConfig = require('../index')

describe('package-json-config', () => {
  it('returns the config when it can find the package.json', () => {
    require('fs').__setMockFolders({
      '/home/projects/foo/src/client/lib': null,
      '/home/projects/foo/src/client': null,
      '/home/projects/foo/src': null,
      '/home/projects/foo/package.json': `{
        "name": "foo",
        "testPackageConfig": {
          "testOption": "testValue"
        }
      }`
    })

    const testModule = {
      parent: {
        parent: {
          filename: '/home/projects/foo/src/client/lib/utils.js'
        }
      }
    }

    const config = getPackageJsonConfig('testPackageConfig', testModule)

    expect(config.testOption).toBe('testValue')
  })

  it("throws an error when it can't find the package.json", () => {
    require('fs').__setMockFolders({
      '/home/projects/test-package': null,
      '/home/projects': null,
      '/home': null,
      '/': null
    })

    const testModule = {
      parent: {
        parent: {
          filename: '/home/projects/test-package/config.js'
        }
      }
    }

    const getConfig = () => (
      getPackageJsonConfig('testPackageConfig', testModule)
    )

    expect(getConfig).toThrow(/Unable to find package.json/)
  })
})
