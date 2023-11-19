class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  insertFront(val) {
    var nodeIn = new Node(val, null, null);

    if (this.size == 0) {
      this.front = this.rear = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front.prev = nodeIn;

      this.front = nodeIn;
    }

    this.size++;
  }

  insert(val, index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.insertFront(val);
      } else {
        var i = 0;
        var holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        var newNode = new Node(val, holder.next, holder);

        if (holder.next != null) {
          holder.next.prev = newNode;
        }

        holder.next = newNode;

        this.size++;
      }
    }
  }
  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  delete(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.deleteFront();
      } else {
        var i = 0;
        var holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }

  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }

  printReverse() {
    var holder = this.rear;

    console.table("rear", this.rear, "front", this.front);

    while (holder != null) {
      console.log(holder.value);
      holder = holder.prev;
    }
  }
}

let dl = new LinkedList();

dl.insertFront(1);
dl.insertFront(2);
dl.insert(3, 0);
dl.print();
// dl.insert(4, 2);
dl.printReverse();
