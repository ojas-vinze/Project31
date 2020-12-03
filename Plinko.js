class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.r=r
        this.body=Bodies.circle(x,y,this.r,options)
    }

    display(){
        var ppos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(ppos.x,ppos.y,this.r,this.r);
    }
}
