class Rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA;
		this.pointB = pointB;
		var ops = {
			bodyA: body1,
			bodyB: body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
		this.rope = Matter.Constraint.create(ops);
		World.add(world,this.rope);
	}


    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2)
		line(pointA.x,pointA.y, pointB.x+ this.pointA, pointB.y+ this.pointB);
	}
}
