class Set{
  constructor(){
    this.items = {};
  }
  has(value){
    return this.items.hasOwnProperty(value);
  }
  add(value){
    if(this.has(value)) return false;

    this.items[value] = value;
    return true;
  }
  remove(value){
    if(!this.has(value)) return false;

    delete this.items[value];
    return true;
  }
  clear(){
    this.items = {};
  }
  size(){
    return Object.keys(this.items).length;
  }
  values(){
    return Object.keys(this.items);
  }

}
let set = new Set();
set.add(1);
console.log(set.values());
set.add(1);
console.log(set.values());
set.add(100);
set.add(200);
console.log(set.values());
console.log(set.has(100));
set.remove(100);
console.log(set.values());
console.log(set.has(100));
console.log(set.size());
set.clear();
console.log(set.size());
