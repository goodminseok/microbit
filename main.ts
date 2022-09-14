input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showString("reset")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.7 * steps)
})
let steps = 0
steps = 0
basic.showString("start")
basic.showString("make a thumb")
basic.showLeds(`
    # # . . .
    # # . . .
    # # # # .
    # # # # .
    # # # # .
    `)
