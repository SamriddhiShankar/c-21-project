const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var btn;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  btn = createImg("right.png");
  btn.position(220,30);
  btn.size(50,50);
  btn.mouseClicked(hforce);



  
 var ground = createSprite(200,390,400,20);
  //right = new Ground(390,200,20,400);
 //// left = new Ground(10,200,20,400);
 // top_wall = new Ground(200,10,400,20);
  var ball_options = {
    restitution : 0.95

  }

  var ground_options = {
	isStatic : true
  }
 



  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(600,600,10,20,ground_options);
  World.add(world,ball);


  

  rectMode(CENTER);
  ellipseMode(RADIUS);
   
}

  

function draw() 
{
  background(51);
  ground.show();
 // top_wall.show();
 // left.show();
  //right.show();
  ellipse(ball.position.x,ball.position.y,20);


  Engine.update(engine);



}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}





