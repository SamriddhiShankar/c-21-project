const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var btn1;

function setup() {
  createCanvas(900,900);
  engine = Engine.create();
  world = engine.world;
  
  btn1 = createImg("right.png");
  btn1.position(100,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

 // btn2 = createImg("up.png");
 // btn2.position(120,30);
 // btn2.size(50,50);
 // btn2.mouseClicked(vforce);

  ground =new Ground(800,350,20,100);
  right = new Ground(600,350,20,100);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,400,1500,20);
  var ball_options = {
    restitution : 0.95

  }

 // var ball2_options = {
   // restitution : 0.25
 // }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

 // ball2 = Bodies.circle(200,100,40,ball2_options);
 // World.add(world,ball2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
   
}

  

function draw() 
{
  background(20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
 // ellipse(ball2.position.x,ball2.position.y,40);

  Engine.update(engine);



}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0})

}

//function vforce(){

//  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
//}

