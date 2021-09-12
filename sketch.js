var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
  
  // moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  //creating rabbit
  rabbit = createSprite(250,340,20,20);
  rabbit.scale =0.10;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // rabbit moving on Xaxis with mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }

}

function createApples() {
  
  apple = createSprite(100,10, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 100;
  
}

function createOrange() {
  orangeL = createSprite(200,20, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.06;
  orangeL.velocityY = 3;
  orangeL.lifetime = 140;
}

function createRed() {
  
  redL = createSprite(300,10, 10, 10);
  
  redL.addImage(redImg);
  redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
