radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        wuKong.setAllMotor(100, 100)
    } else if (receivedNumber == 1) {
        wuKong.setAllMotor(-100, -100)
    } else {
        wuKong.stopAllMotor()
    }
})
radio.setGroup(1)
basic.showString("Hello Tinn")
radio.setTransmitPower(7)
