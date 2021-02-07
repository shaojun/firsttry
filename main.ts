input.onSound(DetectedSound.Loud, function () {
    if (prev_speed <= 120) {
        prev_speed += 40
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        prev_speed = 0
        music.playTone(185, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Heart)
    prev_speed = 0
})
let prev_speed = 0
prev_speed = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    prev_speed,
    SuperBit.enMotors.M3,
    prev_speed
    )
})
