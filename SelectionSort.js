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
