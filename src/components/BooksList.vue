<template>
  <div>
    <h2>Литература</h2>
    <button сlass="show-modal-button" @click="showModal">Добавить книгу</button>
    <table>
      <tr>
        <th>ISBN</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Постер</th>
        <th>Краткое описание</th>
        <th>Цена</th>
        <th>Категория</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td>{{ book.ISBN }}</td>
        <td>{{ book.title }}</td>
        <td>
          <span v-for="athor in book.authors" :key="athor.name">{{ athor.name }}</span>
        </td>
        <td>
          <img :src="book.poster" style="width: 200px" alt="Постер книги">
        </td>
        <td>
          {{ book.description }}
        </td>
        <td>
          {{ book.price }}
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
    ...mapActions(["getBooks"]),
    showModal: function () {
      this.$refs.modal.show = true
    }
  }

}
</script>

<style scoped>

</style>
