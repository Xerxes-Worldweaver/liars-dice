const diceDisplay = document.querySelector("#dice")
const rollButton = document.querySelector("#roll")
const removeDieButton = document.querySelector("#removedie")

let dice = [0, 0, 0, 0, 0]
function rollDice() {dice = dice.map(() => Math.floor(Math.random()*6+1))}
rollDice()

function displayDice() {
    let string = "|| "
    dice.forEach(die => {
        string += `[${die}] `
    })
    diceDisplay.innerHTML = string + " ||"
}

displayDice()

rollButton.addEventListener("click", e => {
    rollDice()
    displayDice()
})

removeDieButton.addEventListener("click", e => {
    dice.pop()
    displayDice()
})
