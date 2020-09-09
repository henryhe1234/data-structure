class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

}
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  forwardString() {
    let current = this.head;
    let forwardStr = "";
    while (current) {
      forwardStr += "," + current.data;
      current = current.next;
    }
    return forwardStr.slice(1);
  }

  reverseString() {
    let current = this.tail;
    let reverseStr = "";
    while (current) {
      reverseStr += "," + current.data;
      current = current.prev;
    }
    return reverseStr.slice(1);
  }

  toString() {
    return this.forwardString();
  }

  insert(position, data) {
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(data);

    if (position === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
    } else if (position === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = previous;
      current.prev = newNode;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }
  removeAt(position) {

    if (position < 0 || position >= this.length) return null;
    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let index = 0;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }
    this.length--;
    return current;
  }
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
  remove(data) {
    let index = this.indexOf(data);
    return this.removeAt(index);
  }
  isEmpty() {
    return this.length === 0;
  }
  size(){
    return this.length;
  }
  getHead(){
    return this.head.data;
  }
  getTail(){
    return this.tail.data;
  }

}

let list = new DoublyLinkedList();
list.append("abc");
list.append("cba");
list.append("nba");
list.append("mba");
list.insert(0, "100");
list.insert(2, "200");
list.insert(6, "300");
console.log(list.forwardString());
list.removeAt(0);
console.log(list.forwardString());
console.log(list.indexOf("nba"));

list.removeAt(1);
console.log(list.forwardString());

list.removeAt(4);
console.log(list.forwardString());







