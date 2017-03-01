const devs = require('.')

console.log(`
## Electron Developers in France

Login | Name | Company | Location | Repos
--- | --- | --- | --- | ----
`)

devs
  .filter(dev => dev.location && dev.location.length)
  .filter(dev => !!dev.location.match(/(france|paris)/i))
  .forEach(dev => {
    const row = [
      `[@${dev.login}](https://github.com/${dev.login})`,
      dev.name,
      dev.company,
      dev.location,
      dev.repos
    ]
    console.log(row.join(' | '))
  })
