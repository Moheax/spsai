function playAi () {
    let choiceAi = 0
    scoreAi = randint(0, 3)
    if (choiceA == 0 && choiceAi == 1) {
        scoreAi += 1
        basic.showString("A")
    } else {
        scoreA += 1
        basic.showString("P")
    }
    if (choiceA == 1 && choiceAi == 2) {
        scoreAi += 1
        basic.showString("A")
    } else {
        scoreA += 1
        basic.showString("P")
    }
    if (choiceA == 2 && choiceAi == 0) {
        scoreAi += 1
        basic.showString("A")
    } else {
        scoreA += 1
        basic.showString("P")
    }
    winner()
}
input.onButtonPressed(Button.A, function () {
    choiceA = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        `)
    playAi()
})
function winner () {
    if (scoreA == 3) {
        basic.showString("P")
    }
    if (scoreAi == 3) {
        basic.showString("A")
    }
}
input.onButtonPressed(Button.AB, function () {
    choiceA = 2
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    playAi()
})
input.onButtonPressed(Button.B, function () {
    choiceA = 1
    basic.showLeds(`
        . # # # #
        . # # # #
        # # # # .
        # # # # .
        # # # # .
        `)
    playAi()
})
let choiceA = 0
let scoreAi = 0
let scoreA = 0
scoreA = 0
scoreAi = 0
basic.forever(function () {
	
})
