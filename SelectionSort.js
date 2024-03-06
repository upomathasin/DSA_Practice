{
  /**    
Go through the array to find the lowest value.
Move the lowest value to the front of the unsorted part of the array.
Go through the array again as many times as there are values in the array.   
**/
}

const a = [10, 30, 4, 3, 1, 40, 0];

for (var i = 0; i < a.length; i++) {
  let min = i;
  for (var j = i + 1; j < a.length; j++) {
    if (a[j] < a[min]) {
      let temp = a[min];
      a[min] = a[j];
      a[j] = temp;
    }
  }
}

console.log("Sorted ", a);
