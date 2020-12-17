// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 思路：对字符串排序之后，如果相同，则字符串的顺序一定相同
var groupAnagrams = (strs) => {
  if (!strs.length) return []
  let map = new Map()
  for (let str of strs) {
    let array = Array.from(str)
    array.sort()
    let key = array.toString()
    let list = map.get(key) ? map.get(key) : new Array()
    list.push(str)
    map.set(key, list)
  }
  return Array.from(map.values())
}
groupAnagrams([ 'abcde' ])

