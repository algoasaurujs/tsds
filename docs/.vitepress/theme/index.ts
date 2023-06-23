import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import Layout from './Layout.vue';
import './custom.css';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(Layout)
    })
  }
};
