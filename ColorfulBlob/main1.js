
let overAllTexture

function setup() {
  createCanvas(800, 800)
	background(255)
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	// noStroke()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,40,80])))
		}
	}
	overAllTexture.updatePixels()
}

function draw() {
  fill(255, 200, 200)
  ellipse(100, 100, 100, 100)
  blendMode(MULTIPLY)
  image(overAllTexture,0,0)
}