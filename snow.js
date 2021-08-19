class Snow {
    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,width,height,{isStatic:false});
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("snow4.webp");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      translate (pos.x, pos.y);
      rotate(this.body.angle)
      fill("brown");
      image(this.image,0,0, this.width*4, this.height*4);
    }
  };
