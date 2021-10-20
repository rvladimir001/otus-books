<template>
  <BooksList v-bind:books="books"/>
  <AuthorsList v-bind:books="books"/>
</template>

<script>
import BooksList from './components/BooksList.vue'
import AuthorsList from './components/AuthorsList.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    BooksList,
    AuthorsList
  },
  data() {
    return {
      books: [],
    }
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      axios
          .get('https://gutendex.com/books/?page=1')
          .then(response => {
            this.books = response.data.results;
          })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
