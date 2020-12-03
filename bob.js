class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:1.2,
			density:0.8

			
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("ball.jpg")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
            image(this.image, 0, 0, 52, 52);
			pop()
			
	}

}