<template>
  <div>
    <h2>Литература</h2>

    <button сlass="show-modal-button" @click="showModal">Добавить книгу</button>

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
    <BooksForm ref="modal"></BooksForm>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import BooksForm from "./BooksForm.vue";
import Vue from 'vue'

Vue.component('BooksForm', BooksForm);

export default {
  name: 'BooksList',
  comments: {
    BooksForm
  },
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
