startbit.startbit_Init()
basic.forever(function () {
    while (false) {
        if (input.pinIsPressed(TouchPin.P0) || input.pinIsPressed(TouchPin.P0)) {
            startbit.startbit_setMotorSpeed(60, 60)
        } else if (!(input.pinIsPressed(TouchPin.P0)) || input.pinIsPressed(TouchPin.P0)) {
            startbit.startbit_setMotorSpeed(40, -20)
        } else if (input.pinIsPressed(TouchPin.P0) || !(input.pinIsPressed(TouchPin.P0))) {
            startbit.startbit_setMotorSpeed(-20, 40)
        }
    }
})
