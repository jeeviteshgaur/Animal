class Animal {
  constructor(v= "brrr", x = 100, y = 100, col = 'purple') {
    this.voice = v;
    this.locX = x;
    this.locY = y;
    this.col = col;
    
  this.showUp();
  }
  
  talk(){
    text(this.voice, this.locX, this.locY);
  }
  
  showUp() {
  stroke(this.col);
  strokeWeight(40);
  point(this.locX, this.locY);
  strokeWeight(0);
  this.talk();
  }
}
  