class Paper{
    constructor(){
        var options = {
		isStatic: false,
		restitution:0.3,
		friction:0.5,
        density:1.2
        
    }
        console.log("check1")
        this.paperBody = Bodies.rectangle(100, 260,30, 30, options);
        console.log("check2")
        World.add(world, this.paperBody);
        console.log("check3")
        this.image = loadImage('paper.png')
        
    }    

display(){
    push ();
    translate(this.paperBody.position.x, this.paperBody.position.y)
    rotate(this.paperBody.angle)
    imageMode(CENTER);
    image(this.image, 0, 0, 30 , 30)


    pop ();
  }
}