
let sinArray, cosArray

function setup() {
  createCanvas(windowWidth, windowHeight, P2D)
  colorMode(HSB, 255)
  angleMode(DEGREES)
  fill(220, 230, 235)
  noStroke()
  background(0)
  blendMode(ADD)
  frameRate(30)
  
  sinArray = [
    sin(0),
    sin(36),
    sin(36 * 2),
    sin(36 * 3),
    sin(36 * 4),
    sin(36 * 5),
    sin(36 * 6),
    sin(36 * 7),
    sin(36 * 8),
    sin(36 * 9),
    sin(36 * 10),
  ]
  cosArray = [
    cos(0),
    cos(36),
    cos(36 * 2),
    cos(36 * 3),
    cos(36 * 4),
    cos(36 * 5),
    cos(36 * 6),
    cos(36 * 7),
    cos(36 * 8),
    cos(36 * 9),
    cos(36 * 10),
  ]
}

function draw() {
  clear()
  background(0)
  for (let i = 0; i < 50; i++) {
    fill((i * 1.5 + millis() / 100) % 255, 230, 235,60)
    drawBlobWithNoise(i / 10, 200, 100)
  }
}

function drawBlob() {
  beginShape()
  let centerX = windowWidth / 2
  let centerY = windowHeight / 2
  let step = 360 / 10
  let fc = millis() / 10
  let size
  size = noise(fc / 1000, (360 - 36) / 100) * 100
  curveVertex(centerX + cos(360 - 36) * size, centerY + sin(360 - 36) * size)
  for (let i = 0; i < 360; i+=step) {
    let size = noise(fc / 1000, i / 100) * 100
    curveVertex(centerX + cos(i) * size, centerY + sin(i) * size)
    // ellipse(centerX + cos(i) * size, centerY + sin(i) * size, 10, 10)
  }
  size = noise(fc / 1000, 0) * 100
  curveVertex(centerX + cos(0) * size, centerY + sin(0) * size)
  size = noise(fc / 1000, 36) * 100
  curveVertex(centerX + cos(36) * size, centerY + sin(36) * size)
  endShape()
}



function drawBlobWithNoise(noiseValue, sizeDefault, sizeSwing) {
  beginShape()
  let centerX = windowWidth / 2
  let centerY = windowHeight / 2
  let step = 360 / 10
  let fc = millis() / 10
  let size
  size = noise(fc / 300, (360 - 36) / 100, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cosArray[9] * size, centerY + sinArray[9] * size)
  for (let i = 0; i < 10; i++) {
    let size = noise(fc / 300, i / 100, noiseValue) * sizeSwing + sizeDefault
    curveVertex(centerX + cosArray[i] * size, centerY + sinArray[i] * size)
    // ellipse(centerX + cos(i) * size, centerY + sin(i) * size, 10, 10)
  }
  size = noise(fc / 300, 0, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cosArray[0] * size, centerY + sinArray[0] * size)
  size = noise(fc / 300, 36, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cosArray[1] * size, centerY + sinArray[1] * size)
  endShape()
}