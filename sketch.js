
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{

  tree = loadImage('tree.png')	
	boyimg= loadImage('boy.png');
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	
	mango1 =new mango (1000,200,60,60);
	mango2 =new mango (1000,120,60,60);
	mango3 =new mango (930,130,60,60);
	mango4 =new mango (1090,150,60,60);
	mango5 =new mango (1150,210,60,60);
	mango6 =new mango (900,220,60,60);
	mango7 =new mango (1080,220,60,60);
  mango8 =new mango (950,230,60,60);
  mango9 =new mango (1050,110,60,60);

  tree1 = createSprite (1000,300,300,300);
  tree1.addImage(tree);
  tree1.scale = 0.40;

	ground = new Ground(600,550,1400,10);

	boy = createSprite(300,500,40,40);
  boy.addImage(boyimg);
	boy.scale = 0.17;

	stone1 = new stone (200,90,40,40);

  slingshot = new SlingShot(stone1.body,{x:220,y:400});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  drawSprites();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  ground.display();
  boy.display();
  stone1.display();
  slingshot.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:250,y:70})
    launcherObject.attach(stone1.body);
  }
}

function detectollision (lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
	}
}