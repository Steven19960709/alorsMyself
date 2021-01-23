function checkStraightLine(cooridinate) {
  if (cooridinate.length < 2) return false
  let a = 0
  let k = 0
  let first = cooridinate[0]
  let secod = cooridinate[1]
  a = (secod[1] - first[1]) / (secod[0] - first[0])
  console.log(a)
  if (a === Infinity) {
    for (let i = 2; i < cooridinate.length; i++) {
      if (cooridinate[i][0] !== first[0]) return false
    }
    return true
  }
  if (a === 0) {
    for (let i = 2; i < cooridinate.length; i++) {
      if (cooridinate[i][1] !== first[1]) return false
    }
    return true
  }
  k = first[1] - a * first[0]
  console.log(k, a)
  for (let i = 2; i < cooridinate.length; i++) {
    if ((cooridinate[i][0] * a + k) !== cooridinate[i][1]) {
      return false
    }
  }
  return true
}

// 关注 斜率为Infinity和0 的情况
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]))
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]))
console.log(checkStraightLine([[0,0],[0,1],[0,-1]]))
console.log(checkStraightLine([1, 0], [1, 4], [1, 6]))
console.log(checkStraightLine([[2, 5], [1, 4], [1, 6]]))
