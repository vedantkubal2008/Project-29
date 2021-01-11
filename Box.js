class Box {
    constructor(x, y, width, height)
     { var option = { 
        restituition: 0.4,
        friction:0.0

         }
          this.body = Bodies.rectangle(x,y,width,height, option);
           this.width = width;
            this.height = height;
             World.add(world, this.body);
             }
             
display(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke(255,234,0);
    fill(27,27,224);
    rect(0,0,this.width,this.height); 
    pop();
        } 
}