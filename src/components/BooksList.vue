<template>
  <div>
    <h2>Литература</h2>
    <table>
      <tr>
        <th>Название</th>
        <th>Автор</th>
        <th>Язык</th>
        <th>Категория</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.title }}</td>
        <td>
          <span v-for="athor in book.authors" :key="athor.name">{{ athor.name }}</span>
        </td>
        <td>
          <span v-for="lang in book.languages" :key="lang">{{ lang }}</span>
        </td>
        <td>
          <span v-for="bookshelv in book.bookshelves" :key="bookshelv">{{ bookshelv }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'BooksList',
  data() {
    return {}
  },
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

</style>
