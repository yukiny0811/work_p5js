let yoff = 0.0;

function draw() {
  // ★１ ============== 名前を入れてみよう
  // 文字の色（0〜255） 
  fill(255); 

  // 文字の種類(oswald, satisfy, pacifico, stoke)
  textFont('oswald'); 

  // 文字の大きさ
  textSize(50);

  // 文字を描く（'文字', 左からの距離, 上からの距離） 
  text('Your Name', 50, 200);

  
  // ★２ ============== マウスでお絵描きしてみよう
  // マウスが押されたら (true ⇔ false)
  if (mouseIsPressed == false) {
    // 円の色（赤, 緑, 青, 透明度）
    fill(0, 255, 255, 10);

    // 円を描く(左からの距離, 上からの距離, 大きさ)
    ellipse(mouseX, mouseY, random(100));
  }
  
  // ★３ ==============　好きな言葉を３つ書いてみよう
  // 文字の色（赤, 緑, 青）
  fill(255, 255, 255);
  
  // 文字の種類(oswald, satisfy, pacifico, stoke)
  textFont('oswald'); 

  // 文字の大きさ
  textSize(20);

  // 文字を描く（'文字', 左からの距離, 上からの距離） 
  text('1', 50, 270);
  text('2', 50, 310);
  text('3', 50, 350);
  
  fill(0);
  rect(0, 0, windowWidth, windowHeight);
  
  fill(255);
  let xoff = 0;
  

  for (let x = 0; x <= windowWidth; x += 10) {
    
    fill(x / windowWidth * 100, 50, 100, 10);

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    ellipse(windowWidth / 2 + cos(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, windowHeight / 2 + sin(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, Math.random() * 50, Math.random() * 50);
    
    xoff += 0.05;
  }
  yoff += 0.01;
  
  
  
  
  xoff = 0;

  for (let x = 0; x <= windowWidth; x += 10) {
    
    fill(x / windowWidth * 100, 50, 100, 10);

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    ellipse(100 + cos(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, 100 + sin(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, Math.random() * 50, Math.random() * 50);
    
    xoff += 0.05;
  }
  yoff += 0.01;
  
  
  
  xoff = 0;

  for (let x = 0; x <= windowWidth; x += 10) {
    
    fill(x / windowWidth * 100, 50, 100, 10);

    let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    ellipse(windowWidth * 0.8 + cos(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, windowHeight * 0.8 + sin(x / windowWidth * Math.PI * 2) * y + Math.random() * 35, Math.random() * 50, Math.random() * 50);
    
    xoff += 0.05;
  }
  yoff += 0.01;
}


function setup() {
  
  
  // キャンバスを作る
  createCanvas(windowWidth, windowHeight);

  // ★4 ============== 背景の色を変えてみよう
  // 背景の色（赤, 緑, 青）
  background(0, 0, 0);  

  // 図形と文字に枠線をつけない
  noStroke();
  
  colorMode(HSB, 100);
  
  // 枠線に色をつける（赤, 緑, 青）
  // stroke(0, 0, 0);
  
  // 枠線の太さ
  // strokeWeight(5);

}

