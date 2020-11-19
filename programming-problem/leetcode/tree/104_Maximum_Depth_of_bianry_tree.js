// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.
var maxDepth = function(root) {
  if(root === null){
      return 0;
  }
  let depth_left = maxDepth(root.left)+1;
  let depth_right = maxDepth(root.right)+1;
  return depth_left > depth_right ? depth_left : depth_right;
};
