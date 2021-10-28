<template>
  <div>
    <h2>Авторы</h2>
    <button сlass="show-modal-button" @click="showModal">Добавить автора</button>
    <table>
      <tr>
        <th>Автор</th>
        <th>Год рожения</th>
        <th>Пол</th>
        <th>Страна</th>
        <th>Книги</th>
      </tr>
      <tr v-for="book in books" :key="book.id">
        <td v-if="book.authors.length>0">
          {{ book.authors[0].name }}
        </td>
        <td v-if="book.authors.length>0">
          {{ book.authors[0].birth_year }}
        </td>
        <td v-if="book.authors.length>0">
          {{ book.authors[0].gender }}
        </td>
        <td v-if="book.authors.length>0">
          {{ book.authors[0].country }}
        </td>
        <td v-if="book.authors.length>0">
          {{ book.title }}
        </td>

      </tr>
    </table>
    <AuthorsForm ref="modal"></AuthorsForm>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AuthorsForm from "./AuthorsForm.vue";
import Vue from "vue";

Vue.component('AuthorsForm', AuthorsForm);

export default {
  name: 'AuthorsList',
  comments: {
    AuthorsForm
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

