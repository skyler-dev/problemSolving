// 트리 순회
// 트리에서 각 노드를 한 번씩 순회
// 전위 순회, 중위 순회, 후위 순회

// 전위 순회 : 가장 먼저 방문하게 될 노드는 언제나 루트
// 중위 순회 : 이진 탐색 트리를 중위 순회 할 경우 오름차순 방문
// 후위 순회 : 가장 마지막에 방문하게 될 노드는 언제나 루트

// 재귀 함수


class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(node) {
      this.root = node;
    }
  
    preorder(currentNode) { // 전위 순회
      console.log(currentNode.value);
      if (currentNode.left) this.preorder(currentNode.left);
      if (currentNode.right) this.preorder(currentNode.right);
    }
  
    inorder(currentNode) { // 중위 순회
      if (currentNode.left) this.inorder(currentNode.left);
      console.log(currentNode.value);
      if (currentNode.right) this.inorder(currentNode.right);
    }
  
    postorder(currentNode) { // 후위 순회
      if (currentNode.left) this.postorder(currentNode.left);
      if (currentNode.right) this.postorder(currentNode.right);
      console.log(currentNode.value);
    }
  }
  
  const tree = new Tree(new Node(9));
  tree.root.left = new Node(3);
  tree.root.right = new Node(8);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(5);
  tree.root.right.right = new Node(7);
  tree.root.left.right.right = new Node(4);
  
  tree.preorder(tree.root);
  tree.inorder(tree.root);
  tree.postorder(tree.root);