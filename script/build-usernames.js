const {chain} = require('lodash')
const tally = require('count-array-values')
const repos = require('repos-using-electron').filter(repo => !repo.fork && !repo.formerFork)
const names = chain(repos.map(repo => repo.contributors))
  .flatten()
  .compact()
  .value()

const counts = tally(names, 'user', 'repos')

process.stdout.write(JSON.stringify(counts, null, 2))
