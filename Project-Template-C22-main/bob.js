class BOB{
    constructor(x,y,radius){
        this.r = radius

        var ops = {
            restitution:1.2}

        this.body = Matter.Bodies.circle(x,y,this.r,ops);
        World.add(world,this.body);
    }
}