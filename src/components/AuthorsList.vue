<template>
  <div>
    <h2>Авторы</h2>
    <table>
      <tr>
        <th>Автор</th>
        <th>Год рожения</th>
        <th>Язык</th>
        <th>Книги</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.authors[0].name }}</td>
        <td>
          {{ book.authors[0].birth_year }}
        </td>
        <td>
          {{ book.languages[0] }}
        </td>
        <td>{{ book.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AuthorsList',
  created() {
    this.getBooks(1)
  },
  computed: {
    ...mapGetters(["books"])
  },
  methods: {
    ...mapActions(["getBooks"])
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

