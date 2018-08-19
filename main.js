const [WIDTH, HEIGHT] = [600, 600]

const defaultText =
`1. Put your choices into textarea.
2. Click roulette to spin.
3. Have fun !!!!`

let inText = ""
const textarea = document.getElementById('text-area')

textarea.addEventListener('keydown', ev => {
    inText = textarea.value
})

function setup() {
    const canvas = createCanvas( WIDTH , HEIGHT ) 
    canvas.parent('#canvas')
    textarea.value = defaultText
    inText = textarea.value
}


let r = 0
function draw() {
    colorMode(RGB, 255)
    background(50)
    stroke(50)

    const lines = inText.split('\n')
    const len = lines.length

    colorMode(HSB, 100)

    push()
        translate(300, 300)
        rotate(r)
        lines.forEach((line, i) => {
            fill( i * 72 % 100 , 50, 80)
            arc(0, 0, 500, 500, 0 ,TWO_PI/len, PIE)
            rotate(TWO_PI/len)
        })

        lines.forEach((line, i) => {
            stroke(0,0, 30)
            strokeWeight(3)
            fill( i * 72 % 100 , 80, 100)
            text(line, 40, -3)
            rotate(TWO_PI/len)
        })
    pop()
    triangle(90, 110, 110, 90, 120, 120)
}

let isTurning = false
function mousePressed() {
    if (isTurning) return
    isTurning = true

    const bufR = r
    const rot = 3 + Math.random() * 10
    const interval = setInterval( () => {
        r += Math.random() / 10
        if ( r - bufR > rot ) {
            clearInterval(interval)
            isTurning = false
        }
    }, 1)
}