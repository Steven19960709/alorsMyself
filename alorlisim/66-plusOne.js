//给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。


var onePlus = function (digits) {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i] ++
    digits[i] %= 10
    if (digits[i] !== 0) {
      return digits
    }
  }
  digits = [...Array(len + 1)].fill(0)
  digits[0] = 1
  return digits
}

let res = onePlus([9, 9])
console.log(res)