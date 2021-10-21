<template>
  <div>
     <router-view/>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'App',
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
