class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //this.body.position.x = mouseX;
    //his.body.position.y = mouseY;
    super.display();
  }
}