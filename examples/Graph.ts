import { Graph } from './../src';

const data = {
  nodes: [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
  ],
  links: [
    { source: 'A', target: 'B', weight: 1 },
    { source: 'A', target: 'A', weight: 1 },
    { source: 'B', target: 'A', weight: 1 },
    { source: 'A', target: 'C', weight: 1 },
    { source: 'C', target: 'A', weight: 1 },
    { source: 'B', target: 'D', weight: 1 },
    { source: 'D', target: 'B', weight: 1 },
    { source: 'D', target: 'D', weight: 1 },
    { source: 'C', target: 'E', weight: 1 },
    { source: 'E', target: 'C', weight: 1 },
    { source: 'D', target: 'E', weight: 1 },
    { source: 'E', target: 'D', weight: 1 },
    { source: 'D', target: 'F', weight: 1 },
    { source: 'F', target: 'D', weight: 1 },
    { source: 'E', target: 'F', weight: 1 },
    { source: 'F', target: 'E', weight: 1 },
  ],
};

const graph = new Graph(data);


console.log(graph.breadthFirstSearch());
