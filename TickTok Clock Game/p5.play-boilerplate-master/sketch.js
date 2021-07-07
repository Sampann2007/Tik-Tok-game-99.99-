var sc;
var hr;
var mn;

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(0);
    hr=hour();
    mn=minute();
    sc=second();
    let angleHr=map(hr%12,0,12,0,360);
    let angleSc= map(sc%0,60,0,360);
    let anglemn=map(mn%0,60,0,360)
    fill(255, 500, 0);
    ellipse(width/2, height/2, 200,200);
    push();
    translate(width/2,height/2)
    rotate(angleHr);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,0,-100)
  pop();
  push();
    rotate(angleSc);
    translate(width/2,height/2)
    stroke(255,100,30);
    strokeWeight(7);
    line(0,0,0,-100)
  pop();
  push();
    rotate(anglemn);
    translate(width/2,height/2)
    stroke(100,300,50);
    strokeWeight(7);
    line(0,0,0,-100)
    pop();



  
}

