# electron-developers

> A collection of GitHub profiles for users who work on Electron-related projects

Powered by [repos-using-electron]. Created to
[answer a question](https://twitter.com/alpennec/status/836148560806744064).

## Installation

```sh
yarn add electron-developers
```

## Usage

Here's an example that finds developers based in France.

```js
const devs = require('electron-developers')

console.log(`
## Electron Developers in France

Login | Name | Company | Location | Repos
--- | --- | --- | --- | ----`)

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

```

The above example yields the following results:

## Electron Developers in France

Login | Name | Company | Location | Repos
--- | --- | --- | --- | ----
[@posva](https://github.com/posva) | Eduardo San Martin Morote |  | Paris  | 7
[@Waxo](https://github.com/Waxo) | Maxime ROBIN |  | France | 4
[@gabrielstuff](https://github.com/gabrielstuff) | Gabriel | Soixante circuits | Paris, France | 4
[@MichelKansou](https://github.com/MichelKansou) | Michel Kansou |  | France | 4
[@Haroenv](https://github.com/Haroenv) | Haroen Viaene | intern @algolia | Paris, France | 4
[@Cyriaqu3](https://github.com/Cyriaqu3) | Cyriaque DELAUNAY |  | France | 4
[@Bernardstanislas](https://github.com/Bernardstanislas) | Stanislas Bernard | @theodo  | Paris, France | 3
[@Aelto](https://github.com/Aelto) | Thibault H |  | France | 3
[@clementlamoureux](https://github.com/clementlamoureux) | Clément Lamoureux |  | Bordeaux, France | 2
[@cronvel](https://github.com/cronvel) | Cedric Ronvel | Freelance | Paris / Aubenas (France) | 2
[@danhe](https://github.com/danhe) | Dan HE |  | Nice, France | 2
[@JeremieDrazic](https://github.com/JeremieDrazic) | jeremie drazic | Big Youth | Paris | 2
[@deathart](https://github.com/deathart) | Deathart |  | Lille, Nord, FRANCE | 2
[@Litarvan](https://github.com/Litarvan) | Adrien Navratil |  | Montpellier, France | 2
[@ebriand](https://github.com/ebriand) | Eric Briand | @Zenika  | Nantes, France | 2
[@BenjaminVanRyseghem](https://github.com/BenjaminVanRyseghem) | Benjamin Van Ryseghem | Företagsplatsen | Brest, France | 2
[@BlitzBanana](https://github.com/BlitzBanana) | Victor Rebiard--Crépin |  | France | 2
[@iam4x](https://github.com/iam4x) | Max Tyler | @savemysmartphone  | Paris, France | 2
[@Rictus](https://github.com/Rictus) | Dylan Leroux |  | France | 2
[@St-Ex](https://github.com/St-Ex) | Thomas de Saint-Exupéry | B-Appli Studio | Ploërmel, France | 2
[@Thebigbignooby](https://github.com/Thebigbignooby) | Rory Dent |  | Paris, France | 2
[@k33g](https://github.com/k33g) | Philippe Charrière | TypeUnsafe | Lyon (France) | 2
[@kaepora](https://github.com/kaepora) | Nadim Kobeissi | INRIA | Paris, France | 2
[@mlpo](https://github.com/mlpo) |  |  | France | 2
[@nayed](https://github.com/nayed) | Nayed Saïd Ali |  | Lyon, France | 2
[@nicoschmitt](https://github.com/nicoschmitt) | nico |  | Paris | 2
[@olivmonnier](https://github.com/olivmonnier) | Olivier Monnier |  | Paris | 2
[@rom1504](https://github.com/rom1504) | Romain Beaumont |  | Orsay, France | 2
[@sawyerlin](https://github.com/sawyerlin) | Sawyer | Hubee | Paris | 2
[@shug0](https://github.com/shug0) | Thomas Alberola | Ekino | Bordeaux, France | 2
[@GregLa](https://github.com/GregLa) | Grégoire Lagoutte |  | France | 2
[@cedced19](https://github.com/cedced19) | Cédric JUNG |  | France | 2
[@vincent](https://github.com/vincent) | Vincent Lark |  | France | 2
[@yciabaud](https://github.com/yciabaud) | Yoann Ciabaud | @sonoralabs  | Marseille, France | 2
[@alecannetdesdame](https://github.com/alecannetdesdame) |  |  | Paris,France | 1
[@alexstrat](https://github.com/alexstrat) | Alexandre Lacheze | eFounders | Paris, France | 1
[@anaibol](https://github.com/anaibol) | Anibal |  | France | 1
[@archiloque](https://github.com/archiloque) | Julien Kirch |  | Paris, France | 1
[@armaldio](https://github.com/armaldio) | Quentin Goinaud |  | France | 1
[@Djedj](https://github.com/Djedj) |  | Askia | Paris | 1
[@DrBenton](https://github.com/DrBenton) | Olivier Philippon | @KnpLabs  | Paris, France | 1
[@benavern](https://github.com/benavern) | Benjamin CARADEUC | Web Developper Engineer | France | 1
[@bhou](https://github.com/bhou) | Bo HOU |  | Paris | 1
[@billouboq](https://github.com/billouboq) | Gatsbill | Gatsbill | France | 1
[@brucelane](https://github.com/brucelane) | Bruce LANE | Bruce LANE | Alpes maritimes, France | 1
[@chambo-e](https://github.com/chambo-e) | Manu Chambon |  | France | 1
[@Franky47](https://github.com/Franky47) | Francois Best |  | Grenoble, France | 1
[@chreble](https://github.com/chreble) | Christophe Eblé |  | Saint-Valery-Sur-Somme, France | 1
[@chteuchteu](https://github.com/chteuchteu) | Quentin Stoeckel |  | Strasbourg, France | 1
[@clems71](https://github.com/clems71) | Clement JACOB | Allegorithmic | Clermont-Ferrand, France | 1
[@G-Ray](https://github.com/G-Ray) | Geoffrey Bonneville | GetPlus | France | 1
[@codl](https://github.com/codl) | codl |  | Quimper, France | 1
[@cpayen](https://github.com/cpayen) | Camille Payen |  | Rouen, France | 1
[@cyrilschumacher](https://github.com/cyrilschumacher) | Cyril Schumacher |  | France | 1
[@dcarlus](https://github.com/dcarlus) | Denis CARLUS |  | France | 1
[@edouard-lopez](https://github.com/edouard-lopez) | Édouard Lopez | Web Stack Developer (Freelance) | France | 1
[@JiDW](https://github.com/JiDW) | Mathias Latournerie | Celsius online | Paris | 1
[@enguerranws](https://github.com/enguerranws) | Enguerran Weiss |  | France | 1
[@JulienTant](https://github.com/JulienTant) | Julien Tant | Freelance | Paris, France | 1
[@farfromrefug](https://github.com/farfromrefug) | Martin Guillon | Akylas | France | 1
[@fbmfbm](https://github.com/fbmfbm) | fbmfbm | fbm | Paris | 1
[@Kaeldazs](https://github.com/Kaeldazs) | Camille Sardin |  | Clermont-Ferrand, France | 1
[@fix](https://github.com/fix) | François-Xavier Thoorens |  | France | 1
[@florianorpeliere](https://github.com/florianorpeliere) | Florian Orpelière | SFEIR | France | 1
[@frntn](https://github.com/frntn) | Matthieu Fronton | Ekino | Paris | 1
[@BenjaminBini](https://github.com/BenjaminBini) | Benjamin Bini | Sully Group | Strasbourg, France | 1
[@AbelIngrand](https://github.com/AbelIngrand) | Abel Ingrand | iKiwi | Toulouse, France | 1
[@genki81](https://github.com/genki81) | Thomas BILLARD |  | France | 1
[@geowarin](https://github.com/geowarin) | Geoffroy Warin | Freelancer | Paris, France | 1
[@glafarge](https://github.com/glafarge) | Guillaume Lafarge | PRYSME | Bordeaux, France | 1
[@glurp](https://github.com/glurp) | Abby Archer |  | paris, france | 1
[@godu](https://github.com/godu) | Arthur Weber | CoorpAcademy | Levallois-Perret, France | 1
[@LukyVj](https://github.com/LukyVj) | Lucas Bonomi | Frontend Engineer @Algolia  | Paris | 1
[@Lunik](https://github.com/Lunik) | Lunik | Université Lyon 1 | Lyon, France | 1
[@grifdail](https://github.com/grifdail) | Julien |  | Orly France | 1
[@guidouil](https://github.com/guidouil) | Guillaume Darbonne | Loyali | Caen, France | 1
[@gwendoux](https://github.com/gwendoux) | gwen |  | France | 1
[@hackliff](https://github.com/hackliff) | hackliff | AppTurbo | Paris, France | 1
[@MamadouSy](https://github.com/MamadouSy) | Mamadou Sy | Askia | Paris, France | 1
[@Margoot](https://github.com/Margoot) | LE ROUZIC Margot |  | Paris | 1
[@Mathew78540](https://github.com/Mathew78540) | Mathieu | @Seekube  | France | 1
[@iamdey](https://github.com/iamdey) | David Epely | @Gandi | France | 1
[@Metrakit](https://github.com/Metrakit) | Jordane | Addactis Worldwide | France | 1
[@ikwattro](https://github.com/ikwattro) | Christophe Willemsen | @graphaware  | London - Brussels - Paris | 1
[@MoOx](https://github.com/MoOx) | Maxime Thirouin | MoOx.io | Toulouse, France | 1
[@itscaro](https://github.com/itscaro) | Minh-Quan Tran |  | Paris, France | 1
[@ivangabriele](https://github.com/ivangabriele) | Ivan Gabriele |  | Paris | 1
[@jabby](https://github.com/jabby) | jabby |  | Nantes, France | 1
[@jacomyal](https://github.com/jacomyal) | Alexis Jacomy | Atelier Iceberg | Nantes, France | 1
[@jb1717](https://github.com/jb1717) | Jean-Baptiste Grégoire |  | Bordeaux, France | 1
[@jbleuzen](https://github.com/jbleuzen) | Johan Bleuzen | Molotov | Paris, France, Earth | 1
[@jdubois](https://github.com/jdubois) | Julien Dubois | @ippontech  | Suresnes, France | 1
[@jechazelle](https://github.com/jechazelle) | Jérémie CHAZELLE |  | Paris | 1
[@jeromeludmann](https://github.com/jeromeludmann) | Jérôme Ludmann |  | France | 1
[@Calvein](https://github.com/Calvein) | François Robichet |  | Nantes, France | 1
[@Pangoraw](https://github.com/Pangoraw) | Paul |  | France | 1
[@julien-gargot](https://github.com/julien-gargot) | Julien G. | g.u.i. | Paris | 1
[@Pierrotws](https://github.com/Pierrotws) | Pierre Sauvage | Adaltas | Paris | 1
[@kaktus40](https://github.com/kaktus40) |  |  | Paris | 1
[@Prattjames](https://github.com/Prattjames) | J. Pratt-Delzenne |  | France | 1
[@Pravez](https://github.com/Pravez) | Paul Breton | ENSEIRB-MATMECA | Bordeaux, France | 1
[@kartsims](https://github.com/kartsims) | Simon Tarchichi |  | France | 1
[@PunKeel](https://github.com/PunKeel) | PunKeel | PopCorp | Paris, France | 1
[@kraynel](https://github.com/kraynel) | Kevin Raynel | @theodo  | Paris | 1
[@lalop](https://github.com/lalop) | Samuel Laulhau | Lalop | Paris, France | 1
[@lethom](https://github.com/lethom) | Thomas Letan |  | Paris | 1
[@ludohenin](https://github.com/ludohenin) | Ludovic HENIN |  | France | 1
[@Romakita](https://github.com/Romakita) | Romain Lenzotti | Valtech | Ile-de-france, France | 1
[@Rudloff](https://github.com/Rudloff) | Pierre Rudloff |  | Strasbourg, France | 1
[@meriadec](https://github.com/meriadec) | Meriadec Pillet | @mailjet | Paris, France | 1
[@michaelchiche](https://github.com/michaelchiche) | Michael |  | France | 1
[@SamyPesse](https://github.com/SamyPesse) | Samy Pessé | GitBook | Lyon, France | 1
[@mikaa123](https://github.com/mikaa123) | Michael Sokol |  | Paris, France | 1
[@motet-a](https://github.com/motet-a) | Antoine Motet | EPITECH | Lyon, France | 1
[@mpapillon](https://github.com/mpapillon) | Maxence Papillon | @Capgemini | France | 1
[@n457](https://github.com/n457) |  | twitter.com/n457_media | France | 1
[@na-ji](https://github.com/na-ji) | Naji Astier | @BDE-ESIEE  | France | 1
[@nashe](https://github.com/nashe) | Thomas Chauchefoin |  | Paris | 1
[@ngarnier](https://github.com/ngarnier) | Nicolas Garnier | Mailjet | Paris | 1
[@Swop](https://github.com/Swop) | Sylvain Mauduit | @etsy | Paris, France | 1
[@pierr](https://github.com/pierr) | Pierre Besson |  | Paris | 1
[@pwnsdx](https://github.com/pwnsdx) | Sabri |  | Paris, France | 1
[@qneyrat](https://github.com/qneyrat) | Quentin Neyrat | @Raccourci  | La Rochelle / France | 1
[@raf924](https://github.com/raf924) | Rafaël Naciri |  | France | 1
[@Thumberd](https://github.com/Thumberd) | Albrecht Jérémy |  | France | 1
[@TimPetricola](https://github.com/TimPetricola) | Tim Petricola | @drivy | Paris, France | 1
[@Toinane](https://github.com/Toinane) | Toinane |  | France | 1
[@TomGallon](https://github.com/TomGallon) | Thomas Gallon | Work on @get-focus at @KleeGroup  | Paris | 1
[@robin-dela](https://github.com/robin-dela) | Robin Delaporte |  | Paris, France | 1
[@robin850](https://github.com/robin850) | Robin Dupret |  | France | 1
[@run1t](https://github.com/run1t) |  |  | france | 1
[@Veejay](https://github.com/Veejay) | Bertrand Chardon | Orson | Paris, France | 1
[@sewnboy](https://github.com/sewnboy) | Hdrn BRND |  | Lyon, France | 1
[@shprink](https://github.com/shprink) | Julien Renaux | @toptal | Toulouse, France | 1
[@Zevran](https://github.com/Zevran) | Gaël Reyrol | SoyHuCe | France, Caen | 1
[@stephomi](https://github.com/stephomi) | Stéphane GINIER | Sketchfab | Paris, France | 1
[@sylvaindumont](https://github.com/sylvaindumont) | Sylvain Dumont | WebOaks | France | 1
[@tkrugg](https://github.com/tkrugg) | Youcef Mammar | IBM Smarter Process | Paris, France | 1
[@adrienbrault](https://github.com/adrienbrault) | Adrien Brault |  | Paris area, France | 1
[@valette](https://github.com/valette) | Sébastien Valette | CNRS, CREATIS | Lyon, France | 1
[@vestri](https://github.com/vestri) | Christophe Vestri | 3DVTech | France | 1
[@vincelwt](https://github.com/vincelwt) | Vincent |  | France | 1
[@Daandelange](https://github.com/Daandelange) | Daan de Lange | @Karma-Kusala  | France | 1
[@w8r](https://github.com/w8r) | Alexander Milevski | Wikimapia | Paris | 1
[@welcoMattic](https://github.com/welcoMattic) | Mathieu Santo Stefano--Féron | JoliCode | Paris | 1
[@DanGeffroy](https://github.com/DanGeffroy) | Dan Geffroy |  | Nantes / France | 1
[@yadomi](https://github.com/yadomi) | Felix Yadomi | @ThunderCake   | France | 1
[@ale-batt](https://github.com/ale-batt) | Albert Le Batteux | 42 | Paris | 1


## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [count-array-values](): Count the instances of each value in an array
- [dotenv-safe](https://github.com/rolodato/dotenv-safe): Load environment variables from .env and ensure they are defined
- [gh-user](): Get user info from a GitHub username
- [is-number](): Returns true if the value is a number. comprehensive tests.
- [limiter](): A generic rate limiter for node.js. Useful for API clients, web crawling, or other tasks that need to be throttled
- [lodash](): Lodash modular utilities.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [npm-run-all](): A CLI tool to run multiple npm-scripts in parallel or sequential.
- [repos-using-electron](): A collection of all public repositories on GitHub that depend on `electron-prebuilt`
- [standard](https://github.com/feross/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT


[repos-using-electron]: https://github.com/electron/repos-using-electron
