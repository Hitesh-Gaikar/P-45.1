function setup() {
  createCanvas(displayWidth,displayHeight);
  Shooter=createSprite(70,650)
  Shooter.addImage(Shooterimage)

}

function preload(){
  Shooterimage=loadImage("images.png")
}

function draw() {
  background("black");  
  drawSprites();

  if(keyDown("space")){
    bullet= new Bullet (Shooter.x,Shooter.y)
  }
}
