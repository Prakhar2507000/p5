function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(GRAY);
  circle(45, 100, 75);
  circle(320, 100, 75);
  circle(45, 300, 75);
  circle(320, 300, 75);
  strokeWeight(5);
  line(300, 100, 55, 100);
  line(300, 300, 300, 100);
  line(55, 100, 55, 300);
  line(300, 300, 55, 300);
}
