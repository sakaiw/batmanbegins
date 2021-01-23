var engine,world;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;

function preload() {
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
}

function setup() {
    createCanvas(600,800);
    engine = Matter.Engine.create();
    world = engine.world;
    batman = new Umbrella(100,550);
    var maxdrops = 100;
    for(var i = 0; i < maxdrops; i++){
        drops.push(new Drop(random(0,600),random(0,400)));
    }
}

function draw(){
    background(0);
    Matter.Engine.update(engine);
    batman.display();
    spawnthunder();
    for(var i = 0; i < drops.length; i++){
       drops[i].display();
       //console.log(drops[i]);
       drops[i].update();
    }
    drawSprites();  
}   

function spawnthunder(){
if (frameCount % 80 === 0){
 var thunder = createSprite(Math.round(random(100,500)),150);
  switch(Math.round(random(1,4))){
    case 1: thunder.addImage(thunder1);
    break;
    case 2: thunder.addImage(thunder2);
    break;
    case 3: thunder.addImage(thunder3);
    break;
    case 4: thunder.addImage(thunder4);
    break;
  }
  thunder.scale = 0.5;
  thunder.lifetime = 30;
}
}