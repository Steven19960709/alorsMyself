// 输入一个数组，获取之间最大的面积
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while(left < right) {
      const area = (right - left) * Math.min(height[right], height[left]);
      if (area > max) {
          max = area
      }
      if (height[left] < height[right]) {
          const lastLeft = height[left];
          left++;
          while(height[left] <= lastLeft && left < right) {
              left++;
          }
      } else {
          const lastRight = height[right];
          right--;
          while(lastRight >= height[right] && left < right) {
              right--;
          }
      }
  }
  return max;
};

// 面积计算规则，面积是由两个柱子的距离和柱子的最低高度决定的。所以需要移动矮柱子。
// 双指针法