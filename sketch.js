const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var polygon;
var slingshot;
var  score;
var backgroundimg;
var background_img;
function preload(){
    polygon_img= loadImage("polygon.png");
    //getbackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(800, 300, 200, 20);
    ground = new Ground(600, 390, 1200, 20);

    block1 = new Box2(800, 270, 30, 40);
    block2 = new Box2(830, 270, 30, 40);
    block3 = new Box2(860, 270, 30, 40);
    block4 = new Box2(770, 270, 30, 40);
    block5 = new Box2(740, 270, 30, 40);
    block6 = new Box2(890, 270, 30, 40);
    block7 = new Box2(710, 270, 30, 40);
    block8 = new Box(800, 240, 30, 40);
    block9 = new Box(830, 240, 30, 40);
    block10 = new Box(770, 240, 30, 40);
    block11= new Box(860, 240, 30, 40);
    block12= new Box(740, 240, 30, 40);
    block13= new Box2(800, 200, 30, 40);
    block14= new Box2(830, 200, 30, 40);
    block15= new Box2(770, 200, 30, 40);
    block16= new Box(800, 160, 30, 40);

    polygon = new Polygon(50, 200, 30)

    slingshot= new SlingShot(polygon.body, {x:200, y:100});
    score =0;
    getbackground();
}

function draw(){
    if(background_img){
    background(background_img);
    }else{
        background(255); 
    }
    
   /*if(backgroundimg>0){
    background(125, 57, 18);
    }else if(backgroundimg===0){
     background(125, 125, 12); 
    }
    */
    
    Engine.update(engine);
    text("SCORE: " + score, 750, 40);
    stand.display();
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();
    polygon.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200 , y: 100}); 
        slingshot.reattach(polygon.body); 
    }
}
async function getbackground(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var time = responseJSON.datetime;
    var hour = time.slice(11, 13);
    console.log(hour);
    if(hour>6 && hour<18){
      backgroundimg="background1.jpeg"
      //backgroundimg=1;
    }else{
        backgroundimg="background2.png"
        //backgroundimg=0;
    }
   background_img = loadImage(backgroundimg);
}