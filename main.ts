radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(5)
basic.forever(function () {
	
})
