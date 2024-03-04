const array = [10, 30, 4, 3, 1, 40, 0];

console.log(array);

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
