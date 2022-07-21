
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ground2;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(100,380,1000,20,option);
  World.add(world,ground);
  
  ground2=Bodies.rectangle(200,200,100,20,option);
  World.add(world,ground2);
  //box1 = new Box(200,100,50,50);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    // x new Box(50,50,50,50)
    
    new Box(mouseX,mouseY,50,50)

    // x new Box(50,50,mouseX,mouseY)
    
    // x new Box(mouseY,mouseX,50,50)  
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,1000,10);
  rect(ground2.position.x,ground2.position.y,100,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

