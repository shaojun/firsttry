pre_x = 0
for index in range(5):
    led.plot(pre_x, pre_x)
    basic.pause(1000)
    pre_x += 1

def on_forever():
    music.play_melody("C D E F G A B C5 ", 120)
basic.forever(on_forever)
