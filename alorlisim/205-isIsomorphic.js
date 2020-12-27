// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

// 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

function isIsomorphic(s, t) {
  if (s.length !== t.length)  return false
  let obj = {}
  let ob2 = {}
  for (let i = 0; i < s.length; i++) {
    const x = s[i]
    const y = t[i]
    if (!obj[x] && !ob2[y]) { // 不存在才进行设值，不然可能会覆盖已经生成的key
      obj[x] = y
      ob2[y] = x
    }
    if (obj[x] !== y || ob2[y] !== x) return false
  }
  return true
}

let res1 = isIsomorphic('ab', 'aa')
console.log(res1, 'is false')

// let res2 = isIsomorphic('foo', 'bar')
// console.log(res2, 'is false')