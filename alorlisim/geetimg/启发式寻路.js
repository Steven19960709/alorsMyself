// A* A寻路的一个特例，能找到最佳路径的一种算法

class Sorted {
  constructor () {
    this.data = data.slice()
    this.compare = compare || ((a, b) => (a - b))
  }
  take () {
    let min = data[0]
    let minIndex = 0

    for (let i = 0; i < data.length; i++) {
      if (this.compare(data[i], min) < 0) {
        min = data[i]
        minIndex = i
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1]
    this.data.pop()
  }
  give (v) {
    this.data.push(v)
  }
}