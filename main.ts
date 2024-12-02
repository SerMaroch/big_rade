startbit.startbit_Init()
basic.forever(function () {
    for (let index = 0; index < 1000; index++) {
        if (!(input.pinIsPressed(TouchPin.P0)) || !(input.pinIsPressed(TouchPin.P1))) {
            startbit.startbit_setMotorSpeed(60, 60)
        } else if (!(input.pinIsPressed(TouchPin.P0)) || input.pinIsPressed(TouchPin.P1)) {
            startbit.startbit_setMotorSpeed(40, -20)
        } else if (input.pinIsPressed(TouchPin.P0) || !(input.pinIsPressed(TouchPin.P1))) {
            startbit.startbit_setMotorSpeed(-20, 40)
        }
    }
    startbit.startbit_setMotorSpeed(60, -60)
    while (!(input.pinIsPressed(TouchPin.P0))) {
    	
    }
    while (input.pinIsPressed(TouchPin.P0)) {
    	
    }
})
