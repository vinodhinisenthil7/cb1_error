
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,paper;
var box1,box2,box3;
var paperImg;
function preload()
{
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(100 , 200 , 20, {restitution:0.5, isStatic:false, friction:0, density:1.2});
	World.add(world, paper);
	
	Engine.run(engine);
  
	box1 = new Box(600,620,20,100);
	box2 = new Box(800,620,20,100);
	box3 = new Box(710,660,200,20);
	
	ground = new Ground(800,height,1600,260);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  
	  
  Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background("White"); 
	
	box1.display();
	box2.display();
	box3.display();
	
	ground.display();
	
	fill("Purple");
	ellipseMode(CENTER);
	ellipse(paper.position.x,paper.position.y,40,40);
	 	
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(paper.body,paper.body.position,{x:-380,y:-380});
		console.log(paper.position);
    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}