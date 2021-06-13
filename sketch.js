//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

// add our own engine
var engine, world;

// add varaiables
var hammer;
var plane;
var rubber, rubber1,rubber2,rubber3,rubber4,rubber5;
var stone;
var iron


function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    // connect our classes to the var
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(620,500,15)
    rubber1 = new Rubber(650,500,15)
    rubber2 = new Rubber(700,500,15)
    rubber3 = new Rubber(590,500,15)
    rubber4 = new Rubber(670,500,15)
    rubber5 = new Rubber(570,500,15)

    stone = new Stone(300,500)

    iron = new Iron(500,500)

  


}

function draw(){
    background("lightBlue");

    // update the engine
    Engine.update(engine);


    plane.display();

    hammer.display();

    rubber.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();

    stone.display();
    iron.display();

    
 
}