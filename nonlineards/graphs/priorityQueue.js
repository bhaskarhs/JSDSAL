class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, weight) {
    var graphNode = new GraphNode(element, weight);
    var contain = false;
    var i = 0;

    while (i < this.items.length && !contain) {
      if (this.items[i].weight > graphNode.weight) {
        this.items.splice(i, 0, graphNode);
        contain = true;
      }
      i++;
    }

    if (!contain) {
      this.items.push(graphNode);
    }
  }
  dequeue() {
    if (this.items.length == 0) {
      throw "StackUnderflow";
    } else {
      return this.items.shift();
    }
  }
  print() {
    console.log(this.items);
  }
}

var pq = new PriorityQueue();
pq.enqueue(1, 10);
pq.enqueue(2, 5);
pq.enqueue(3, 0);
pq.enqueue(4, 20);
pq.print();
