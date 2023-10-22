const rustParser = require('./pkg/rust_parser')
const fs = require('node:fs')

const json = fs.readFileSync('./prehome-page.json', "utf8")

console.info(rustParser)

const count = rustParser.add(2, 5)
console.log(count)

const message = rustParser.say('djo')
console.log(message)

console.info(json)
const object = rustParser.parse(json)
console.log(object)
