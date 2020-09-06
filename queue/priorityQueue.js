class QueueElement {
  constructor(element, priority) {
    this.element = element,
      this.priority = priority
  }
}
class PriorityQueue {

  constructor() {
    this.items = [];

  }
  enqueue(element, priority) {
    //create queueElement
    let queueElement = new QueueElement(element, priority);
    if (this.items.length === 0) {
      this.items.push(queueElement);
    } else {
      let Added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          Added = true;
          break;
        }
      }
      if (!Added) {
        this.items.push(queueElement);
      }
    }
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  toString() {
    let string = ""
    for(let i =0;i<this.items.length;i++){
      string += this.items[i].element + "-" + this.items[i].priority + " "
    }
    return string;
  }

}

module.exports = PriorityQueue;