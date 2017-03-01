const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const developers = require('.')

describe('developers', () => {
  it('is an array', () => {
    expect(developers).to.be.an('array')
  })

  it('includes over 5000 user profiles', () => {
    expect(developers.length).to.be.above(5000)
  })

  it('sorts the array by repo count, descending', () => {
    expect(developers[0].repos).to.be.above(10)
    expect(developers[0].repos).to.be.above(developers[10].repos)
  })
})
