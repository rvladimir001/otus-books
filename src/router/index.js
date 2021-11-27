import { createRouter, createWebHistory } from "vue-router";
import Books from "../components/Books.vue";
import Authors from "../components/Authors";
import BooksForm from "../components/BooksForm";
import AuthorsForm from "../components/AuthorsForm";

const routes = [
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/authors",
    name: "Authors",
    component: Authors,
  },
  {
    path: "/addbooks",
    name: "BooksForm",
    component: BooksForm,
  },
  {
    path: "/addauthors",
    name: "AuthorsForm",
    component: AuthorsForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
