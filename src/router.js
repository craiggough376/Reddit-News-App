import Vue from 'vue';
import Router from 'vue-router';
import News from './views/News.vue';
import Bookmarks from './views/Bookmarks.vue';
import Uplifting from './views/Uplifting.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: Bookmarks
    },
    {
      path: '/uplifting',
      name: 'uplifting',
      component: Uplifting
    }
  ]
})

export default router;
