{
  /**
     * 
Bubble sort: 
Go through the array, one value at a time.
For each value, compare the value with the next value.
If the value is higher than the next one, swap the values so that the highest value comes last.
Go through the array as many times as there are values in the array.
     * 
     * 
     */
}

const array = [10, 30, 4, 3, 1, 40, 0];

for (var j = 0; j < array.length; j++) {
  for (var i = 0; i < array.length - j; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }
}

console.log(array);
