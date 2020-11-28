class Particle{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.4
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body)
    }

    display(){
        var ppos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(ppos.x,ppos.y,this.r,this.r);
    }
}
