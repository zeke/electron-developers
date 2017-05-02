// users who have explicitly opted out
const blacklist = [
  'edouard-lopez',
  'Daandelange',
  'istx25'
]

const {chain} = require('lodash')
const tally = require('count-array-values')
const repos = require('repos-using-electron').filter(repo => !repo.fork && !repo.formerFork)
const names = chain(repos.map(repo => repo.contributors))
  .flatten()
  .compact()
  .filter(name => !blacklist.includes(name))
  .value()

const counts = tally(names, 'user', 'repos')

process.stdout.write(JSON.stringify(counts, null, 2))
