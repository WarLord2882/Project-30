class Block{
  constructor(x, y, width, height) {
    this.Image = loadImage("block.png") 
    var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

      
      if(this.body.speed<3){
      // display();
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      
      console.log(this.body.speed);
      }
     else{
       World.remove(world,this.body);
 
     }
    
    
    
    
    }
}