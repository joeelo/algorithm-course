class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(v1, v2) {
    // This is Unordered, because they each have a reference to eachother
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  addEdgeDirected(v1, v2) {
    // For this it matters what position v1 and v2 are in because only one will contain a reference to other. 
    this.adjacencyList[v1].push(v2)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex !== v1)
  }

  removeVertex(vertex) {
    delete this.adjacencyList[vertex]

    for (const key in this.adjacencyList) {
      this.adjacencyList[key] = this.adjacencyList[key].filter((v) => v !== vertex)
    }
  }
}

const g = new Graph() 
g.addVertex('San Diego')
g.addVertex('Tokyo')
g.addVertex('New York')

g.addEdge('San Diego', 'Tokyo')

g.addEdgeDirected('New York', 'Tokyo')

g.removeEdge('San Diego', 'Tokyo')
g.removeVertex('Tokyo')
console.log(g)