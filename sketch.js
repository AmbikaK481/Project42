var fixedRect,movingRect;

function setup() {
  createCanvas(1000,400);
 
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("black");  
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y-fixedRect.y < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }


  drawSprites();
}