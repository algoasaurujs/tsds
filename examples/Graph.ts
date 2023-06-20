import { Graph } from './../src';

const data = {
  nodes: [
    { id: '0' },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
  ],
  links: [
    { source: '0', target: '1', weight: 1 },
    { source: '1', target: '2', weight: 1 },
    { source: '2', target: '3', weight: 1 },
    { source: '3', target: '0', weight: 1 },
    { source: '2', target: '4', weight: 1 },
    { source: '4', target: '5', weight: 1 },
    { source: '5', target: '6', weight: 1 },
    { source: '6', target: '4', weight: 1 },
    { source: '6', target: '7', weight: 1 },
  ],
};
const graph = new Graph(data).transpose();
console.log(graph.topologicalSort())
