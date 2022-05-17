var sea, ship;
var seaimg, shipimg;

function preload(){

  seaimg = loadImage("sea.png");
  shipimg = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaimg);
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipimg);
  ship.scale = 0.25;
  sea.scale = 0.3;
  sea.velocityX = -5
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
    drawSprites();

 
}
