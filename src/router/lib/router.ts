import { createRouter, createWebHashHistory } from 'vue-router'

import { PageNameEnum } from './page-name.enum'

export const router = createRouter({
  routes: [
    {
      path: `/explorer/:path?`,
      name: PageNameEnum.explorer,
      component: () => import('@/pages/ExplorerPage.vue'),
    },
    {
      path: '/editor/:path',
      name: PageNameEnum.editFile,
      component: () => import('@/pages/EditorPage.vue'),
    },
    {
      path: '/',
      redirect: `/explorer`,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: `/explorer`,
    },
  ],
  history: createWebHashHistory(),
})
