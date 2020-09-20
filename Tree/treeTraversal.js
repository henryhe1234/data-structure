class Node{
  constructor(key){
    this.item = key;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree{
  constructor(){
    this.root = null;
  }
  postorder(node){
    if(node === null)
    return;
    //traverse left
    this.postorder(node.left);
    //traverse root
    this.postorder(node.right);
    //traverse root
    console.log(node.item + "->");
  }
  inorder(node){
    if(node === null)
    return;
    //traverse left
    this.inorder(node.left);
    //traverse root
    console.log(node.item + "->");
    //traverse right
    this.inorder(node.right);
    
  }
  preorder(node){
    if(node === null)
    return;
    //traverse root
    console.log(node.item + "->");
    //traverse left
    this.preorder(node.left);
    //traverse right
    this.preorder(node.right);

  }

}
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(12);
tree.root.right = new Node(9);
tree.root.left.left = new Node(5);
tree.root.left.right = new Node(6);
// tree.postorder(tree.root);
tree.inorder(tree.root);
// tree.preorder(tree.root);