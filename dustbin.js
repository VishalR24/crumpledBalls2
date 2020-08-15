class Dustbin{
    constructor(){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        } 
    this.bottomRectBody = Bodies.rectangle(790, 250, 125, 20,{isStatic: true})
    this.rightRectBody = Bodies.rectangle(850, 235, 20, 50,{isStatic: true})
	leftRectBody = Bodies.rectangle(730, 235, 20, 50,{isStatic: true})
	World.add(world,this.rightRectBody);
	World.add(world,leftRectBody);
	World.add(world,this.bottomRectBody);
    this.image = loadImage('dustbingreen.png')



        
    }

    display(){
        push ();
        translate(this.bottomRectBody.position.x, this.rightRectBody.position.y)
        rotate(this.bottomRectBody.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 125 , 50)
    
    
        pop ();
      }


}