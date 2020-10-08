// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
var isPalindrome = function(head) {
  let arr = [];
  while(head){
      arr.push(head.val);
      head = head.next;
  }
  for(let i = 0,j = arr.length -1;i<Math.floor(arr.length /2);i++,j--){
      if(arr[i] !== arr[j])
          return false;
  }
  return true;
};