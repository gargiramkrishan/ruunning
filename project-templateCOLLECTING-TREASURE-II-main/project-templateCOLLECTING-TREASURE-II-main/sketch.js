

var pImg,roadImg,road,p,cash,cashImg,cash2,cashImg2,cash3,cashImg3;
var gameover,gameoverImg

var score,Play,End,Game

var Obstacle;

function preload(){

 pImg = loadAnimation("Runner-1.png","Runner-2.png")
 roadImg = loadImage("Road.png")
 cashImg = loadImage("jwell.png")
 cashImg2 = loadImage("cash.png")
 cashImg3 = loadImage("sword.png")
 gameoverImg = loadImage("gameOver.png")
 score = 0;
 Play = 1;
 End = 0;
 Game = Play;
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  cash = createSprite(200,407777777777777777777777777777777777777777770)
  road = createSprite(width/2,height/2) 
  road.addAnimation("TIDIOKOHT",roadImg)
  p = createSprite(width/2,height/2)
  p.addAnimation("iusgrd",pImg)
  p.scale = 0.1
  Obstacle = new Group()
}

function draw() 
{
  background(0)
  if(Game == Play)
  {
    road.velocityY = 8;
    cash.velocityY = 8;
  
    if(road.y > 700)
    {
      road.y = height/2
    }
    if(keyDown("right"))
    {
      p.x = p.x + 9
    }
    if(keyDown("left"))
    {
      p.x = p.x - 9
    }
    if(Obstacle.isTouching(p))
    {
       cash.destroy()
       score = score + 1;
    }
    run()
  }
  drawSprites()
  text("Score"+ score,width/2,400)
}
function run()
{
  if (frameCount%60==0)
  {
    cash = createSprite(200,400)
    cash.x = Math.round(random(200,1090))
    swi = Math.round(random(1,3))
    cash.scale = 0.4;
    switch(swi)
    {
      case 1 : cash.addImage(cashImg)
      break
      case 2 : cash.addImage(cashImg2)
      break
      case 3 : cash.addImage(cashImg3)
      break
      default:
        break
    }
    Obstacle.add(cash)
  }
}