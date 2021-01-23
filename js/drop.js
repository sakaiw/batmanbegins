class Drop {
    constructor(x, y) {
        var options ={
           restitution: 0.15,
           friction: 0.01
        }
        this.body = Matter.Bodies.circle(x, y, 5, options);
        Matter.World.add(world, this.body);
    }
    update(){
        if (this.body.position.y > 800){
         Matter.Body.setPosition(this.body, {x: random(0,550), y: random(0,350)})
        }
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("cadetblue");
        ellipse(0, 0, 5);
        ellipseMode(RADIUS);
        pop();
    }
}