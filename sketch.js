
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
    if(!game.over){
        game.drawScoreboard()
        game.cards.forEach((card) => {
            card.render()
            if(!card.back){
                card.showImage()
            }
            if(card.wrong){
                card.renderX()
            }
        })
        game.checkGameOver()
    }else{
        game.drawGameOver()
    }




}

function mousePressed(){
    if(!game.over){
        game.cards.forEach(card => {
            card.checkClick(mouseX, mouseY)
        })
    }else{
        game = new Game(imgs)
        game.init() 
    }

   
}

