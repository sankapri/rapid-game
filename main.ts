input.onPinPressed(TouchPin.P0, function () {
    if (Game_active == 1) {
        Game_active = 0
        Score0 += 1
        basic.showString("S")
        basic.pause(3000)
        basic.showString("A")
    }
})
input.onButtonPressed(Button.A, function () {
    Game_active = 1
    basic.showString("G")
})
input.onPinPressed(TouchPin.P2, function () {
    if (Game_active == 1) {
        Game_active = 0
        Score2 += 1
        basic.showString("R")
        basic.pause(3000)
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Score0 > Score1 && Score0 > Score2) {
        basic.showString("S")
        basic.pause(3000)
        control.reset()
    } else if (Score1 > Score2) {
        basic.showString("P")
        basic.pause(3000)
        control.reset()
    } else {
        basic.showString("R")
        basic.pause(3000)
        control.reset()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Game_active == 1) {
        Game_active = 0
        Score1 += 1
        basic.showString("P")
        basic.pause(3000)
        basic.showString("A")
    }
})
let Score1 = 0
let Score2 = 0
let Score0 = 0
let Game_active = 0
basic.showString("A")
basic.forever(function () {
	
})
