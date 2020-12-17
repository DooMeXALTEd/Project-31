const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, division;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  
  world = engine.world;

  createSprite(400, 200, 50, 50);



  ground = new Ground(400,height,500,20);

  
}

  function draw() {
  background(255,255,255);  
  if (frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10));
  }

for (var j = 0; j< particles.length; j++){
  particles[j].display();
}
for (var k = 0; k< divisions.length; k++){
  division[k].display();
}






for(var k=0; k<=width; k = k + 80) {
  divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}

for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75))
}
  
for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,175))

}
for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,275))
}
for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,375))
}
  drawSprites()
  Engine.update(engine);
}
