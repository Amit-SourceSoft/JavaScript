// singelton
//Object.create

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Amit",
    "full name":"Amit Kumar Sahani",
    [mySym]:"mykey1",
    age:25,
    location:"Jaipur",
    email:"amit@google.com",
    inLoggedIn:false,
    lastLoginDate:["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="chatgpt@gmail.com"
console.log(JsUser["email"])
//Object.freeze(JsUser)
JsUser.email = "micro@gmail.com"
console.log(JsUser)

JsUser.greeting =  function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo =  function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())