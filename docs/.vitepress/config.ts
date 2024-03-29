import { defineConfig } from 'vitepress';
import LinkedList from './sidebar/LinkedList.json';
import LinkedListNode from './sidebar/LinkedListNode.json';
import BinaryHeap from './sidebar/BinaryHeap.json';
import PriorityQueue from './sidebar/PriorityQueue.json';
import Queue from './sidebar/Queue.json';
import Stack from './sidebar/Stack.json';
import Tree from './sidebar/Tree.json';
import TreeNode from './sidebar/TreeNode.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tsds/',
  title: 'TSDS',
  description: 'TypeScript Data Structures that you need!',
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/favicons/apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/favicons/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/favicons/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/assets/favicons/safari-pinned-tab.svg',
        color: '#646cff',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#646cff' }],
    [
      'meta',
      {
        name: 'msapplication-config',
        content: '/assets/favicons/browserconfig.xml',
      },
    ],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],
  themeConfig: {
    logo: './logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction',
      },
      {
        text: 'Installation',
        link: '/installation',
      },
      {
        text: 'Data Structures',
        items: [
          {
            text: 'LinkedList&lt;T&gt;',
            link: '/data-structures/LinkedList/LinkedList',
            collapsed: true,
            items: [...LinkedList],
          },
          {
            text: 'LinkedListNode&lt;T&gt;',
            link: '/data-structures/LinkedListNode/LinkedListNode',
            collapsed: true,
            items: [...LinkedListNode],
          },
          {
            text: 'BinaryHeap&lt;T&gt;',
            link: '/data-structures/BinaryHeap/BinaryHeap',
            collapsed: true,
            items: [...BinaryHeap],
          },
          {
            text: 'PriorityQueue&lt;T&gt;',
            link: '/data-structures/PriorityQueue/PriorityQueue',
            collapsed: true,
            items: [...PriorityQueue],
          },
          {
            text: 'Queue&lt;T&gt;',
            link: '/data-structures/Queue/Queue',
            collapsed: true,
            items: [...Queue],
          },
          {
            text: 'Stack&lt;T&gt;',
            link: '/data-structures/Stack/Stack',
            collapsed: true,
            items: [...Stack],
          },
          {
            text: 'Tree&lt;T&gt;',
            link: '/data-structures/Tree/Tree',
            collapsed: true,
            items: [...Tree],
          },
          {
            text: 'TreeNode&lt;T&gt;',
            link: '/data-structures/TreeNode/TreeNode',
            collapsed: true,
            items: [...TreeNode],
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
