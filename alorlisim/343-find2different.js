var findTheDifference = function(s, t) {
  let a = new Map()
  let index
  for (let i = 0; i < s.length; i++) {
      if (a.has(s[i])) {
        index = a.get(s[i]) + 1
        a.set(s[i], index )
      } else {
        a.set(s[i], 1)
      }
  }
  for (let i of t) {
      if (!a.has(i)) return i
      if (a.has(i) && (a.get(i) > 0)) {
        index = a.get(i) - 1
        a.set(i, index)
        continue
      }
      return i
  }
};

// let d = findTheDifference('aaabcd', 'daabadc')
let d = findTheDifference('aaabcd', 'aaabcdd')
console.log(d)