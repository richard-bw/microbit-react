function countdown () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(5 - index)
    }
    images.iconImage(IconNames.Diamond).showImage(0)
}
input.onButtonPressed(Button.A, function () {
    doSomething(images.arrowImage(ArrowNames.West))
})
function doSomething (arrow_img: Image) {
    if (reaction_b != 0) {
        interval = control.eventTimestamp() - reaction_b
        reaction_b = 0
        arrow_img.showImage(0, 400)
    }
}
input.onButtonPressed(Button.B, function () {
    doSomething(images.arrowImage(ArrowNames.East))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    countdown()
    reaction_b = control.eventTimestamp()
})
let interval = 0
let reaction_b = 0
basic.clearScreen()
reaction_b = 0
let high_score = 0
