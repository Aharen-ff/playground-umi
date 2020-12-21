import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/Layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/BasicTodo', component: '@/pages/BasicTodo/index' },
      ],
    },
  ],
});
