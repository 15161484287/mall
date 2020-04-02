import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail');

const routes = [{
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: true
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '分类',
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车',
      keepAlive: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '我的',
      keepAlive: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '商品详情',
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history',
});

router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
});


export default router
