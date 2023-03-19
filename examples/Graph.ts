import fs from 'fs';
import { join } from 'path';
import { Graph } from './../src';

const graph = new Graph();

const data = fs.readFileSync(join(__dirname,'./graph.txt'),'utf-8');
data.trim().split('\n').forEach(d=>{
  const [source, target] = d.trim().split(' ');
  graph.addEdge(source, target);
})

graph.scc()

// const data = {
//   nodes: [
//     { id: '0' },
//     { id: '1' },
//     { id: '2' },
//     { id: '3' },
//     { id: '4' },
//     { id: '5' },
//     { id: '6' },
//     { id: '7' },
//   ],
//   links: [
//     { source: '0', target: '1', weight: 1 },
//     { source: '1', target: '2', weight: 1 },
//     { source: '2', target: '3', weight: 1 },
//     { source: '3', target: '0', weight: 1 },
//     { source: '2', target: '4', weight: 1 },
//     { source: '4', target: '5', weight: 1 },
//     { source: '5', target: '6', weight: 1 },
//     { source: '6', target: '4', weight: 1 },
//     { source: '6', target: '7', weight: 1 },
//   ],
// };
// const graph = new Graph(data);
// graph.scc();

// console.log(graph.depthFirstSearch());
// const cloned = graph.clone();
// cloned.transpose();
// console.log(cloned.depthFirstSearch());

// const data = {
//   nodes: [
//     { id: 'A' },
//     { id: 'B' },
//     { id: 'C' },
//     { id: 'D' },
//     { id: 'E' },
//     { id: 'F' },
//   ],
//   links: [
//     { source: 'A', target: 'B', weight: 1 },
//     { source: 'B', target: 'C', weight: 1 },
//     { source: 'C', target: 'D', weight: 5 },
//     { source: 'D', target: 'E', weight: 1 },
//     { source: 'E', target: 'A', weight: 1 },
//     { source: 'B', target: 'D', weight: 6 },
//     { source: 'D', target: 'F', weight: 1 },
//     { source: 'F', target: 'B', weight: 7 },
//     { source: 'E', target: 'F', weight: 1 },
//   ],
// };
