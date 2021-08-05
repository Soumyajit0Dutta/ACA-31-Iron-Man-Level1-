
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  playerImg = loadImage("images/iron.png")
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(1000,300);
bg.addImage(backgroundImg);
bg.velocityX=-5;
bg.scale=2;
  player=createSprite(500,500,20,40);
  player.addImage(playerImg);
  player.scale=0.3;
  ground=createSprite(500,600,1000,10)
}

function draw() {
  
  player.collide(ground);
  if(keyDown("up")){
    player.velocityY=-10;
  }
  if(keyDown("left")){
    player.x=player.x-5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  player.velocityY=player.velocityY+0.5;

  if(bg.x<100)
  {
      bg.x=800;
  }
    drawSprites();
   
}

