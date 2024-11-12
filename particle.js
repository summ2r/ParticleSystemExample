// 간단한 파티클 클래스
let Particle = function (position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  };
  
  Particle.prototype.run = function () {
    this.update();
    this.display();
  };
  
  // 위치 업데이트를 위한 메소드
  Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  
  // 화면에 보이기 위한 메소드
  Particle.prototype.display = function () {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  };
  
  // 파티클이 여전히 쓸만한가요?
  Particle.prototype.isDead = function () {
    return this.lifespan < 0;
  };