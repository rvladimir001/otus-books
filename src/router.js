import Vue from 'vue'
import Router from 'vue-router'
import BooksList from './components/BooksList.vue'
import AuthorsList from './components/AuthorsList.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'BooksList',
            component: BooksList
        },
        {
            path: '/booksList',
            name: 'BooksList',
            component: BooksList
        },
        {
            path: '/authorsList',
            name: 'AuthorsList',
            component: AuthorsList
        },
    ]
})