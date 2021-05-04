function Turn_With_Degrees (degrees: number) {
    if (degrees < 0) {
        _degress = Math.abs(degrees)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 0)
    } else {
    	
    }
}
function Turn_With_90_Degrees (absValue: number) {
    if (absValue == -1) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, speet - speet * 2, speet)
        basic.pause(speet / 4 * 10)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Stop, 0, 0)
    } else {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, speet, speet - speet * 2)
        basic.pause(speet / 4 * 10)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 0)
    }
}
let _degress = 0
let speet = 0
Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
let step = 44
speet = 80
while (true) {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speet)
    if (Tinybit.Ultrasonic_Car() < step) {
        Turn_With_90_Degrees(-1)
        if (Tinybit.Ultrasonic_Car() < step) {
            Turn_With_90_Degrees(1)
            Turn_With_90_Degrees(1)
            if (Tinybit.Ultrasonic_Car() < step) {
                Turn_With_90_Degrees(1)
                continue;
            } else {
                continue;
            }
            continue;
        }
    }
}
