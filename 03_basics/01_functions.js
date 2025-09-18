// console.log("A")
// console.log("M")
// console.log("I")
// console.log("T")

function sayMyName () {
    console.log("A")
console.log("M")
console.log("I")
console.log("T")
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    let result=number1 + number2
    
    return result
    console.log("amdifh") // unreachable code
}

const result=addTwoNumbers("a","b")
//console.log("Result:",result)


function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("amit_kumar"))
console.log((loginUserMessage("bjb")))