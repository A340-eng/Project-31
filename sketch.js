const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;   
    drop = new Drop(10, 10, 30);
}

function draw(){
    background('black');
    Engine.update(engine);
    drop.display();    
}   
//ma'am I am not able to display the rain drops. Please rectify my mistake ma'am. 