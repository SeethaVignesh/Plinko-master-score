class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
       
        this.body = Bodies.circle(x, y, r,options);
        this.r=r;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
//     scoring(){
//         var score = 0;
//         if(this.body !== null){
//             //particle.display();
          
//              if(this.body.position.y>760){
//                if(this.body.position.x<300){
//                    score = score+500;
//                    this.body = null;
//                }
             
//                else if(this.body.position.x>301 && this.body.position.x<600){
//                    score = score+100;
//                    this.body = null;
//                }
             
//                else if(this.body.position.x>601 && this.body.position.x<900){
//                    score = score+200;
//                    this.body = null;
//                }
//              }
//     }
// }

}