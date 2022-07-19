function calculatePower(powerSettings) {
    let totalPower = 0;
    for (let i=0;i<powerSettings.length;i++)
    {
        var sumhelp = powerSettings[i];
        totalPower = totalPower + sumhelp;
    }
    totalPower = totalPower * 2;
    return totalPower;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const laserPower = calculatePower([1, 3, 8]);
  console.log("Required laser power is " + laserPower); // should be 24