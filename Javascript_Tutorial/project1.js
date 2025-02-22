//How to take User Input
// Use a package promp-sync- npm install prompt-sync
const prompt = require("prompt-sync")()
const Name = prompt("What is your name?")
console.log("Hello", Name, "how are you doing?")

const shouldWePlay = prompt("Do you want to play?")

// "1" == 1 we get true
// "1" === 1 we get false triple = means strict equality- checks whether its two operators are equal
// "1" != 1 we get false
// "1" !== we get true -strict inequality
// && and || or ! not

//const condition = shouldWePlay === "yes" //case sensitive
const condition = shouldWePlay.toLowerCase() === "yes" //case sensitive
if (condition) { // if (shouldWePlay.toLowerCase() === "yes") also works
    // Game logic
    const leftOrRight = prompt("Do you want to go Left or Right?")
    if (leftOrRight === "left"){
        console.log("You go left and see a bridge...")
        const cross = prompt("Do you want to cross the bridge?").toLowerCase()
            if (cross === "yes" || cross === "y" || cross === "okay"){
                console.log("You cross but the bridge fell as it was weak.")
            } else {
                console.log("Good Choice. You win.")
            }
        } else {
            console.log("You go right and fall off a cliff.")
        }
    }
 else if(shouldWePlay.toLowerCase() === "no"){
    console.log("Okay :(")
}
else {
    console.log("Invalid Input")
}