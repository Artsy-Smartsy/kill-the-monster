class Box
{
    constructor(x,y,width,height)
    {
      var option = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,

    }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        fill(this.color)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();     
    }
}