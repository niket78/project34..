const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,acorn,ground;
var acorn_con;
var acorn_con_2;
var acorn_con_3;
var rope3;

var forest;
var food;
var chipmunk;

function preload()
{k =
  forest = loadImage('forest.png');
  food = loadImage('acorn.png');
  chipmunk = loadImage('chipmunk.png');
  

}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  
  engine = Engine.create();
  world = engine.world;
;
 
   rope = new Rope(7,{x:200,y:90});
   rope2 = new Rope(7,{x:400,y:90});


  
  
  ground = new Ground(250,height,width,20);
  

  chipmunk = createSprite(120,620,100,100);
  chipmunk.scale = 0.2;


  
  acorn = Bodies.circle(250,250,20);
  Matter.Composite.add(rope.body,acorn);

  acorn_con = new Link(rope,acorn);
  acorn_con_2 = new Link(rope2,acorn);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  push();
  imageMode(CENTER);
  if(acorn!=null){
  image(food,acorn.position.x,acorn.position.y,70,70);
  pop();
  rope.show();
  rope2.show();
  Engine.update(engine);
  ground.show();

  drawSprites();
  (collide(acorn,chipmunk)==true) 
  
    World.remove(engine.world,acorn);
    acorn = null;
   (acorn!=null && acorn.position.y>=650) 
    acorn=null;
  }
   
  
}

function drop()
{
  rope.break();
  acorn_con.dettach();
  acorn_con = null; 
}

function drop2()
{
  
  rope2.break();
  acorn_con_2.dettach();
  acorn_con_2 = null;
}

      
    
      
