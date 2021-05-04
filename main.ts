function RunLoop_Of_Car () {
    while (true) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, speedOfCar)
        if (Tinybit.Ultrasonic_Car() < distanceOfCSB) {
            Turn_With_1_Degrees(-1)
            if (Tinybit.Ultrasonic_Car() < distanceOfCSB) {
                Turn_With_1_Degrees(1)
                Turn_With_1_Degrees(1)
                if (Tinybit.Ultrasonic_Car() < distanceOfCSB) {
                    Turn_With_1_Degrees(1)
                }
            }
        }
    }
}
function Turn_With_1_Degrees (absValue: number) {
    if (absValue == -1) {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, speedOfCar - speedOfCar * 2, speedOfCar)
        basic.pause(speedOfCar / 4 * 10)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Stop, 0, 0)
    } else {
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, speedOfCar, speedOfCar - speedOfCar * 2)
        basic.pause(speedOfCar / 4 * 10)
        Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 0)
    }
}
function Init () {
    distanceOfCSB = 35
    speedOfCar = 80
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
}
let distanceOfCSB = 0
let speedOfCar = 0
Init()
RunLoop_Of_Car()
