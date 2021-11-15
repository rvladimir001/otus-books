<template>
  <div>
    <div>
      <ul>
        <li>
          <label>ISBN<input type="text" v-model="ISBN" /></label>
        </li>
        <li>
          <label>Наименовние<input type="text" v-model="title" /></label>
        </li>
        <li>
          <label>Автор<input type="text" v-model="authors" /></label>
        </li>
        <li>
          <label
            >Краткое описание<input type="text" v-model="description"
          /></label>
        </li>
        <li>
          <label>Цена<input type="text" v-model="price" /></label>
        </li>
        <li>
          <label>Категория<input type="text" v-model="bookshelves" /></label>
        </li>
      </ul>
    </div>
    <div>
      <button @click="save">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

export default {
  name: "BooksForm",
  emits: ["add-book"],
  setup(props, { emit }) {
    const book = reactive({});
    const ISBN = ref("");
    const title = ref("");
    const authors = ref("");
    const price = ref("");
    const description = ref("");
    const bookshelves = ref("");
    let newBook = reactive({});
    function save() {
      newBook.value = {
        ISBN: ISBN,
        title: title,
        authors: [authors],
        price: price,
        description: description,
        bookshelves: [bookshelves],
      };
      emit("add-book", newBook);
    }
    onMounted(() => {
      newBook = Object.assign({}, book);
    });
    return {
      save,
      ISBN,
      title,
      authors,
      price,
      description,
      newBook,
      bookshelves,
    };
  },
};
</script>

<style scoped></style>
