class Materializer {
    constructor(targetName) {
      this.target = targetName;
      this.activated = false;
    }
    activate () {
        this.activated = true;
    }
    materialize()
    {
        if(this.activated === true)
        {
            return this.target;
        }
        else
        {
            return undefined;
        }
    }
  }
  const m = new Materializer('Kevin');
  console.log(m.activated); // would print "false"
  
  m.activate();
  console.log(m.activated); 
  
  console.log(m.materialize()); 