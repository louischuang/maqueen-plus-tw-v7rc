bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("C D E F G A B C5 ", 300), music.PlaybackMode.UntilDone)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.stringPlayable("C5 B A G F E D C ", 300), music.PlaybackMode.UntilDone)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    command = bluetooth.uartReadUntil("#")
    if (command.length == 19) {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Open)
        _type = command.substr(0, 3)
        servo0 = parseFloat(command.substr(3, 4))
        servo1 = parseFloat(command.substr(7, 4))
        servo2 = parseFloat(command.substr(11, 4))
        servo3 = parseFloat(command.substr(15, 4))
        if (_type == "SRV") {
        	
        } else if (_type == "SRT") {
            power = servo1
            direction = servo0
            if (direction < 1600 && direction > 1400) {
                direction = 1500
            }
            motorLeft = power - 1500
            motorRight = power - 1500
            motorRight = motorRight - (direction - 1500)
            motorLeft = motorLeft + (direction - 1500)
            if (motorLeft > 1000) {
                motorLeft = 1000
            } else if (motorLeft < -1000) {
                motorLeft = -1000
            }
            if (motorRight > 1000) {
                motorRight = 1000
            } else if (motorRight < -1000) {
                motorRight = -1000
            }
            if (motorLeft < 0) {
                motorLeft = motorLeft * -1
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, motorLeft / 2)
            } else {
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, motorLeft / 2)
            }
            if (motorRight < 0) {
                motorRight = motorRight * -1
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, motorRight / 2)
            } else {
                maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, motorRight / 2)
            }
        } else {
        	
        }
    } else {
        maqueenPlusV2.controlLED(maqueenPlusV2.MyEnumLed.AllLed, maqueenPlusV2.MyEnumSwitch.Close)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    }
})
let motorRight = 0
let motorLeft = 0
let power = 0
let direction = 0
let servo3 = 0
let servo2 = 0
let servo1 = 0
let servo0 = 0
let _type = ""
let command = ""
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
maqueenPlusV2.I2CInit()
let IfDetect = 0
let DetectValue = 0
command = ""
_type = ""
servo0 = 1500
servo1 = 1500
servo2 = 1500
servo3 = 1500
direction = 0
power = 0
motorLeft = 0
motorRight = 0
basic.showIcon(IconNames.Asleep)
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
basic.forever(function () {
	
})
