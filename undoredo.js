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

let undoStack = new Stack();
let redoStack = new Stack();
let counter = 0;

function increment() {
  undoStack.push(counter);
  counter++;
  document.getElementById("val").value = counter;
}

function undo() {
    undoStack.print()
    redoStack.push(counter)
    counter = undoStack.pop()
    document.getElementById("val").value = counter;
}

function redo() {
    redoStack.print()
    undoStack.push(counter)
    counter = redoStack.pop()
     document.getElementById("val").value = counter;
}