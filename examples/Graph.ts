import { Graph } from './../src';

const data = {
  nodes: [
    { id: 'ehsan' },
    { id: 'mohsen' },
    { id: 'hassan' },
    { id: 'jafar' },
    { id: 'mojtaba' },
  ],
  links: [
    { source: 'ehsan', target: 'mojtaba', weight: 5 },
    { source: 'mohsen', target: 'mojtaba', weight: 1 },
    { source: 'hassan', target: 'ehsan', weight: 1 },
    { source: 'hassan', target: 'jafar', weight: 1 },
    { source: 'jafar', target: 'ehsan', weight: 1 },
    { source: 'jafar', target: 'hassan', weight: 1 },
  ],
};

const graph = new Graph(data);


console.log(graph.serialize());
