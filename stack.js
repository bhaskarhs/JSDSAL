//array based stack.

class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    if (this.stack.length > 0) return this.stack.pop();
    throw "stack unserflow";
  }
  print() {
    console.log(this.stack);
  }
  isEmpty() {
    return this.stack.length == 0;
  }
  size() {
    return this.stack.length;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

s.print();
s.pop();
s.print();
s.pop();
s.print();
s.pop();
// s.print();
// s.pop();
// s.print();


// (
//     function () {
//         var a = b = 5
//     }
// )();


// console.log(b);

//creaation of stack usin node based stack

class Node{
  constructor(value,next) {
    this.value = value; //current value of node
    this.next = next; //points to the node that follows the current node
  }
}

class Stack1 {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }
  push(value) {
    var inNode = new Node(value, this.top);
    this.top = inNode;
    this.size++;
  }
  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      throw "Stack Underflow";
    }
  }
  pop() {
    if (this.size > 0) {
      var retVal = this.top.value;
      this.top = this.top.next;
      this.size--;
      return retVal;
    } else {
      throw "Stack Underflow";
    }
  }
  isEmpty() {
    return this.size == 0;
  }
  print() {
    var holder = this.top;

    while (holder.next != null) {
      console.log(holder.value);

      holder = holder.next;
    }
  }
}

