function scanAndFilter(freightItems, forbiddenString) {
    // This is an array variable you can override with your filtered array
    let filteredItems = [];
  
    for(let i=0; i<freightItems.length;i++){
        if(freightItems[i]===forbiddenString)
        {
        continue;
        }
        else
        {
            filteredItems.push(freightItems[i]);
        }
    }
  
    return filteredItems;
  }
  const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']