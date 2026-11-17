const bcrypt = require('bcrypt')
const myPassword = '123abc';
console.time("Time to generate salt: ")
const salt = bcrypt.genSaltSync(20)
console.log("siin on sool: " + salt)
console.timeEnd("Time to generate salt: ")

console.time("Time to generate hash: ")
const hashedPassword = bcrypt.hashSync(myPassword, salt);
console.log(myPassword + " on parool")
console.log(hashedPassword + " on hashitud parool")
console.timeEnd("Time to generate hash: ")