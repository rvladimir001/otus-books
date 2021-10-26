<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot name="title">
        <h3 class="modal-title">Новая книга</h3>
      </slot>
      <slot name="body">
        <div class="modal-content">
          <ul>
            <li><label>Наименовние<input type="text" v-model="newBook.title"></label></li>
            <li><label>Автор<input type="text" v-model="newBook.authors[0].name"></label></li>
            <li><label>Язык издания<input type="text" v-model="newBook.languages"></label></li>
            <li><label>Категория<input type="text" v-model="newBook.bookshelves"></label></li>
          </ul>
        </div>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <button class="modal-footer__button" @click="save">
            Сохранить
          </button>
          <button class="modal-footer__button" @click="closeModal">
            Отмена
          </button>
        </div>
      </slot>
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
    closeModal() {
      this.show = false;
      this.newBook = Object.assign({}, this.book)
    },
    save() {
      this.newBook.languages = this.newBook.languages.split(",")
      this.addNewBook(this.newBook)
      this.closeModal()
    }
  }
}
</script>

<style scoped lang="scss">
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #2a4cc7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &-title {
    color: #0971c7;
  }

  &-content {
    margin-bottom: 20px
  }

  &-footer {
    &__button {
      background-color: #0971c7;
      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 8px;
      min-width: 150px;
    }
  }
}
</style>