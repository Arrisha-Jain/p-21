var bullet,wall
var weight,speed,thickness

function setup() {
  createCanvas(1600,400);
  speed = random (223,321)
  weight = random(30,52)
  thickness = random(50,50)
  bullet = createSprite(50, 300, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  wall = createSprite(1500,300,thickness,height/3)
  wall.shapeColor = color(80,80,80);
  
  bullet2 = createSprite(50, 100, 50, 50);
  bullet2.velocityX = speed;
  bullet2.shapeColor = color(255);
  wall2 = createSprite(1500,100,thickness,height/3)
  wall2.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var def = 0.5 * weight * speed * speed / thickness*thickness*thickness;
   
    if(def > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if (def < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  if(hasCollided(bullet2,wall2))
  {
    bullet2.velocityX = 0;
    var def = 0.5 * weight * speed * speed / thickness*thickness*thickness;
  
    if(def > 10)
    {
      wall2.shapeColor = color(255,0,0);
    }

    if (def < 10)
    {
      wall2.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}