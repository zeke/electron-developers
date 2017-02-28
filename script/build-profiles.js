require('dotenv-safe').load()

const {chain} = require('lodash')
const fs = require('fs')
const path = require('path')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(5000, 'hour')
const ghUser = require('gh-user')
const users = require('../usernames.json')

users
.slice(0,3)
.forEach(user => {
  const username = user.user
  const cachedFile = path.join(__dirname, `../profiles/${username}.json`)

  if (fs.existsSync(cachedFile)) {
    console.log(`${username} (already cached)`)
    return
  }

  limiter.removeTokens(1, () => {
    ghUser(username, process.env.GITHUB_TOKEN).then(profile => {
      fs.writeFileSync(
        cachedFile,
        JSON.stringify(Object.assign(user, profile), null, 2)
      )
      console.log(`${username}`)
    })
  })
})
