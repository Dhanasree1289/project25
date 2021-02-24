
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,200,100,90)

	ground=new Ground(400,650,2000,30)

	dustbin=new Dustbin(900,580)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);  
  background("white");


  
 
  
  drawSprites();
  paper.display();
  ground.display();
  dustbin.display();
  
 
}
 function keyPressed(){
if(keyCode===UP_ARROW)
Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
 }


