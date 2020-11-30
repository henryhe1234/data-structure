// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  let answer = [];
  if(root !== null) searchBT(root,"",answer);
  return answer;
  
  
};


const searchBT = (root,path,answer) =>{
  if(root.left === null && root.right === null) answer.push(path + root.val);
  if(root.left !== null) searchBT(root.left,path + root.val + "->",answer);
  if(root.right !== null) searchBT(root.right,path + root.val + "->",answer);
}
