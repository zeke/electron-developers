const fs = require('fs')
const path = require('path')
const isNumber = require('is-number')
const users = fs.readdirSync(path.join(__dirname, '../profiles'))
  .filter(filename => filename.match('.json'))
  .map(filename => require(path.join(__dirname, `../profiles/${filename}`)))
  .filter(user => !isNumber(user.login))
  .map(user => {
    delete user.user
    return user
  })
  .sort((a, b) => b.repos - a.repos)

process.stdout.write(JSON.stringify(users, null, 2))
