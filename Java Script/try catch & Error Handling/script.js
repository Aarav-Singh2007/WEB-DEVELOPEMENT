let a = prompt("Enter a number")
let b = prompt("Enter anoter number")
if (isNaN(a)|| isNaN(b)){
    throw SyntaxError("Sorry this is not possible")
}
let sum = parseInt(a)+parseInt(b) 
console.log("The sum is ", sum*x)