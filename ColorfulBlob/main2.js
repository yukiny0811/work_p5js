

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 255)
  angleMode(DEGREES)
  fill(220, 230, 235)
  noStroke()
  background(0)
  blendMode(ADD)
}

function draw() {
  clear()
  background(0)
  for (let i = 0; i < 50; i++) {
    fill((i * 1.5 + frameCount / 10) % 255, 230, 235,60)
    drawBlobWithNoise(i / 10, 200, 100)
  }
}

function drawBlob() {
  beginShape()
  let centerX = windowWidth / 2
  let centerY = windowHeight / 2
  let step = 360 / 10
  let fc = frameCount
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
  let fc = frameCount
  let size
  size = noise(fc / 300, (360 - 36) / 100, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cos(360 - 36) * size, centerY + sin(360 - 36) * size)
  for (let i = 0; i < 360; i+=step) {
    let size = noise(fc / 300, i / 100, noiseValue) * sizeSwing + sizeDefault
    curveVertex(centerX + cos(i) * size, centerY + sin(i) * size)
    // ellipse(centerX + cos(i) * size, centerY + sin(i) * size, 10, 10)
  }
  size = noise(fc / 300, 0, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cos(0) * size, centerY + sin(0) * size)
  size = noise(fc / 300, 36, noiseValue) * sizeSwing + sizeDefault
  curveVertex(centerX + cos(36) * size, centerY + sin(36) * size)
  endShape()
}