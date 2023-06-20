import { Graph } from '../src';

const GRAPH_1 = {
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

const GRAPH_2 = {
  nodes: [
    { id: 'A'},
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
  ],
  links: [
    { source: 'A', target: 'B', weight: 7 },
    { source: 'A', target: 'C', weight: 12 },
    { source: 'B', target: 'C', weight: 2 },
    { source: 'B', target: 'D', weight: 9 },
    { source: 'C', target: 'E', weight: 10 },
    { source: 'E', target: 'D', weight: 4 },
    { source: 'D', target: 'F', weight: 1 },
    { source: 'E', target: 'F', weight: 5 },
  ],
};

describe('Graph', () => {
  it('can compute scc', () => {
    const graph = new Graph(GRAPH_1);
    expect(graph.scc()).toEqual([['1','2','3','0'],['5','6','4'],['7']])
  });

  it('can compute shortest path', () => {
    const graph = new Graph(GRAPH_2);
    expect(graph.dijkstra('A','E')).toEqual({ path: [ 'A', 'B', 'C', 'E' ], distance: 19 });
  });
});
