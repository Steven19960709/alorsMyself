function isSameMirror(head) {
  let node = head
  if (!head)  return null
  let stack = [head.left, head.right]
  
  while(stack.length) {
    let right = stack.pop()
    let left = stack.pop()

    if (!left && !right) continue
    if ((!left || !right) || left.val !== right.val) return false
    if (left.val === right.val)  return true
    stack.push(left.left)
    stack.push(right.right)
    stack.push(left.right)
    stack.push(right.left)
  }
  return true
}

