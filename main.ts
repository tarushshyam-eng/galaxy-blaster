controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        2 
        5 
        5 
        `, Spaceship, 50, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(Surf_excel, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
})
let Surf_excel: Sprite = null
let projectile2: Sprite = null
let Spaceship: Sprite = null
effects.starField.startScreenEffect()
Spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . 
    . . . . . 1 1 1 1 . . . . . . 
    . . . 2 2 1 1 1 1 2 2 . . . . 
    . . 2 2 . 1 5 5 1 . 2 2 . . . 
    . 2 2 . . 1 5 5 1 . . 2 2 . . 
    . . . . 2 1 1 1 1 2 . . . . . 
    . . . . 2 1 1 1 1 2 . . . . . 
    . . . 2 2 . . . . 2 2 . . . . 
    `, SpriteKind.Player)
Spaceship.setPosition(84, 98)
controller.moveSprite(Spaceship)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Surf_excel = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . . f . . . . . . f f f . . . 
        . . f f f . . . . . f . . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . . f f . . f . . . . . . 
        . . . . 9 9 9 9 9 9 9 . . . . . 
        . . . . 9 7 . . 7 . 9 . . . . . 
        . . . 9 7 7 f 7 f . . 9 . . . . 
        . . . 9 . 7 7 7 7 . . 9 . . . . 
        . . 9 . . 7 f f 7 7 . . 9 . . . 
        . . 9 . . 7 7 7 7 . . . 9 . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 . . . . . 
        `, SpriteKind.Enemy)
    Surf_excel.setPosition(randint(0, scene.screenWidth()), 0)
    Surf_excel.follow(Spaceship, 50)
})
