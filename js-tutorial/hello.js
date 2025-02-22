//let and const are preferred over var because they provide better scoping, 
// avoid hoisting issues, and lead to cleaner, less error-prone code.

console.log("Hello World") 
var n = "shusin" 
let n3 = "dim"
//let n3 = "sim" - will thorow an error- Cannot redeclare block-scoped variable
const n2 = "tim" //const will not allow the value to be changed for the variable n2
//n2 = "him" throws TypeError: Assignement to constant variable
n = "don"
console.log(n) // will print don instead of shusin
console.log(n2)
console.log(n3)

