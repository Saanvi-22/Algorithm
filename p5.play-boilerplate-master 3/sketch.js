var a, b

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";

  b = createSprite(400, 200, 80, 30);
  b.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2
    && b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2){ 
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}