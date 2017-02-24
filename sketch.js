
function setup() {
  createCanvas(640,480);
    background(123,213,83);
}

function draw() {
 
   background(123,213,83);
   fill(23,21,213);
   var x =random(0,640);
   var y =random(0,480);
   var w = random(5,200);
   var h = random(5,200);
   ellipse(x,y,w,h);
}