def on_button_pressed_a():
    global number1, op, number2
    if status == 0:
        number1 = number1 + 1
        basic.show_number(number1)
    if status == 1:
        op = op + 1
        if op == 1:
            basic.show_leds("""
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                """)
        if op == 2:
            basic.show_leds("""
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                """)
        if op == 3:
            basic.show_leds("""
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                """)
        if op == 4:
            basic.show_leds("""
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                """)
    if status == 2:
        number2 = number2 + 1
        basic.show_number(number2)
    if status == 3:
        basic.show_icon(IconNames.HAPPY)
        if op == 1:
            basic.show_number(number1+number2)
        if op == 2:
            basic.show_number(number1-number2)
        if op == 3:
            basic.show_number(number1*number2)
        if op == 4:
            basic.show_number(number1/number2)
        basic.pause(200)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global status
    status = status + 1
    if status < 3:
        basic.pause(200)
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

status = 0
number1 = 0
number2 = 0
op = 0
op = 0
number2 = 0
number1 = 0
status = 0