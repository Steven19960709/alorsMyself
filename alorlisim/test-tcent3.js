function wasteNum(time, ml, t, arr) {
  if (ml > time) {
      console.log(-1);
      return;
  }
  let total = ml * t;
  let mlt = 0;
  for (let i = 0; i < ml; i++) {
      mlt += (+arr[i]);
  }
  let start = 0;
  for (let i = ml; i < time; i++) {
      if (mlt >= total) {
          break;
      } 
      if (mlt < total) {
          mlt -= (+arr[i - ml]);
          mlt += (+arr[i]);
          console.log(mlt)
          start++;
      }
  }
  console.log(time - start);
}
let time = 10;
    let ml = 5;
    let t = 30;
let arr = ['10','20','30','40','50','60','70','70','70','70'];
wasteNum(time, ml, t, arr);