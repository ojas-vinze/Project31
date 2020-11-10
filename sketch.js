

var divisionh = 300;

var divisions=[];
var plinkos=[];
var particles=[];

function setup() {
  createCanvas(800,400);

  


}

function draw() {
  background(255,255,255);  

  for(var k=0; k<=width; k= k+80){
    divisions.push(new Division(k,height-divisionh/2,10,divisionh));
  }
  // row 1
  for(var a=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  // row 2
  for(var b=15; i<=width; j=j+50){
    plinkos.push(new Plinko(i,175,10));
  }  
  // row 3
  for(var c=40; g<=width; g=g+50){
    plinkos.push(new Plinko(g,275,10));
  }
  // row 4
  for(var d=15; d<=width; d=d+50){
    plinkos.push(new Plinko(d,375,10));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10)))
  }

  // display all
  for(var x=0; x<particles.length; x=x++){
    particles[j].display();
  }

  for(var y=0; y<plinkos.length; y=y++){
    plinkos[j].display();
  }

  for(var z=0; z<particles.length; z=z++){
    divisions[j].display();
  }
}