const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;
var score = 0;

var count = 0;
var gameState = "play";
var yellowLine;

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-10,width,20);

   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2-20, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
      
      plinkos.push(new Plinko(j,375));
    } 
    
    if(frameCount%60===0){
     particle.push(new Particle(mouseX, 10,10));
    //   score++;
     }
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }  
}
 
 
function draw() {
  background("black");
  
  
  Engine.update(engine);
  //Render.run(render);
  ground.display();
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
   
   
  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
  }
  if(particle != null) {
    particle. display(); 
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 300) {
        score = score + 500;             
      } 
      if(particle.body.position.x > 300 && particle.body.position.x < 600 ) {
        score = score + 100;     
      } 
      if(particle.body.position.x > 600 && particle.body.position.x < 900 ) {
        score = score + 200;     
      } 
      particle = null;
      if( count >= 5) gameState = "end";  
    }

  }
  if(gameState === "end"){
    textSize(50);
    fill("red");
    text("GAME OVER",250,250);
  } 
  textSize(25) 
  text("Score : "+score,20,30);
  text("500",20,530);
  text("500",100,530);
  text("500",180,530);
  text("500",260,530);
  text("100",340,530);
  text("100",420,530);
  text("100",500,530);
  text("200",580,530);
  text("200",660,530);
  text("200",740,530);
}

