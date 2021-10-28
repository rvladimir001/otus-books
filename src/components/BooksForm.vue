<template>
    <div>

        <div>
          <ul>
            <li><label>Наименовние<input type="text" v-model="newBook.title"></label></li>
            <li><label>Автор<input type="text" v-model="newBook.authors[0].name"></label></li>
            <li><label>Язык издания<input type="text" v-model="newBook.languages"></label></li>
            <li><label>Категория<input type="text" v-model="newBook.bookshelves"></label></li>
          </ul>
        </div>

        <div>
          <button @click="save">
            Сохранить
          </button>
        </div>

    </div>

</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: "BooksForm",
  data: function () {
    return {
      show: false,
      book: {
        "title": "",
        "authors": [
          {
            "name": "",
            "birth_year": "",
            "death_year": ""
          }
        ],
        "bookshelves": [],
        "languages": [],
      },
      newBook: {}
    }
  },
  created() {
    this.newBook = Object.assign({}, this.book)
  },
  methods: {
    ...mapMutations(["addNewBook"]),
    save() {
      this.newBook.languages = this.newBook.languages.split(",")
      this.addNewBook(this.newBook)
    }
  }
}
</script>

<style scoped>

</style>