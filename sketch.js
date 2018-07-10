function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    //var colorArray = [(255,0,0),(0,255,0),(0,0,255)];
    //fill(random(colorArray));
    //stroke();
    clear();
	var bezY1A;
	var bezY1B;
	var bezY2A;
	var bezY2B;
	stroke(222);
	var headY = random(150, 300);
	fill(222);
   	bezier(320 - 150, 175, 320 - 150, 175 + headY/2, 320 + 75, 175 + 400, 320, 175 + headY/2);
   	bezier(320 + 150, 175, 320 + 150, 175 + headY/2, 320 - 75, 175 + 400, 320, 175 + headY/2);
	ellipse(320, 175, 300, headY);
	stroke(0);
	fill(0);
	var eyeX = random(35, 95);
	var eyeY = random(35, 95);
	ellipse(320 - 65, 175, eyeX, eyeY);
	ellipse(320 + 65, 175, eyeX, eyeY);
	/*stroke(0);
   	line(320 - 150, 175, 320 - 150, 175 + 150);
   	line(320, 175 + 150, 320 + 75, 175 + 300);
	stroke(222);
	fill(222);
   	bezier(320 - 150, 175, 320 - 150, 175 + 150, 320 + 75, 175 + 400, 320, 175 + 150);
   	bezier(320 + 150, 175, 320 + 150, 175 + 150, 320 - 75, 175 + 400, 320, 175 + 150);
	ellipse(320, 175, 300, 300);
	stroke(0);
	fill(0);
	ellipse(320 - 65, 175, 75, 75);
	ellipse(320 + 65, 175, 75, 75);*/
  } else {
  	//fill(0);
  }
  
}