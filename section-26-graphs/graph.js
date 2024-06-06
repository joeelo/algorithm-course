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

  dfsRecursive(vertex) {
    const list = []
    // visited is needed to keep track of what vertex' were visited, without this we would find ourselves in an infinite loop because it would go around in circles forever populating with the vertex' neighbors pushing to the list 
    const visited = {} 
    const adjacencyList = this.adjacencyList
    
    function dfs(v) {
      if (visited[v] || !v) {
        return 
      } else {
        visited[v] = true 
        list.push(v)

        const neighbors = adjacencyList[v]
        
        neighbors.forEach((n) => dfs(n))
        
        return 
      }
    } 

    dfs(vertex)

    return list
  }

  dfsIterative(vertex) {
    const stack = [vertex]
    const resultsList = []
    const visited = {}

    while(stack.length) {
      const currentVertex = stack.pop() 

      if (!visited[currentVertex]) {
        resultsList.push(currentVertex)
      }

      visited[currentVertex] = true 

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor)
        }
      })
    }

    return resultsList
  }
}

const g = new Graph() 
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// g.dfsRecursive("A")
const list = g.dfsIterative("A")
console.log(list)