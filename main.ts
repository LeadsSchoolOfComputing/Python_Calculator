input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (status == 0) {
        number1 = number1 + 1
        basic.showNumber(number1)
    }
    
    if (status == 1) {
        op = op + 1
        if (op == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        
        if (op == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
        
        if (op == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        
        if (op == 4) {
            basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
        }
        
    }
    
    if (status == 2) {
        number2 = number2 + 1
        basic.showNumber(number2)
    }
    
    if (status == 3) {
        basic.showIcon(IconNames.Happy)
        if (op == 1) {
            basic.showNumber(number1 + number2)
        }
        
        if (op == 2) {
            basic.showNumber(number1 - number2)
        }
        
        if (op == 3) {
            basic.showNumber(number1 * number2)
        }
        
        if (op == 4) {
            basic.showNumber(number1 / number2)
        }
        
        basic.pause(200)
        basic.clearScreen()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    status = status + 1
    if (status < 3) {
        basic.pause(200)
        basic.clearScreen()
    }
    
})
let status = 0
let number1 = 0
let number2 = 0
let op = 0
op = 0
number2 = 0
number1 = 0
status = 0
