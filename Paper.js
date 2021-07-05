class Paper
{
    constructor(x,y,r){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image = loadImage("paper.png")
       this.body = Bodies.circle(x,y,r,option);
       World.add(world, this.body);
       
    }
    display(){
        //ellipseMode(CENTER)
        //ellipse(this.body.position.x,this.body.position.y,this.r)
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r);
    }
} 