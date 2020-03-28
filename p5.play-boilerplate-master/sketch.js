var rec,square
function setup() {
  createCanvas(800,400);
  square = createSprite(400, 200, 50, 50);
  rec = createSprite(200,200,50,20)
}

function draw() {
  background(255,255,255);  
  rec.x = World.mouseX
  rec.y = World.mouseY
  drawSprites();
 if(rec.x-square.x<rec.width/2+square.width/2
  && square.x-rec.x<rec.width/2+square.width/2
  && rec.y-square.y<rec.height/2+square.height/2
  && square.y-rec.y<rec.height/2+square.height/2){
   rec.shapeColor = "Green"
   square.shapeColor = "Yellow"
 }
}