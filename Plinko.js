class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic: true,

        }
        this.body =  Bodies.circle(x,y,10,options);
        this.radius = radius;
        World.add(world, this.body);

    }
    display(){
    fill("white");
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y,10,10);
    }
    }

