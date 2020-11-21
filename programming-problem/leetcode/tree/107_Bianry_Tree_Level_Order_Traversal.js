// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

var levelOrderBottom = function(root) {
  if(root === null) return [];
  let answer = [];
  let queue = [root];
  while(queue.length > 0){
      let size = queue.length;
      let current = [];
      for(let i = 0;i<size;i++){
          let head = queue.shift();
          current.push(head.val);
          if(head.left !== null) queue.push(head.left)
          if(head.right !== null) queue.push(head.right)
          
      }
      answer.unshift(current);
  }
  return answer
  
  
};
