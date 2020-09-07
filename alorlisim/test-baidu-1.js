function getMethod(n, m, arr1, arr2) {
  let res = [];
  let i = 0,
      j = 0;
  let len1 = arr1.length,
      len2 = arr2.length;
  while (i < len1 && j < len2) {
      if (arr1[i] > arr2[j]) j++;
      else {
        while (arr1[i] <= arr2[j] && i < len1 && j < len2) {
          res[i] = j + 1;
          i++;
          j++;
        }
      }
  }
  res.length = n;
  for (let i = 0; i < n; i++) {
    if (res[i] == undefined) {
      res[i] = -1;
    }
  }
  return res;
}
let n = 4;
let m = 6;
let arr1 = [33,66,99,1000];
let arr2 = [3,6,9,30,60,90,100,101];
console.log(getMethod(n, m, arr1, arr2))