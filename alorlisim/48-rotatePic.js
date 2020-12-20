// rotate

// 给定一个 n × n 的二维矩阵表示一个图像。

// 将图像顺时针旋转 90 度。

// 思路：先水平翻转，然后在沿着左上角 -- 右下角 的对角线进行反转。
var rotate = (martix) => {
  const n = martix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j ++) {
      [martix[i][j], martix[n - i - 1][j]] = [martix[n - i - 1][j], martix[i][j]]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [martix[i][j], martix[j][i]] = [martix[j][i], martix[i][j]]
    }
  }
}