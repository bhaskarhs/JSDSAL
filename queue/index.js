//queue is firstinfirstout approach to store the data . while implementing the queue based approach we have to keep track what is being added and what is being removed

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(val) {
    //adding the val to queue
    this.queue[this.rear] = val;
    this.rear++;
  }
  dequeue() {
    //removing val from the queue
    if (this.queue.length > 0) {
      let val = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return val;
    } else {
      throw "stack underflow";
    }
  }
  print() {
    console.log(this.queue);
  }
  peek() {
    return this.queue[this.front];
  }
  length() {
    return this.queue.length;
  }
  isEmpty() {
    return (this.queue.length = 0);
  }
}

function reverse(q) {
  var stack = [];
  while (!q.isEmpty()) {
    stack.push(q.dequeue());
  }
  while (stack.length > 0) {
    q.enqueue(stack.pop());
  }
  return q;
}

let q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.enqueue(1);
q = reverse(q);
q.print();
