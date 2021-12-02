import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
import Properties from './pages/Properties.vue';
import Property from './pages/Property.vue';
import Contact from './pages/Contact.vue';
import Blog from './pages/Blog.vue';
import BlogArticle from './pages/BlogArticle.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/about-us', component: AboutUs, name: 'about-us' },
    { path: '/blog', component: Blog, name: 'blog' },
    { path: '/blog/:id', component: BlogArticle, name: 'blog-article' },
    { path: '/properties', component: Properties, name: 'properties' },
    { path: '/properties/:id', component: Property, name: 'property' },
    { path: '/contact', component: Contact, name: 'contact' }
  ]
});

export default router;
