function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.size = 0;
  this.tail = [];

  this.dir = function(x, y) {

    if ((this.xspeed == 1) && (x == -1) || (this.yspeed == 1) && (y == -1)) {
      return;
    } else if ((this.xspeed == -1 && (x == 1)) || (this.yspeed == -1) && (y == 1)) {
      return;
    }

    this.xspeed = x;
    this.yspeed = y;

  };

  this.death = function() {
    if (this.x >= width - 1 || this.y >= height - 1 || this.x < 0 || this.y < 0) {
      console.log(this.x, this.y);
      return true;
    }
    for (var i = 0; i < this.tail.length; i++) {
      if (dist(this.tail[i].x, this.tail[i].y, this.x, this.y) < 1) {
        return true;
      }
    }
  };

  this.eat = function(pos) {
    var distance = dist(this.x, this.y, pos.x, pos.y);
    if (distance < 1) {
      this.size += 1;
      return true;
    } else return false;
  };

  this.update = function() {

    if (this.size === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.size - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
  };

  this.show = function() {
    fill(255);
    for (var i = this.tail.length - 1; i >= 0; i--) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };
}
