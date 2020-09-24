import Person from "./Person.js"
import { getFibNum } from "./fibonacci-calculator.js"

const person = new Person("George Campbell", "Worthington, Ohio", getFibNum(23))

console.log(getFibNum(3))
console.log(person)
