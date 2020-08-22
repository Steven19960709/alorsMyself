function maxSum (arr, n, m) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] += arr[i - 1][j];
    }
  }
  let res = (arr[n - 1]).concat(arr[n - 1]);
  console.log(res)
  let max = 0;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += res[i];
    if (sum > max) {
      max = sum;
    }
    if (res[i] < 0) sum = 0;
  }
  return max;
}
let arr = [
  [2,1,2],
  [3,-1,4]
]
console.log(maxSum(arr,2,3));
