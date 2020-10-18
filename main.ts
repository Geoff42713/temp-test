basic.forever(function () {
    basic.showNumber(input.temperature())
    serial.writeValue("Celsius", input.temperature())
    basic.pause(700)
})
