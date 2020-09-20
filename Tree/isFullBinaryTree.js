class Node {
  constructor(item) {

    this.data = item;
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  isFullBianryTree(node) {
    if (node === null)
      return true;

    if (node.leftChild === null && node.rightChild === null)
      return true;
    if ((node.leftChild !== null) && (node.rightChild !== null))
      return this.isFullBianryTree(node.leftChild) && this.isFullBianryTree(node.rightChild);

    return false;
  }
}
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.leftChild = new Node(2);
tree.root.rightChild = new Node(3);
tree.root.leftChild.leftChild = new Node(4);
tree.root.leftChild.rightChild = new Node(5);
tree.root.rightChild.leftChild = new Node(6);
tree.root.rightChild.rightChild = new Node(7);
if(tree.isFullBianryTree(tree.root)){
  console.log("The tree is full binary tree");
}else{
  console.log("The tree is not full bianry tree");
}