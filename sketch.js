var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="red";

  gameObject2 = createSprite(100,300,50,50);
  gameObject2.shapeColor="red";

  gameObject2.velocityY = -2;
  gameObject1.velocityY = +2;
}

function draw() {
  background(0,0,0);  

  bouceOff(gameObject1,gameObject2);

  drawSprites();
}

