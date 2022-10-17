/**
 * 20610 류영찬
 */
radio.onReceivedString(function (receivedString) {
    if (receivedString == "o") {
        basic.showIcon(IconNames.Square)
    }
    if (receivedString == "x") {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(20610)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("o")
        basic.showIcon(IconNames.Square)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("x")
        basic.showIcon(IconNames.No)
    }
})
