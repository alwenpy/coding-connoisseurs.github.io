class TargetingSolution {
    constructor(m){
      this.x= m.x;
      this.y=m.y;
      this.z= m.z;
    }
     target() {
        var str = '('+this.x+', '+this.y+', '+this.z+')';
        return str;
    }
  }
const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900,
  });
  
console.log(m.target());