class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }
  //insert at the end of linkedlist
  append(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {

      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode
    }
    this.length++

  }

  //insert at specific position
  insert(position, data) {
    if (position < 0 || position > this.length) return false;

    let newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let index = 0;
    if (position === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }

  //obtain element at specific location
  get(position) { 
    if(position < 0 || position >= this.length) return null;
    let current = this.head;
    let index = 0;
    if(position === 0){
      return current.data;
    }else{
      while(index++ < position){
        current = current.next;
      }
      return current;
    }
  }

  //return the position of element
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  //update element at specific location
  update(position,data) {
    this.get(position).data = data;
    return this.get(position).data;
   }

  //remove element at specific location
  removeAt(position) {
    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    let previous = null;
    let index = 0;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;

  }

  //remove an specifc element
  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);

  }

  //return if is empty
  isEmpty() {
    return this.length === 0;
  }

  //return size of linkedlist
  size() { 
    return this.length;
  }

  //print the linkedlist
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += "," + current.data;
      current = current.next;
    }
    return string.slice(1);
  }
  get first(){
    return this.head.data;
  }



}
let list = new LinkedList();
list.insert(0, 3);
list.append(5);
list.append(6);
list.insert(2, 4);
// list.remove(5);
list.update(2,7);
console.log(list.get(2).data);
console.log(list.toString());