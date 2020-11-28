class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
    }

    display(){
        var ppos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(ppos.x,ppos.y,this.r);
    }
}
