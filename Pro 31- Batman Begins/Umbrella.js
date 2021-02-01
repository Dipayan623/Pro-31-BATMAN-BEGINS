class Umbrella {
    constructor(x,y){
        var options={
            isStatic:true
        }
       
        this.umbrella=Bodies.circle(x,y,50,options);
        this.radius=50;
        this.image = loadImage("Walking_Frame/walking_1.png","Walking_Frame/walking_2.png","Walking_Frame/walking_3.png","Walking_Frame/walking_4.png","Walking_Frame/walking_5.png","Walking_Frame/walking_6.png","Walking_Frame/walking_7.png","Walking_Frame/walking_8.png");
        World.add(world,this.umbrella)
    }
    display(){
        var pos=this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        
    }

}