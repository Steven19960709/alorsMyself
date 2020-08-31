let container = document.getElementById('container')
function sleep (ms) {
  return new Promise((resolve) => {
    setTimeout(ßresolve(), ms)
  })
}
async function path (map, start, end) {
  var queue = [start]
  async function insert(x, y) { // 入队的逻辑
    if (x < 0 || x >= 100 || y < 0 || y >= 100) { // 处理边缘
      return
    }
    if (map[y * 100 + x]) return
    await sleep(30)
    container.children[y * 100 + x].style.backgroundColor = 'Lightgreen'
    map[y * 100 + x] = 2 // 做一个标记，不能重复走
    queue.push([x, y])
  }
  while (queue.length) {
    let [x, y] = queue.shift() // 
    if (x === end[0] && y === end[1]) return true
    insert(x - 1, y)
    insert(x, y - 1)
    insert(x + 1, y)
    insert(x, y + 1)
  }
  return false
}