class Graph{
  constructor(size){
    this.adjMatrix = [];
    for(let i = 0;i<size;i++){
      let temp = [];
      for(let j = 0;j<size;j++){
        temp.push(0);
      }
      this.adjMatrix.push(temp);
    }
  }
  add_edge(v1,v2){
    if(v1 === v2){
      console.log("same vertex");
      return;
    }
    this.adjMatrix[v1][v2] = 1;
    this.adjMatrix[v2][v1] = 1;
    
  }
  remove_edge(v1,v2){
    if(this.adjMatrix[v1][v2] === 0){
      console.log("no edge between them")
      return ;
    }
    this.adjMatrix[v1][v2] = 0;
    this.adjMatrix[v2][v1] = 0;
  }
  print(){
    console.log(this.adjMatrix);
  }
  

}
let graph = new Graph(5);
graph.add_edge(0,1);
graph.add_edge(0,2);
graph.add_edge(1,2);
graph.add_edge(2,0);
graph.add_edge(2,3);
graph.print();

graph.remove_edge(1,0);
graph.print();