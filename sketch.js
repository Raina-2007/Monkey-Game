var monkey , monkey_running , ground;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(200,410,5,5);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(200,460,500,15);
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  score = 0;
}


function draw() {
  createCanvas(500,500);
  background("lightblue");
  
  ground.velocityX = -6;
  ground.x = ground.width/2;
  //console.log(ground.x);
  
  if(keyDown("space")&&monkey.y >= 410){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(ground);
  
  drawSprites();
  obstacles();
  food();
  
  fill("black");
  textSize(20);
  score = score + Math.round(getFrameRate()/60);
  text("Survival Time : "+ score,300,30);
}

function obstacles (){ 
  if(frameCount % 200 === 0){
    obstacle = createSprite(500,425,5,5);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.14;
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
  
}

function food (){
  if(frameCount % 80 === 0){
    banana = createSprite(500,200,5,5);
    banana.y = Math.round(random(140,280));
    banana.addImage(bananaImage);
    banana.scale = 0.14;
    banana.velocityX = -4;
    banana.lifetime = 130;
    bananaGroup.add(banana);
  }
}