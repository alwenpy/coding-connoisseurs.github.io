function getFirstAmountSorted(inputArray, numberOfItems) {
    narray=inputArray;
    n=numberOfItems;
    narray.sort();
    narray.splice(n,narray.length);
    return narray ;
}

  const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
  console.log(newArray); // << should print out ['apple', 'bat']