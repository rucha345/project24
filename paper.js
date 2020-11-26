class Paper {
	constructor(x, y , radius)
	{

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}



		this.body=Bodies.circle(x, y, radius, options);
		this.radius=radius;
        World.add(world,this.body);
    }
    display()
	{
			
			var ppos=this.body.position;		

			push();
			translate(ppos.x, ppos.y);
			noStroke();
			
			fill("black");
			//ellipseMode(RADIUS);
			ellipse(0,0,this.radius*2, this.radius*2);
			pop();
			
	}
};