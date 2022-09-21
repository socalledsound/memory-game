// this method of shuffling an array could come in useful to generate new indexes for the cards on init?
function shuffleItems(arr){
    return arr.slice().sort((a,b) => (0.5-Math.random()))
}



class Game {
    constructor(imgs){
        // rows * cols needs to be twice the number of images
        // is there a better way to handle this??
        this.numRows = 2
        this.numCols = 4
        this.paddingLeft = 100
        this.paddingTop = 100
        this.cards = this.initCards()
        // I'd like to come up with an algorithm to get these numbers
        this.cardIndexes = [0,1,0,2,3,1,2,3]
        this.imgs = imgs
        this.selections = []
        this.selectionCount = 0
        this.score = 0
        this.guesses=0
        this.over = false
    }

    init(){
        // this is where I'll shuffle the images into random cards
       
        this.cards.forEach((card, idx) => {
            let imageIndex = this.cardIndexes[idx]
            card.imgIdx = imageIndex
            card.img = this.imgs[imageIndex]
        })
    }

    initCards(){
        let arr = []
        let gridCount = 0
        for(let x = 0; x < this.numCols; x ++){
            for(let y = 0; y < this.numRows; y++){
                arr.push(new Card(gridCount, x, y, this.paddingLeft, this.paddingTop))
                gridCount++
            }
        }
        return arr
    }

    checkAnswer(){
        // console.log(cards[this.selections[0]].imgIdx)
        // console.log(cards[this.selections[1]].imgIdx)
        if(this.cards[this.selections[0]].imgIdx === this.cards[this.selections[1]].imgIdx){
            // do something here
            console.log('yes!!!')
            this.cards[this.selections[0]].solved = true
            this.cards[this.selections[1]].solved = true
            this.score ++
            //setTimeout(this.flipCardsBackOver, 1000)
        } else {
            this.drawWrongAnswer()
            this.guesses++    
        }
    }

    checkGameOver(){
        if(this.guesses > 3){
            this.over = true
        }
    }

    drawGameOver(){
        background(220,0,0)
        textSize(90)
        fill(0)
        noStroke()
        text('GAME', 150, 200)
        text('OVER', 150, 300)
        textSize(30)
        text('click anywhere to try again', 150, 500)
    }

    drawScoreboard(){
        fill(255)
        noStroke()
        textSize(50)
        text(`score: ${this.score}`, 50, 50)
        // text(`guesses: ${this.guesses}`, 450, 50)
        if(this.guesses){
            for(let i = 0; i < this.guesses; i++){   
                fill(190,210,0)
                ellipse(550 + i * 50, 25, 25)     
        }
        }

    }

    drawWrongAnswer(){
        this.cards[this.selections[0]].wrong = true
        this.cards[this.selections[1]].wrong = true
        setTimeout(this.flipCardsBackOver, 1000)
    }

    flipCardsBackOver = () => {
        this.cards.forEach(card => {
            if(!card.solved){
                card.back = true
                card.selected = null
                card.wrong = false
            }
        })
        this.selections = []
        this.selectionCount = 0
    }
}