function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    //var colorArray = [(255,0,0),(0,255,0),(0,0,255)];
    //fill(random(colorArray));
    //stroke();
	stroke(0);
   	line(320 - 150, 175, 320 - 150, 175 + 150);
    //line(mouseX + 80, mouseY + 80, mouseX + 5, mouseY + 70);
   	// bezier(mouseX + 75, mouseY + 10, mouseX, mouseY, mouseX + 80, mouseY + 80, mouseX + 5, mouseY + 70);

	stroke(222);
	ellipse(320, 175, 300, 300);
	fill(222);
    //circle(320, 240);
  } else {
  	//fill(0);
  }
  
}