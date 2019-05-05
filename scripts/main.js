// const piggyBank = {
//     pennies: 342,
//     nickels: 240,
//     dimes: 100,
//     quarters: 40
// }


// const dollarAmount = (pennies, nickels, dimes, quarters) => {
//     return pennies / 100 + (nickels * 5) / 100 + (dimes * 10) / 100 + (quarters * 25 / 100)
// }

// const money = dollarAmount(piggyBank.pennies, piggyBank.nickels, piggyBank.dimes, piggyBank.quarters)

// console.log(money)

// const dollarAmount = 27.41
// const piggyBank = {}


// getCoins = amount => {
//     piggyBank.quarters = Math.floor((amount * 100) / 25)
//     let remainder = amount % .25
//     piggyBank.dimes = Math.floor((remainder * 100) / 10)
//     remainder = remainder % .1
//     piggyBank.nickels = Math.floor((remainder * 100) / 5)
//     remainder = remainder % .05
//     piggyBank.pennies = Math.round((remainder * 100))
// }

// getCoins(dollarAmount)

// console.log(piggyBank)

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {

    switch (true) {
        case scores[i] > 90:
            grades.A++
            break;
        case scores[i] > 80:
            grades.B++
            break;
        case scores[i] > 70:
            grades.C++
            break;
        case scores[i] > 60:
            grades.D++
            break;
        default: grades.F++
            break;
    }

}

console.log(grades)

for (let grade in grades) {
    console.log(`There are ${grades[grade]} ${grade}'s`)
}

const lowestGrade = scores.sort()[0]
const highestGrade = scores.sort()[scores.length - 1]

console.log(lowestGrade)
console.log(highestGrade)

for (letgrade in grades) {

}