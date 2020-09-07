function getCowNum (arr1, arr2) {
  return arr1.filter((item, index) => {
    return (arr2.indexOf(item) !== -1)
  })
}
let arr1 = [1,2,3];
let arr2 = [1,2];
console.log(getCowNum(arr1, arr2));