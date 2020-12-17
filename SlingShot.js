class SlingShot
{
    constructor(bodyA, pointB){
        var options = 
        {
           bodyA:bodyA,
           pointB: pointB,
           stiffness: 0.1,
           length: 25
        
       }
           this.pointB = pointB
           this.body = Constraint.create(options);
           World.add(world, this.body);
}
display()
{
    if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;

        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }      
}
fly()
{
    this.body.bodyA = null;
}
attach(body)
{
    this.body.bodyA=body;
    }
}