
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Roof(375,100,455,40);
	bobObject1 = new Bob(196,500,90);
	bob2 = new Bob(287,500,90);
	bob3 = new Bob(377,500,90);
	bob4 = new Bob(467,500,90);
	bob5 = new Bob(557,500,90);
	rope1 = new Rope(bobObject1.body,roofObject.body,-85*2,0);
	rope2 = new Rope(bob2.body,roofObject.body,-45*2,0);
	rope3 = new Rope(bob3.body,roofObject.body,-0*2,0);
	rope4 = new Rope(bob4.body,roofObject.body,45*2,0);
	rope5 = new Rope(bob5.body,roofObject.body,85*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roofObject.display();
  bobObject1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-45});
	}
}



