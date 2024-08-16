basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
music.play(music.stringPlayable("C5 B A F E E D C ", 257), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showNumber(1.2345678910111213e+30)
})
