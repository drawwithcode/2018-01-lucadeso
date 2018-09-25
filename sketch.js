

function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {

	background(139, 222, 252);

	cursor(HAND);


	var color1 = color(66, 90, 232);
	var color2 = color(157, 231, 249);
	var color3 = color(244, 118, 118);
	var color4 = color(73, 2, 2);



	if (mouseIsPressed)
		setGradient(0, 0, 500, 500, color3, color4, "Y");
	else
		setGradient(0, 0, 500, 500, color2, color1, "Y");
	print(mouseIsPressed);


	noStroke();
	fill(239);
	rect(150, 180, 200, 250, 50, 50, 150, 150);
	rect(170, 50, 160, 125, 100, 100, 40, 40);


	if (mouseIsPressed)
		fill(107, 3, 3, 210);
	else
		fill(28, 45, 249, 200);
	print(mouseIsPressed);


	// spalle
	ellipse(150, 230, 50, 50);
	ellipse(350, 230, 50, 50);

	// braccia
	fill(239, 239, 239, 255);
  push();
	translate(90,320);
	rotate(PI / 180*20);
	ellipse(0, 0, 50, 170);
	pop();

	push();
	translate(410,320);
	rotate(PI / 180*160);
	ellipse(0, 0, 50, 170);
	pop();

	// sfondo viso
	if (mouseIsPressed)
		fill(0, 2, 2, 230);
	else
		fill(21, 36, 173, 255);
			print(mouseIsPressed);

	rect(190, 70, 120, 85, 100, 100, 20, 20);

	// stanghette viso
	noFill();
	strokeWeight(5);
	stroke(175);
	line(203, 82, 297, 82);
	line(194, 102, 306, 102);
	line(194, 122, 306, 122);
	line(194, 142, 306, 142);





	// tracciato viso
	noFill();
	strokeWeight(5);
	stroke(175);
	rect(190, 70, 120, 85, 100, 100, 20, 20);

	// ombra laser occhi
	noStroke();
	push();
	if (mouseIsPressed)
		fill(249, 83, 83, 230);
	else
		fill(44, 55, 255, 100);
	print(mouseIsPressed);
	translate(280,110);
	rotate(PI / 180*160);
	ellipse(0, 0, 60, 30);
	pop();

	noStroke();
	push();
	if (mouseIsPressed)
		fill(249, 83, 83, 230);
	else
		fill(44, 55, 255, 100);
			print(mouseIsPressed);
	translate(220,110);
	rotate(PI / 180*20);
	ellipse(0, 0, 60, 30);
	pop();



	// occhi
	noStroke();

	push();
	if (mouseIsPressed)
		fill(89, 2, 2, 230);
	else
		fill(101, 191, 252, 230);
	print(mouseIsPressed);
	translate(280,110);
	rotate(PI / 180*160);
	ellipse(0, 0, 50, 20);
	pop();

	noStroke();
	push();
	if (mouseIsPressed)
		fill(89, 2, 2, 230);
	else
		fill(101, 191, 252, 230);
			print(mouseIsPressed);
	translate(220,110);
	rotate(PI / 180*20);
	ellipse(0, 0, 50, 20);
	pop();



	// ombra figura
	noStroke();
	fill(200, 200, 200, 150);
	push();
	translate(250,450);
	ellipse(0, 0, 80, 20);
	pop();

}

// funzione per il gradiente di sfondo

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
