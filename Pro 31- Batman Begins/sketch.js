const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man, man1, man2, man3, man4, man5, man6, man7,man8;
var thun, thun1, thun2, thun3, thun4;
var engine, world;
var umbrella
var drops=[];
var rand;
var maxDrops=100;
var thunderCreatedFrame=0;


function preload(){
    thun1 = loadImage("thunderbolt/1.png");
    thun2 = loadImage("thunderbolt/2.png");
    thun3 = loadImage("thunderbolt/3.png");
    thun4 = loadImage("thunderbolt/4.png");

    
}

function setup(){
  createCanvas(400,700);

  engine=Engine.create();
  world=engine.world;
  umbrella= new Umbrella(200,500);

  //creating drops
  if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new createDrop(random(0,400),random(0,400)));
      
    }
  }

  
 //man = createSprite(50,180,20,50); 
 //man.addAnimation(man1, walking_1);
 //man.addAnimation(man2, walking_2);
 //man.addAnimation(man3, walking_3);
 //man.addAnimation(man4, walking_4);
 //man.addAnimation(man5, walking_5);
 //man.addAnimation(man6, walking_6);
 //man.addAnimation(man7, walking_7);
 //man.addAnimation(man8, walking_8);
 //man.scale = 0.5;
    
}

function draw(){
  background("black");
  Engine.update(engine);
  //creating thunder
  rand=Math.round(random(1,4));
  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thun=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
      case 1:thun.addImage(thun1);
      break;
      case 2:thun.addImage(thun2);
      break;
      case 3:thun.addImage(thun3);
      break;
      case 4:thun.addImage(thun4);
      break;
      default:break;


    }
    thun.scale=random(0.3,0.6);
  }
  if(thunderCreatedFrame+10===frameCount && thun){
    thun.destroy();
  }
  umbrella.display();
  //displaying raindrop
  for(var i=0;i<maxDrops;i++){
    drops[i].showDrop();
    drops[i].updateY();
  }

   drawSprites();
}   

