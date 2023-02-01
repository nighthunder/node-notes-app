const add = require("./utils.js")
const validator = require("validator")
const getNotes = require("./notes.js")

const msg = getNotes()

console.log(add(5,4))
console.log(msg)
console.log(validator.isEmail("mAya@yahoo.com"))
console.log(validator.isURL("http://go oglecom.net"))