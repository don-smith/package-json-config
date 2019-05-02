const fs = jest.genMockFromModule('fs')

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFolders = Object.create(null)

function __setMockFolders (newMockFolders) {
  mockFolders = { ...newMockFolders }
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readFileSync (filePath) {
  if (mockFolders[filePath]) {
    return mockFolders[filePath]
  }

  throw new Error('File not found')
}

fs.__setMockFolders = __setMockFolders
fs.readFileSync = readFileSync

module.exports = fs
