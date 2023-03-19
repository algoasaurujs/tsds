import difference from 'lodash/difference';
import { PriorityQueue } from '../PriorityQueue';
import { Queue } from '../Queue';
import { Stack } from '../Stack';

class CycleError extends Error {
  constructor(public message: string) {
    super(message);
  }
}

type VertexKey = string;
type EncodedEdge = string;
type EdgeWeight = number;

type SerializedGraph = {
  nodes: { id: VertexKey }[];
  links: { source: VertexKey; target: VertexKey; weight: EdgeWeight }[];
};

export class Graph {
  constructor(serialized?: SerializedGraph) {
    if (serialized) {
      serialized.nodes.forEach(node => {
        this.addVertex(node.id);
      });
      serialized.links.forEach(link => {
        this.addEdge(link.source, link.target, link.weight);
      });
    }
  }

  /**
   * The adjacency list of the graph.
   * Keys are vertices ids.
   * Values are adjacent vertex id arrays.
   * @internal
   */
  protected _vertices: Map<VertexKey, VertexKey[]> = new Map();

  protected _edgeWeights: Map<EncodedEdge, EdgeWeight> = new Map();

  get vertices(): VertexKey[] {
    return Array.from(this._vertices.keys());
  }

  public adjacent(vertex: VertexKey): VertexKey[] {
    return this._vertices.get(vertex) || [];
  }

  // Computes a string encoding of an edge,
  // for use as a key in an object.
  protected _encodeEdge(u: VertexKey, v: VertexKey): EncodedEdge {
    return u + '|' + v;
  }

  protected _setWeight(
    vertex1: VertexKey,
    vertex2: VertexKey,
    weight: EdgeWeight
  ) {
    this._edgeWeights.set(this._encodeEdge(vertex1, vertex2), weight);
  }

  protected _getWeight(vertex1: VertexKey, vertex2: VertexKey) {
    if (this.hasEdge(vertex1, vertex2)) {
      return this._edgeWeights.get(this._encodeEdge(vertex1, vertex2)) || 1;
    }
    return null;
  }

  serialize(): SerializedGraph {
    const serialized: SerializedGraph = { nodes: [], links: [] };

    for (const entry of this._vertices) {
      const [vertex, adjacent] = entry;
      serialized.nodes.push({ id: vertex });
      adjacent.forEach(a => {
        const weight = this._getWeight(vertex, a) as EdgeWeight;
        serialized.links.push({ source: vertex, target: a, weight });
      });
    }

    return serialized;
  }

  clone(): Graph {
    const serialized = this.serialize();
    return new Graph(serialized);
  }

  transpose() {
    const _originalVertices = this._vertices;
    const _originalWeights = this._edgeWeights;
    this._vertices = new Map();
    this._edgeWeights = new Map();
    for (const [vertex, neighbors] of _originalVertices) {
      for (const neighbor of neighbors) {
        this.addVertex(neighbor);
        this.addEdge(neighbor, vertex);
      }
    }

    for (const [edge, weight] of _originalWeights) {
      const [source, target] = edge.split('|');
      this._setWeight(target, source, weight);
    }
  }

  /**
   * Returns `true` if there is a vertex with provided name.
   * @param name the name of the vertex that we want to search for.
   */
  hasVertex(name: VertexKey): boolean {
    return this._vertices.has(name);
  }

  /**
   * Adds a vertex to the Graph.
   * If the vertex was already added, this function does nothing.
   * @param name The name of the vertex that you to add into the Graph.
   */
  addVertex(name: VertexKey) {
    this._vertices.set(name, this.adjacent(name));
  }

  removeVertex(vertex: VertexKey) {
    if (this.hasVertex(vertex)) {
      this._vertices.forEach((_adjacent, v) => {
        this.removeEdge(v, vertex);
      });

      this._vertices.delete(vertex);
    }
  }

  hasEdge(vertex1: VertexKey, vertex2: VertexKey): boolean {
    return this.adjacent(vertex1).includes(vertex2);
  }

