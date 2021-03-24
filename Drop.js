class Drop{
	constructor(x,y,r){
		var options = {
		restitution: 0.3,
		friction: 5,
		density: 1
	}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}
	display(){
			var droppos=this.body.position;	
			push()
			translate(droppos.x, droppos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			if(this.rain.position.y > height){
                Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
            }
              var maxDrops = 100;            
              for(var i = 0; i<maxdrops; i++){
                drops.push(new createDrop(random(0,400),random(0,400)));              
              }
            pop()
	}
}