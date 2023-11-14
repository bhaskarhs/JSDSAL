// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(val) {
//     this.stack.push(val);
//   }
//   pop() {
//     if (this.stack.length > 0) return this.stack.pop();
//     throw "stack unserflow";
//   }
//   print() {
//     console.log(this.stack);
//   }
//   isEmpty() {
//     return this.stack.length == 0;
//   }
//   size() {
//     return this.stack.length;
//   }
//   peek() {
//     return this.stack[this.stack.length - 1];
//   }
// }

// class Queue{
//     constructor() {
//         this.s1 = new Stack();
//         this.s2 = new Stack();
//     }

//     enqueue(val) {
//         //how it should work
//         /*
//             well the logic is simple
//             the first value comes will sit in the s1 stack.
//             from the next value before we make it to place in the first stack
//             we will pop the existing value from the stack1 and push it to stack2 and
//             new value will sit in the stack1
//             on the last step we will pop the values form the s2
//             and make it push to s1
//             now the latest value will be at the bottom and first value will be on the top

//         */
//         while (!this.s1.isEmpty()) {
//             this.s2.push(this.s1.pop())
//         }
//         this.s1.push(val)
//         while (!this.s2.isEmpty()) {
//            this.s1.push(this.s2.pop())
//         }
//     }
//     dequeue() {
//         return this.s1.pop()
//     }
// }

// reverse a queue using an array acting as a stack

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
    var inNode = new Node(val, null);
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
      this.size--;
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
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
}

function reverseQueue(queue) {
  var stack = [];
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue()); //1,2,3
  }
  while (stack.length > 0) {
    queue.enqueue(
      stack.pop() // 3,2,1
    );
  }
  return queue;
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q = reverseQueue(q);
q.print();
