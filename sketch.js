const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState = play;
var play = 1;
var end = 2; 
var ninja,ninjaRunning;
var bg,bgImage;
var chest,chestImg;
var stand,standImg;
var edges;
var score = 0;

function preload(){
  ninjaRunning = loadAnimation("Images/ninja1.png","Images/ninja2.png","Images/ninja3.png","Images/ninja4.png","Images/ninja5.png",
  "Images/ninja6.png");
  bgImage = loadImage("Images/bgImageJungle.jpeg");
  chestImg = loadImage ("Images/chest.png");
  standImg = loadImage("Images/stand (3).png")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-200);
  engine = Engine.create();
  world = engine,world;

   bg = createSprite(displayWidth/2-20,displayHeight/2-100,610,610);
   bg.addImage(bgImage);
   bg.scale = 3.4;

   ninja = createSprite(100,500,1,1);
   ninja.addAnimation("running",ninjaRunning)
   ninja.scale = 0.5;
   ninja.setCollider("circle",0,0,220)
   ninja.debug=false;

  edges = createEdgeSprites();

  stand_group = new Group();
  chest_group = new Group();
}

function draw() {


bg.velocityX=-5;

if(bg.x<500){
  bg.x =displayWidth/2;
}

if(keyDown("space")&& ninja.y<600){
  ninja.velocityY = -10;
}
ninja.velocityY = ninja.velocityY+1;

  background("pink");
  
  spawnStand();
  spawnChest();


  ninja.collide(edges);
  ninja.collide(stand_group);

  drawSprites();

  textSize(40); 
fill("white");  
text("Score: "+score,100,100)

}

function spawnStand(){
  if(frameCount%100 === 0){
    stand = createSprite(1300,0,1,1);
    stand.addImage(standImg);
    stand.scale = 1;
    stand.velocityX = -5;
    stand.y= Math.round(random(450,650));
    stand_group.add(stand);
  }
}

function spawnChest(){
  if(frameCount%300 === 0){
    chest = createSprite(1300,0,1,1);
    chest.addImage(chestImg);
    chest.scale = 0.3;
    chest.velocityX = -5;
    chest.y = Math.round(random(350,500));
    chest_group.add(chest);
  }
}