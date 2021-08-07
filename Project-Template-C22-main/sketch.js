const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
	bob1= new BOB(300,400,25);
	bob2= new BOB(346,400,25);
	bob3= new BOB(392,400,25);
	bob4= new BOB(458,400,25);
	bob5= new BOB(504,400,25);

	rope1 = new Rope(bob1.body,roof,-100,0);
	rope2 = new Rope(bob2.body,roof,-50,0);
	rope3 = new Rope(bob3.body,roof, 0,0);
	rope4 = new Rope(bob4.body,roof, 50, 0);
	rope5 = new Rope(bob5.body,roof, 100,0);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.body.position.x,bob1.body.position.y,25)
	ellipse(bob2.body.position.x,bob2.body.position.y,25)
	ellipse(bob3.body.position.x,bob3.body.position.y,25)
	ellipse(bob4.body.position.x,bob4.body.position.y,25)
	ellipse(bob5.body.position.x,bob5.body.position.y,25)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,{x: bob1.body.position.x,y: bob1.body.position.y}, {x:-0.11, y:0})
	}
}