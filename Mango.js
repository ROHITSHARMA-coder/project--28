
   
class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		
		this.r=r
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(x, y, this.r/2, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(RADIUS);
		image(this.image, 0,0,this.r*2,this.r*2)
		pop()
 }
}