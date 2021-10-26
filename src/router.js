import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue';
import BooksList from './components/BooksList.vue'
import AuthorsList from './components/AuthorsList.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/books',
            name: 'Books',
            component: BooksList
        },
        {
            path: '/authors',
            name: 'Authors',
            component: AuthorsList
        },
    ]
})