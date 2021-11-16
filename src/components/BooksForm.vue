<template>
  <div>
    <div>
      <ul>
        <li>
          <label><input type="text" v-model="ISBN" placeholder="ISBN"/></label>
        </li>
        <li>
          <label><input type="text" v-model="title" placeholder="Наименовние"/></label>
        </li>
        <li>
          <label><input type="text" v-model="authors" placeholder="Автор"/></label>
        </li>
        <li>
          <label><input type="text" v-model="price" placeholder="Цена"/></label>
        </li>
        <li>
          <label><input type="text" v-model="bookshelves" placeholder="Категория"/></label>
        </li>
        <li>
          <label
          ><textarea type="text" v-model="description" placeholder="Краткое описание"
          /></label>
        </li>

      </ul>
    </div>
    <div>
      <div class="btn" @click="save">Сохранить</div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, reactive} from "vue";

export default {
  name: "BooksForm",
  emits: ["addBooks"],
  setup(props, {emit}) {
    const book = reactive({});
    const ISBN = ref("");
    const title = ref("");
    const authors = ref("");
    const price = ref("");
    const description = ref("");
    const bookshelves = ref("");
    let newBook = reactive({});
    const save = () => {
      newBook.value = {
        ISBN: ISBN,
        title: title,
        authors: [
          {
            name: authors,
            birth_year: ref(""),
            death_year: ref(""),
            country: ref(""),
            gender: ref(""),
          },
        ],
        price: price,
        description: description,
        bookshelves: bookshelves.value.split(","),
      };
      emit("addBooks", newBook);
    };
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

<style scoped>

</style>
