
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var box1;
var box2;
var box3;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	box1 = new Box (600,650,200,20);
    box2 = new Box (510,600,20,120,);
	box3 = new Box (690,600,20,120,);
	paper = new Paper(60,200,30,30)
	ground = new Ground (400,height,800,20)	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background(0)
  rectMode(CENTER);
box1.display();
box2.display();
box3.display();
paper.display();
ground.display();	
  drawSprites();
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.position,{x:45,y:-45})
}
}


