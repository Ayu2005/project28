class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
  
        this.image=loadImage("sprites/paper.png");
  
  
      World.add(world, this.body);
       
        
   }
   display(){
     var pos = this.body.position;
    
    
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius);
    
    image(this.image,pos.x, pos.y, 33, 33);
   }
  }
  