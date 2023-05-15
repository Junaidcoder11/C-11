
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground=loadAnimation("ground2.png")

}

function setup(){
  //create a trex sprite
  
  createCanvas(600,200)
  var trex = createSprite (50,120,20,50);
  var ground = createSprite(200,180,400,20);
  
  trex.addAnimation("running",trex_running);
  
 
}

function draw(){
  background("white")
  
  
  
drawSprites();
}
