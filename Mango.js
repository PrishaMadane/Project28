class mango{
    constructor(x,y,w,h){
    var options={
    isStatic:true,
    restitution:0,
    friction:1
}
     this.body = Bodies.rectangle(x,y,w,h,options);
     this.x=x;
     this.y=y;
     this.width = w;
     this.height = h;
     this.image = loadImage("mango.png");
     World.add(world,this.body);
     
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      rotate(angle);
      image(this.image,0,0,this.width,this.height);
      pop();
  }
}