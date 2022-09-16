const cardWidth = 120
const cardHeight = 200
const padding = 10

class Card {
    constructor(idx, x, y, paddingLeft, paddingTop){
        this.idx = idx 
        this.x = x * cardWidth + x * padding + paddingLeft
        this.y = y * cardHeight + y * padding + paddingTop
        this.w = cardWidth
        this.h = cardHeight
        this.img = null
        this.back = true
        this.selected = null
        this.wrong = false
    }

    checkClick(mx, my){
        if(mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h){
            this.back = !this.back
            if(game.selectionCount === 0){
                this.selected = 1
                game.selections.push(this.idx)
                game.selectionCount ++
            } else if(game.selectionCount === 1){
                this.selected = 2
                game.selections.push(this.idx)
                game.checkAnswer()
            } 
        }
    }

    showImage(){
        image(this.img, this.x + this.w/4, this.y + this.h/3, this.w/2, this.w/2)
    }

    renderX(){
        stroke('red')
        fill('red')
        strokeWeight(10)
        line(this.x, this.y, this.x + this.w, this.y + this.h)
        line(this.x + this.w, this.y, this.x, this.y + this.h)
    }

    render(){
        strokeWeight(2)
        stroke(40)
        this.back ? fill(60) : fill(180)
        rect(this.x, this.y, this.w, this.h, 30, 30)
        if(this.back){
            stroke(200)
            noFill()
            ellipse(this.x + this.w/2, this.y + this.h/2, this.w/2)
        }
        if(this.selected){
            stroke('red')
            fill('red')
            textSize(50)
            text(this.selected, this.x + this.w/2.4, this.y + 40)

        }
    }
}