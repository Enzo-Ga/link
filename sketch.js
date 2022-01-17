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
var ground;
var corda;
var fruta;
var link;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  corda = new Rope(6, {x:245,y:30})

  link = new Link(corda, fruta);

  var fruta_options={
      density: 0.001
  };

  fruta = Bodies.circle(300,300,20,fruta_options);
  World.add(world, fruta);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  corda.show();

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(fruta.position.x, fruta.position.y, 40);
  

 
   
}
