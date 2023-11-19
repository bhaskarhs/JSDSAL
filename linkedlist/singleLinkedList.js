//Singly Linked List: A chain of node objects where there is a start, and each node keeps track of the one following it

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.front = new Node(null, null);
    this.size = 0;
  }
  insertFront(val) {
    let nodeIn = new Node(val, this.front);
    this.front = nodeIn;
    this.size++;
  }
  print() {
    var holder = this.front;
    while (holder != null) {
      console.log(holder.value);
      holder = holder.next;
    }
  }
  insert(val, index) {
    //insert at any where
    if (index > this.size) {
      throw "IndexOfRange";
    }
    if (this.size == 0) {
      this.insertFront(val);
    }
    if (this.size === 1) {
      this.front.next = new Node(val, null);
      this.size++;
    } else {
      //take a temp value and store the front value
      var i = 0;
      let holder = this.front;
      while (i < index - 1) {
        // lopping through the holder to find the index to insert
        holder = holder.next;
        i++;
      }
      var newNode = new Node(val, holder.next); // the new node contain presernt value and its next val
      holder.next = newNode; //the present value is inserted into holder
      this.size++;
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
        let i = 0;
        let holder = this.front;
        while (i < index) {
          holder = holder.next;
          i++;
        }
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }
  insertRear(val) {
    if (this.size === 0) {
      this.insertFront(val);
    } else {
      if (this.size == 1) {
        this.front.next = new Node(val, null);
        this.size++;
      } else {
        let holder = this.front;
        while (holder.next !== null) {
          holder = holder.next; //every time the loop iterate the holder will have its next places
        }
        holder.next = new Node(val, null);
        this.size++;
      }
    }
  }
}

let l = new linkedList();
l.insertFront(1);
l.insertFront(2);
l.insert(3, 1);
l.print();

var list = new linkedList();

list.insertRear(1);

list.insertRear(2);

list.insertRear(3);

list.print();

