//https://en.wikipedia.org/wiki/List_of_occult_symbols#/media/File:Squaredcircle.svg
// squared circle / philosopher's stone

const pointOnCircle = (centerX, centerY, r, theta) => {
    return {
        x: centerX + cos(theta) * r, 
        y: centerY + sin(theta) * r,
    }
}

const Symbol1 = (x, y, w, h) => {
    noFill()
    stroke(200)
    ellipse(x, y, w * 2)
    //x1 y1 x2 y2 x3 y3
    let point1 = pointOnCircle(x, y, r, 0)
    fill('red')
    ellipse(point1.x, point1.y, 10)
    //triangle()
}