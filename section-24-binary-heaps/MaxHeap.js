class MaxBinaryHeap {
  constructor(values) {
    this.values = values || []
  }

  insert(value) {
    this.values.push(value)

    let currentPointer = this.values.length - 1
    let parentPointer = Math.floor((this.values.length - 1) / 2) 

    while (value >= this.values[parentPointer]) {
      const temp = this.values[parentPointer]
      this.values[parentPointer] = value
      this.values[currentPointer] = temp 
      currentPointer = parentPointer 
      parentPointer = Math.floor((currentPointer - 1) / 2)
    } // My solution 
  }

  bubbleUp(value) { // Colt steele implementation 
    this.values.push(value)

    let index = this.values.length - 1
    const element = this.values[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]
      if (element <= parent) break  
      this.values[parentIndex] = element 
      this.values[index] = parent 
      index = parentIndex
    }
  }

  print() {
    console.log(this.values)
  }
}

const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12])

// heap.insert(55)
// heap.insert(34)

heap.bubbleUp(55)
heap.bubbleUp(34)
heap.bubbleUp(1)
heap.bubbleUp(199)

heap.print()