
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300, 50, 50);

	bobObject2 = new Bob(350, 50, 50);

	bobObject3 = new Bob(400, 50, 50);

	bobObject4 = new Bob(450, 50, 50);

	bobObject5 = new Bob(500, 50, 50);

	roof = new Roof(400, 50, 600, 50);

	rope1 = new Rope(bobObject1.body, roof.body, 200, 0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  Engine.update(engine);
  drawSprites();
  
}



