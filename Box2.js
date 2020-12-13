class Box2{
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility= 255;
      this.image= loadImage("red_block.png")
      World.add(world, this.body);
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-6){
      score=score+1;
      }
    }
    display(){
      var pos = this.body.position;
      if(this.body.speed<5){
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility= this.Visibility-5;
        imageMode(CENTER);
        tint(255, this.Visibility);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
      }
    }
  
  };