class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
        }
        display(){
            var pointA= this.Rope.bodyA.position;
            var pointB= this.Rope.bodyB.position;

            //stroke(0);
            strokeWeight (1)
            var Anker1X = pointA.x
            var Anker1Y = pointA.y
            
            var Anker2X = pointB.x+this.offsetX
            var Anker2Y = pointB.y+this.offsetY
            line (Anker1X,Anker1Y,Anker2X,Anker2Y);
        }
        
}
