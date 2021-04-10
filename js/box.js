class Box extends baseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER)
        stroke("white")
        strokeWeight(3)
        rect(0,0,this.width,this.height)
    }
}