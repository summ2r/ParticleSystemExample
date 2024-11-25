class Particle {

    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 100;
        this.e = random(5, 30);
    }

    run() {
        this.update();
        this.display();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;  

        this.acceleration.set(0, 0);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(255,47,0, this.lifespan);
        ellipse(this.position.x, this.position.y, this.e, this.e);  
    }

    isDead() {
        return this.lifespan < 0;
    }
}