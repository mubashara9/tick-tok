var hr, min, sec;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
 
    angleMode(DEGREES);
}

function draw() {
  background(0);  
   hr=hour();
  min=minute();
  sec=second();
  scAngle=map(sec,0,60,0,360);
  mnAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  translate(200,200)

  rotate(-90)

  push()
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();

  push()
  rotate(mnAngle);
  stroke(255,255,0);
  strokeWeight(7);
  line(0,0,80,0)
  pop();

  push()
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0)
  pop();

  drawSprites();
}