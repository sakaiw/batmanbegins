class Umbrella {
    constructor(x, y) {
        var options ={
            isStatic:true
        }
        this.body = Matter.Bodies.circle(x,y,50,options);
        Matter.World.add(world,this.body);
        this.image1 = loadImage("walkingframes/walking_1.png");
        this.image2 = loadImage("walkingframes/walking_2.png");
        this.image3 = loadImage("walkingframes/walking_3.png");
        this.image4 = loadImage("walkingframes/walking_4.png");
        this.image5 = loadImage("walkingframes/walking_5.png");
        this.image6 = loadImage("walkingframes/walking_6.png");
        this.image7 = loadImage("walkingframes/walking_7.png");
        this.image8 = loadImage("walkingframes/walking_8.png");
    }
    
    display(){           
       imageMode(CENTER);
       image(this.image1,this.body.position.x,this.body.position.y+70,350,350);
    }
}