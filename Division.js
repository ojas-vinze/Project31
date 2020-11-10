class Division{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
        World.add(world,this.body)
    }

    display(){
        var dpos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(dpos.position.x,dpos.position.y,this.width,this.height);
    }
}