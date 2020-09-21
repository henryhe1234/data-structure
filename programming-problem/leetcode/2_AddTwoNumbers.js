var addTwoNumbers = function(l1, l2) {
  if(l1 === null) return l2;
  if(l2 === null) return l1;
  
  let temp = 0;
  let head = new ListNode(0);
  let pos = head;
  while(l1 || l2 || temp >0){
      pos.next = new ListNode(0);
      pos = pos.next;
      
      if(l1 !== null){
          temp += l1.val;
          l1 = l1.next;
      }
      
      if(l2 !== null){
          temp += l2.val;
          l2 = l2.next
      }
      
      pos.val += temp %10;
      
      temp = parseInt(temp /10);
  }
  return head.next;
  
  
};