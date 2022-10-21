input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showString("2F17 Kate")
let xvalue = 0
let yvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(500)
        yvalue += 1
    }
    if (yvalue > 4) {
        yvalue = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(500)
        xvalue += 1
    }
    if (xvalue > 4) {
        xvalue = 0
    }
})
