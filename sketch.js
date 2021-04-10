const{Engine, World, Bodies, MouseConstraint, Mouse, Constraint, Composites} = Matter;
var world, engine;
var mouseConstraint;
var box1, box2, box3, box4;
var friend1, friend2;
var base1, base2, base3, base4, base5
var ground

function setup(){
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
}