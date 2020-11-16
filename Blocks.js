class Block
extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/block1 pro26.png");
  
    this.Visiblity = 255;
  }

 display(){
  
   if(this.body.speed < 7){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     imageMode(CENTER)
     image(this.image, this.body.position.x, this.body.position.y);
     pop();
   }
   
 }
 score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }


 }
}
