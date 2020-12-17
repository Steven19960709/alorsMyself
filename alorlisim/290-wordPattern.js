// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// eg: 'abba' str = 'dog cat cat dog' true
// eg: 'abba' str = 'dd aa dd ad' false
var wordPattern = function(pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(' ');
  if (pattern.length !== words.length) {
      return false;
  }
  for (const [i, word] of words.entries()) {
      const ch = pattern[i];
      if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
          return false;
    }
    console.log(word, ch)
      word2ch.set(word, ch);
      ch2word.set(ch, word);
  }
  return true;
};

let res = wordPattern('abba', 'dog cat cat dog')
let res1 = wordPattern('abba', 'd d a d')
console.log(res, res1)

const word2ch = new Map()
const ch2wrod = new Map()
const words = s.split('')
if (pattern.length !== words.length) return false
if (words.has('word') && words.get('word') !== ch) return false