const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var ball, ballImg;

function preload()
{
   ballImg = loadImage("polygon.png");
}
function setup()
{
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(625, 500, 300, 20);
    ground2 = new Ground(1050, 250, 300, 20);

    //level 1
    box1 = new Box(520,450,50,60);
    box2 = new Box(570,450,50,60);
    box3 = new Box(620,450,50,60);
    box4 = new Box(670,450,50,60);
    box5 = new Box(720,450,50,60);
    
    //level 2
    box6 = new Box(570,350,50,60);
    box7 = new Box(620,350,50,60);
    box8 = new Box(670,350,50,60);

    //level 3
    box9 = new Box(620, 250, 50, 60);    
    
    //Second ground 
    //level 1
    //box11 = new Box(850,250,50,60);
    //box12 = new Box(900,250,50,60);
    //box13 = new Box(950,250,50,60);
    //box14 = new Box(1000,250,50,60);
    //box15 = new Box(1050,250,50,60);
    
    //level 2
    //box16 = new Box(850,150,50,60);
    //box17 = new Box(900,150,50,60);
    //box18 = new Box(950,150,50,60);

    //level 3
    //box19 = new Box(900,50,50,60);    

    ball = Bodies.circle(100,200,20);
    World.add(world,ball);

    slingShot = new SlingShot(this.ball,{x:100,y:200});
}
function draw()
{
    background("pink");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    slingShot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    //box11.display();
    //box12.display();
    //box13.display();
    //box14.display();
    //box15.display();
    //box16.display();
    //box17.display();
    //box18.display();
    //box19.display();

    imageMode(CENTER)
    image(ballImg ,ball.position.x,ball.position.y,40,40); 
    
}
    function mouseDragged()
    {
      Matter.body.setPosition(ball.body, {x: mouseX, y: mouseY});
    }
    function mouseReleased()
    {
        slingShot.fly();
    }