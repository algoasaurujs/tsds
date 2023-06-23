import { defineConfig } from 'vitepress';
import LinkedList from './sidebar/LinkedList.json';
import BinaryHeap from './sidebar/BinaryHeap.json';
import PriorityQueue from './sidebar/PriorityQueue.json';
import Queue from './sidebar/Queue.json';
import Stack from './sidebar/Stack.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TSDS',
  description: 'TypeScript Data Structures that you need!',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Data Structures',
        items: [
          {
            text: 'LinkedList&lt;T&gt;',
            link: '/data-structures/LinkedList/LinkedList',
            collapsed: true,
            items: [
              ...LinkedList
            ],
          },
          {
            text: 'BinaryHeap&lt;T&gt;',
            link: '/data-structures/BinaryHeap/BinaryHeap',
            collapsed: true,
            items: [
              ...BinaryHeap
            ],
          },
          {
            text: 'PriorityQueue&lt;T&gt;',
            link: '/data-structures/PriorityQueue/PriorityQueue',
            collapsed: true,
            items: [
              ...PriorityQueue
            ],
          },
          {
            text: 'Queue&lt;T&gt;',
            link: '/data-structures/Queue/Queue',
            collapsed: true,
            items: [
              ...Queue
            ],
          },
          {
            text: 'Stack&lt;T&gt;',
            link: '/data-structures/Stack/Stack',
            collapsed: true,
            items: [
              ...Stack
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/algoasaurujs/tsds' },
    ],
  },
  vite: {
    ssr: {
      noExternal: ['troisjs'],
    },
  },
});
