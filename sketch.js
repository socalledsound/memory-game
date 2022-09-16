
let imgs = []
let game 

function preload(){
    // it would be nice to add many more images so that
    // the game can have multiple levels/configurations
    imgs[0] = loadImage('img/mario.jpg')
    imgs[1] = loadImage('img/alvie.png')
    imgs[2] = loadImage('img/wonka.png')
    imgs[3] = loadImage('img/css.jpg')
}

function setup(){
    createCanvas(800, 800)
    game = new Game(imgs)
    game.init()
}

function draw(){
    background(0)

    game.cards.forEach((card) => {
        card.render()
        if(!card.back){
            card.showImage()
        }
        if(card.wrong){
            card.renderX()
        }
    })

    fill(255)
    textSize(50)
    text(`score: ${game.score}`, 50, 50)

}

function mousePressed(){
    game.cards.forEach(card => {
        card.checkClick(mouseX, mouseY)
    })
   
}

