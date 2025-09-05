//primitive data types
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 2342543985907520374598017n



//Refrence data type or No rimitive data types
//Array, Objects, Functions

const heros = ['saktiman', 'naagraj', 'doga']

let obj1 = {
    name:"amit kumar",
    age:22
}

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp)