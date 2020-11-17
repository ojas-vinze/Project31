const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionh = 300;

var divisions=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;


}

function draw() {
  background(255,255,255);  

  for(var k=0; k<=width; k= k+80){
    divisions.push(new Division(k,height-divisionh/2,10,divisionh));
  }
  // row 1
  for(var a=40; a<=width; a=a+50){
    plinkos.push(new Plinko(a,75,10));
  }
  // row 2
  for(var b=15; b<=width; b=b+50){
    plinkos.push(new Plinko(b,175,10));
  }  
  // row 3
  for(var c=40; c<=width; c=c+50){
    plinkos.push(new Plinko(c,275,10));
  }
  // row 4
  for(var d=15; d<=width; d=d+50){
    plinkos.push(new Plinko(d,375,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  // display all
  for(var x=0; x<particles.length; x=x++){
    particles[x].display();
  }

  for(var y=0; y<plinkos.length; y=y++){
    plinkos[y].display();
  }

  for(var z=0; z<particles.length; z=z++){
    divisions[z].display();
  }
}
