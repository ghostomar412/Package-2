var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	

	



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	console.log(packageBody);
	
	groundbody=Bodies.rectangle(width/2, height-35, width,10,{isStatic:true});
	World.add(world, groundbody);

	groundSprite=createSprite(width/2, height-10, width,10);
	groundSprite.shapeColor=color(255)
	
	Spritebody=Bodies.rectangle(width/2, height-10,250,10,{isStatic:true});
	World.add(world, Spritebody);
	
	
	Sprite=createSprite(Spritebody.position.x,Spritebody.position.y,250,10);
	Sprite.shapeColor="red";
	Sprite1body=Bodies.rectangle(520,600,10,170,{isStatic:true});
	World.add(world, Sprite1body);
	Sprite1=createSprite(Sprite1body.position.x,Sprite1body.position.y,10,170);
	Sprite1.shapeColor="red"
	Sprite2body=Bodies.rectangle(280,600,10,170,{isStatic:true});
	
		World.add(world, Sprite2body);
		Sprite2=createSprite(Sprite2body.position.x,Sprite2body.position.y,10,170);
		Sprite2.shapeColor="red";
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 packageSprite.debug="true";
 //packageBody.setCollider("rectangle",0,0,400,400);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



