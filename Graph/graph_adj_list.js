class Graph {
  
  constructor(num) {
    this.numOfVertices = num;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v1, v2) {
    this.AdjList.get(v1).push(v2);
    this.AdjList.get(v2).push(v1);
  }
  printGraph() {
    let get_keys = this.AdjList.keys();
    for (const i of get_keys) {
      let get_values = this.AdjList.get(i);
      let conc = "";
      for (const j of get_values) {
        conc += j + " ";
      }
      console.log(i + " -> " + conc);
    }
  }
  DFSUtil(start, visited) {
    visited[start] = true;
    console.log(start);

    let get_neighbours = this.AdjList.get(start);
    for (let i of get_neighbours) {
      if (!visited[i]) {
        this.DFSUtil(i, visited);
      }
    }
  }
  dfs(start) {
    let visited = {};
    this.DFSUtil(start, visited);
  }
  bfs(start){
    let visited = {};
    this.BFSUtil(start,visited);
  }
  BFSUtil(start,visited){
    let queue = [];
    visited[start] = true;
    queue.push(start);
    while(queue.length !== 0){
      let queueElement = queue.shift();
      console.log(queueElement);
      let get_List = this.AdjList.get(queueElement);
      for(let i of get_List){
        if(!visited[i]){
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

}
var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
g.bfs('A');