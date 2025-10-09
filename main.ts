controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 . . . . . . . . . 
        . . . . . 7 . . 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . . 7 7 7 . 7 7 . . . 
        . . . . . . . . . . . 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Spinjitsu, 50, -100)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
info.onLifeZero(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
})
let Lord_ras: Sprite = null
let projectile2: Sprite = null
let Spinjitsu: Sprite = null
effects.starField.startScreenEffect()
Spinjitsu = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    7 7 7 7 7 7 f 7 7 f 7 7 7 7 7 7 
    7 f f 7 7 7 f 7 7 7 7 7 7 f 7 7 
    7 7 f 7 7 7 7 f 7 7 7 7 f 7 7 7 
    . 7 7 f 7 7 7 7 f 7 7 f 7 7 7 . 
    . . 7 7 f 7 7 7 f 7 7 f 7 7 . . 
    . . . 7 7 f 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 f 7 7 f 7 7 . . . . 
    . . . . 7 7 7 7 f f 7 . . . . . 
    . . . . 7 f f 7 f 7 7 . . . . . 
    . . . . . 7 7 f 7 7 . . . . . . 
    . . . . . 7 f 7 7 . . . . . . . 
    . . . . . . f 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Spinjitsu.setPosition(84, 98)
controller.moveSprite(Spinjitsu)
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Lord_ras = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . f . . . . 
        . . . . f f f . . . f f f . . . 
        . . . . f 2 f . . . f 2 f . . . 
        . . . . f 2 f f f f f 2 f f . . 
        . . . f 2 2 f 2 2 f 2 2 2 f . 5 
        . . . f 2 2 2 2 2 2 2 2 2 f 4 5 
        . . . f f 2 f f f 2 2 2 f 4 5 5 
        . . . . f f f f f f f f f 5 . . 
        d . . . . . 2 2 2 2 2 5 4 5 . d 
        d d f f f f 2 f f f 2 f f f d d 
        d f f f f f 2 2 2 2 2 f f f f d 
        . . 4 5 4 . f f . . f . . . . . 
        . . 5 4 . f f f . . f f . . . . 
        . . . . . f f f . . f f f . . . 
        . . . . f f f f . . f f f . . . 
        `, SpriteKind.Enemy)
    Lord_ras.setPosition(randint(0, scene.screenWidth()), 0)
    Lord_ras.follow(Spinjitsu, 50)
})
