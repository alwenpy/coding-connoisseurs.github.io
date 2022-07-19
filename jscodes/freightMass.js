function calculateMass(freightItems) {
    let totalMass = 0;
  
    /*
    Replace this comment with your code.
    Use the array reduce() function to replace the value of totalMass.
    Note that it is possible to use forEach or other loop types to do this, but
    using "reduce" is probably the most elegant solution!
    */
    for (let i=0;i<freightItems.length;i++)
    {
        var x=freightItems[i].length;
        totalMass = totalMass + x;
    }
    return totalMass;
  }

  const mass = calculateMass(['dog', 'donkey', 'cat']);
  console.log('Total mass of items is ' + mass); // should be 12