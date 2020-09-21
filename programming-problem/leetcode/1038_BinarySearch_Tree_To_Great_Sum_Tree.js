var bstToGst = function(root) {
  let pre = 0;
  const helper = (root)=>{
      
  
      if(root.right !== null) helper(root.right);
      root.val = pre + root.val;
      pre = root.val;
      if(root.left !== null) helper(root.left);
      return root;
  }
  return helper(root);
 
  
};