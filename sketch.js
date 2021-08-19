const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground;
var snow= [];


function preload(){
  bg = loadImage("snow3.jpg");

}





function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  if(frameCount%100 === 0){
    for(i=0;i<100;i=i+1){
    snow.push(new Snow(random(20,380),random(20,380),20,20));
  }
}
 
    ground = new Ground(600,height,1200,20);
 
}

function draw() {
  background(bg);  
  ground.display();
 
  for(i=0;i<100;i=i+1){
   snow[i].display();
  }
  

}