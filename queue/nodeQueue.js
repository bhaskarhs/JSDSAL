class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.size = 0;
  }

  enqueue(val) {
    //adding the  value
    //if thereis nothing in the queue then the first and rare will point to same
    //else the next value of rare will be the value that is inserted.
    var inNode = new Node(val, null);
    // debugger;
    if (this.size == 0) {
      this.front = this.rear = inNode;
      this.size++;
    } else {
      this.rear.next = inNode;
      this.rear = inNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      var val = this.front.value;
      this.front = this.front.next;
      size--;
      return val;
    }
  }
  peek() {
    if (this.size == 0) {
      throw "Stack Underflow";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size == 0;
  }

  print() {
    var holder = this.front;
    console.log(this.rear);
    while (holder.next != null) {
      console.log(holder.value, holder);
      holder = holder.next;
    }
  }
}

let q = new Queue();
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.print();
