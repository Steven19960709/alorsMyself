function getCount(n) {
  if (n <= 1) {
      console.log(0);
      return;
  }
  if (n == 2) {
      console.log(1);
      return;
  }
  let total = 2;
  let i = 3;
  for (; total < n; i++) {
      total += (i - 1);
      console.log(total)
  }
  if (total > n) {
      console.log(i - 2);
      console.log("total")
      return;
  } else {
      console.log(i - 1);
      return;
  }
}
getCount(4);