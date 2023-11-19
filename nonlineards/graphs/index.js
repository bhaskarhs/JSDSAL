class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}
class PrioityQueue {
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

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      this.adjList.set(node, currSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
    //unidirectional graph
    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  print() {
    console.log(this.adjList);
  }
}

function dijkstra(a, source) {
  let distances = {};
  let prev = {};
    let pq = new PrioityQueue();
    distances[source] = 0;
    pq.enqueue(source, 0)
    
    var allNodes = g.allNodes()
    for (i - 0; i < allNodes.length; i++){
        if (allNodes[i] != source) {
            distances[allNodes[i]] = null
        }
    }
    while (!pq.isEmpty) {
        
    }
}

let g = new Graph();

g.addEdge(0, 1, 0);
g.addEdge(0, 2, 0);
g.addEdge(1, 2, 0);
g.print();
