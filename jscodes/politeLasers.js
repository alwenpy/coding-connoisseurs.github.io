function getLaserSetting(magicWord) {
    if (magicWord === 'please') {
      return 'OFF';
    } else {
      return 'ON';
    }
  }
  const currentSetting = getLaserSetting('please');
  console.log(currentSetting);