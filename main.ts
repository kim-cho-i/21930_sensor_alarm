radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        music.stopAllSounds()
    }
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    경비전원 = 1
})
input.onButtonPressed(Button.B, function () {
    경비전원 = 0
})
let 경비전원 = 0
radio.setGroup(5)
basic.forever(function () {
	
})
