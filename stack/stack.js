
class Stack {
  constructor() {

    this.items = [];
  }

  push = (element) => {
    this.items.push(element);
  }
  pop = (element) => {
    return this.items.pop();
  }

  peek = () => {
    return this.items[this.items.length - 1];
  }

  isEmpty = () => {
    return this.items.length === 0;
  }
  size = () => {
    return this.items.length;
  }
  toString = () => {
    return this.items.join(" ");
  }

}

module.exports = Stack;

