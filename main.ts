input.onButtonPressed(Button.A, function () {
    basic.showNumber(humitat)
})
let humitat = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    humitat = pins.analogReadPin(AnalogPin.P1)
    if (humitat > 920) {
        basic.showIcon(IconNames.Umbrella)
    } else if (humitat > 700) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
