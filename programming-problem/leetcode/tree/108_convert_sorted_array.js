// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5


class TreeNode{
  constructor(val,left,right){
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const helper = (nums, low, high) => {
  if (low > high) {
    return null;
  }
  let mid = Math.floor((low + high) / 2);
  
  let node = new TreeNode(nums[mid]);
  console.log(node.val)
  node.left = helper(nums, low, mid - 1);
  node.right = helper(nums, mid + 1, high);
  return node;
};
const sortedArrayToBST =(nums) => {
  if (nums.length === 0) {
    return null;
  }
  const head = helper(nums, 0, nums.length - 1);
  return head;
};

sortedArrayToBST([-10,-3,0,5,9])