  /**
   * Adds an edge from _vertex1_ to _vertex2_.
   * Implicitly adds the vertices if they were not already added.
   * @param vertex1
   * @param vertex2
   * @param weight
   */
  addEdge(vertex1: VertexKey, vertex2: VertexKey, weight: EdgeWeight = 1) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.hasEdge(vertex1, vertex2)) {
      const adjacent = this.adjacent(vertex1);
      adjacent.push(vertex2);
      this._vertices.set(vertex1, adjacent);
      this._setWeight(vertex1, vertex2, weight);
    }
  }

  removeEdge(vertex1: VertexKey, vertex2: VertexKey) {
    if (this.hasVertex(vertex1)) {
      const adjacent = this.adjacent(vertex1).filter(v => v !== vertex2);
      this._edgeWeights.delete(this._encodeEdge(vertex1, vertex2));
      this._vertices.set(vertex1, adjacent);
    }
  }

  depthFirstSearch(
    sourceNodes?: VertexKey[],
    includeSourceNodes: boolean = true,
    errorOnCycle = false,
    finishStack?: Stack<VertexKey>
  ) {
    if (!sourceNodes) {
      sourceNodes = this.vertices;
    }

    const visited: Record<VertexKey, boolean> = {};
    const visiting: Record<VertexKey, boolean> = {};
    const nodeList: VertexKey[] = [];
    const isNotVisited = (vertex: VertexKey) => {
      return !visited[vertex];
    };
    const DFSVisit = (vertex: VertexKey) => {
      if (visiting[vertex] && errorOnCycle) {
        throw new CycleError('Cycle found');
      }
      if (isNotVisited(vertex)) {
        visited[vertex] = true;
        visiting[vertex] = true;
        const notVisitedAdjacent = this.adjacent(vertex).filter(isNotVisited);
        if (finishStack) {
          if (notVisitedAdjacent.length === 0) {
            finishStack.push(vertex);
          }
        }
        notVisitedAdjacent.forEach(DFSVisit);
        visiting[vertex] = false;
        nodeList.push(vertex);
      }
    };

    if (includeSourceNodes) {
      sourceNodes.forEach(DFSVisit);
    } else {
      sourceNodes.forEach(node => {
        visited[node] = true;
      });
      sourceNodes.forEach(node => {
        this.adjacent(node).forEach(DFSVisit);
      });
    }

    return nodeList;
  }

  hasCycle() {
    try {
      this.depthFirstSearch(undefined, true, true);
      return false;
    } catch (error) {
      if (error instanceof CycleError) {
        return true;
      } else {
        throw error;
      }
    }
  }

  topologicalSort(
    sourceNodes?: VertexKey[],
    includeSourceNodes: boolean = true
  ) {
    return this.depthFirstSearch(
      sourceNodes,
      includeSourceNodes,
      true
    ).reverse();
  }

  breadthFirstSearch(sourceNodes?: VertexKey[]) {
    if (!sourceNodes) {
      sourceNodes = this.vertices;
    }

    const queue = new Queue<VertexKey>(sourceNodes);

    const visited: Record<VertexKey, boolean> = {};
    const nodeList: VertexKey[] = [];

    const BFSVisit = (neighbor: VertexKey) => {
      if (!visited[neighbor]) {
        queue.enqueue(neighbor);
      }
    };

    let currentVertex: VertexKey;

    while (queue.length) {
      currentVertex = queue.dequeue();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        nodeList.push(currentVertex);
      }
      this.adjacent(currentVertex).forEach(BFSVisit);
    }

    return nodeList;
  }

  scc = () => {
    const sccNodes: VertexKey[][] = [];
    const finishStack = new Stack<VertexKey>();
    const visited: Record<VertexKey, boolean> = {};

    const transposed = this.clone();
    transposed.transpose();

    this.depthFirstSearch(undefined, true, false, finishStack);
    const finishedOrder = finishStack.toArray();

    const loopBack = (vertex: VertexKey) => {
      const adjacent = transposed.adjacent(vertex);
      for (const adj of adjacent) {
        if (!finishStack.includes(adj)) {
          finishStack.push(adj);
          loopBack(adj);
        }
      }
    };

    for (const item of finishedOrder) {
      loopBack(item);
    }

    while (!finishStack.isEmpty()) {
      const vertex = finishStack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        const nodes = transposed.depthFirstSearch([vertex]);
        sccNodes.push(difference(nodes, sccNodes.flat()));
        for (const node of nodes) {
          visited[node] = true;
        }
      }
    }
  };

  dijkstra(start: VertexKey, finish: VertexKey) {
    const nodes = new PriorityQueue<{ vertex: VertexKey; priority: number }>(
      [],
      (a, b) => a.priority - b.priority
    );
    const distances: Record<VertexKey, number> = {};
    const previous: Record<VertexKey, VertexKey | null> = {};
    let smallest: VertexKey;

    // build up initial state
    for (const [vertex] of this._vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue({ vertex, priority: 0 });
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue({ vertex, priority: Infinity });
      }
      previous[vertex] = null;
    }

    while (nodes.length) {
      smallest = nodes.dequeue().vertex;
      if (smallest === finish) {
        console.log(distances);
        console.log(previous);
        // We are done
        // we need to Build up the path at end
      }
      const neighbors = this._vertices.get(smallest);
      if (neighbors && distances[smallest] !== Infinity) {
        for (const neighbor of neighbors) {
          // Calculate new distance to neighbor node
          let neighborWeight = this._getWeight(smallest, neighbor) || 0;
          let candidate = distances[smallest] + neighborWeight;
          if (candidate < distances[neighbor]) {
            distances[neighbor] = candidate;
            previous[neighbor] = smallest;
            nodes.enqueue({ vertex: neighbor, priority: candidate });
          }
        }
      }
    }
  }
}
