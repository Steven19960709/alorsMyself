// 二叉查找树/ 二叉搜索树

class BinarySearchTree {
  constructor (data, tree){
    this.tree = tree
  }
  find (data) {
    let p = new Node(this.tree)
    while (p !== null) {
      if (data < p.data) p = p.left

      else if (data > p.data) p = p.right

      else return p
    }
    return null
  }

  insert (data) {
    if (tree === null) {
      tree = new Node(data)
      return
    }
    let p = new Node()
    while (p !== null) {
      if (data > p.data) {
        if (p.right == null) {
          p.right = new Node(data)
          return
        }
        p = p.right
      } else {
        if (p.left === null) {
          p.left = new Node(data)
          return
        }
        p = p.left
      }
    }
  }

  delete (data) {
    let p = this.tree
    let pp = null
    while (p !== null && p.data !== data) {
      pp = p
      if (data > p.data) p = p.right
      else p = p.left
    }
    if (p === null) return
    if (p.left != null && p.right != null) {
      let minP = p.right
      let minPP = p
      while (minP.left !== null) {
        minPP = minP
        minP = minP.left
      }
      p.data = minP.data
      p = minP
      pp = minPP
    }
    let child
    if (p.left !== null) child = p.left
    else if (p.right !== null) child = p.right
    else child = null
    if (pp === null) tree = child
    else if (pp.left === p) pp.left = child
    else pp.right = child
  }
}

class Node {
  constructor (node) {
    this.data = node.data
    this.left = node.left
    this.right = node.right
  }
}