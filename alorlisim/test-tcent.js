function push(arr, num) {
  if (!Array.isArray(arr)) return;
  arr.push(num);
}
function getMin (arr) {
  if (!Array.isArray(arr) || arr.length === 0) return;
  let min = -1e7;
  min = Math.min(...arr)
  console.log(min)
  return min;
}
function pop (arr) {
 return arr.pop();
}
let arr = [];
push(arr, 3);
push(arr, 2);
push(arr, 1);
getMin(arr);
pop(arr);
getMin(arr);