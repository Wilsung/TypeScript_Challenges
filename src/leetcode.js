const houses = require('./houses.json')

let obj = {}
let string_houses = JSON.stringify(houses)
let parse_houses = JSON.parse(string_houses)
let array_houses = []

parse_houses.map(key => array_houses.push(key))
console.log(array_houses)