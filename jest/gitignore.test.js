const fs = require('fs')
const { includes, split } = require('lodash')

describe('.gitignore', () => {
  test('gitignoreで最低限の除外はできている', () => {
    let gitIgnore = fs.readFileSync('.gitignore', 'utf8')
    gitIgnore = split(gitIgnore, '\n')

    expect(includes(gitIgnore, '.htaccess')).toBe(true)
    expect(includes(gitIgnore, '.env')).toBe(true)
    expect(includes(gitIgnore, 'cypress.env.json')).toBe(true)
    expect(includes(gitIgnore, 'node_modules/')).toBe(true)
  })
})
