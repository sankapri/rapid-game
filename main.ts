input.onPinPressed(TouchPin.P0, function () {
    if (Is_A_pressed == 1) {
        basic.showString("S")
        basic.pause(2000)
        control.reset()
    }
})
input.onButtonPressed(Button.A, function () {
    Is_A_pressed = 1
    basic.showString("G")
})
input.onPinPressed(TouchPin.P2, function () {
    if (Is_A_pressed == 1) {
        basic.showString("R")
        basic.pause(2000)
        control.reset()
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinPressed(TouchPin.P1, function () {
    if (Is_A_pressed == 1) {
        basic.showString("P")
        basic.pause(2000)
        control.reset()
    }
})
let Is_A_pressed = 0
basic.showString("A")
basic.forever(function () {
	
})
