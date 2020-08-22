function reverseArr (arr) {
  let res = [];
  let i = 0,
      pows = 0;
  levelOrder(arr, 0, res, i, pows);

}
function levelOrder(arr, level, res, i, pows) {
    let times;
    if (pows === 0) times = 1;
    else times = pows * 2; 
    let len = arr.length;
    for(let j = 0; j <= times; j++) {
      if (i >= 0 && i < len) {
        if (res[level]) res[level].push(arr[i]);
        else res[level] = [arr[i]];
        i++;
      } else {
        break;
      }
    }
    levelOrder(arr, level + 1, res, i + times, times);
}
function reverselevelarr (arr) {
  if (!arr.length) return;
  let res = [];
  
}