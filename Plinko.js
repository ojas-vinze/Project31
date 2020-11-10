class Plinko{
    
    constructor(x,y,r){
        var options = {
            restitution:0.4
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
    }

    display(){
        var ppos = this.body.position;
        push();
        translate(ppos.x,ppos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(ppos.x,ppos.y,this.r);
        pop();
    }
}