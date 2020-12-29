var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var boxBody1,boxBody2,boxBody3

var box1,box2,box3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1 = new Box(width/2,height-105,300,15)
	
	box2 = new Box(550,545,15,150)

	box3 = new Box(250,545,15,150)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	boxBody1 = Bodies.rectangle(width/2 , height-105, 300,15,{restitution:0, isStatic:true})
	World.add(world,boxBody1)

	boxBody3 = Bodies.rectangle(250,545,15,150,{restitution:0, isStatic:true})
	World.add(world,boxBody3)

	boxBody2 = Bodies.rectangle(550,545,15,150,{restitution:0, isStatic:true})
	World.add(world,boxBody2)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



box1.display()
box2.display()
box3.display()

 keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);

  } 
}



