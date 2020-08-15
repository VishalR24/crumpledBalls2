
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var ground, groundBody;
var paper, paperBody;
var leftRect, rightRect, bottomRect;
var bottomRectBody, leftRectBody,rightRectBody;
var paper1, dustbin1;
function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1000, 300);
    ground = createSprite(500,280,1000,25)
	ground.shapeColor = "yellow"
	console.log("check4")
	paper1 = new Paper();
    dustbin1 = new Dustbin();
	
	
	
	
	var options = {
		isStatic: false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	//Create the Bodies Here.
	
    groundBody = Bodies.rectangle(500, 280, 1000, 25,{isStatic: true})
	World.add(world, groundBody);
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  dustbin1.display();
  ground.x = groundBody.position.x;
  ground.y = groundBody.position.y;
  
  //keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.paperBody,paper1.paperBody.position,{x:50,y:-45})
	}
}


