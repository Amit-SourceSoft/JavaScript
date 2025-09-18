function calculateCartPrice(val1,  valr2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user ={
    username : "AMit",
    prices:1999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username : "Sam",
    prices:2999
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue (getArray) {
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,500]))