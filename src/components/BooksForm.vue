<template>
  <div>
    <div>
      <ul>
        <li>
          <label><input type="text" v-model="ISBN" placeholder="ISBN" /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="title" placeholder="Наименовние"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="authors" placeholder="Автор"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="price" placeholder="Цена"
          /></label>
        </li>
        <li>
          <label
            ><input type="text" v-model="bookshelves" placeholder="Категория"
          /></label>
        </li>
        <li>
          <label>
            <textarea
              type="text"
              v-model="description"
              placeholder="Краткое описание"
            />
          </label>
        </li>
      </ul>
    </div>
    <div>
      <div class="btn" @click="save">Сохранить</div>
    </div>
  </div>
  <div v-if="!saveStatus" class="saved-process">
    <div>Сохранение новый книги...</div>
  </div>
  <div v-if="resultStatus" class="snackbar">Книга добавлена...</div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

export default {
  name: "BooksForm",
  emits: ["addBooks"],
  setup(props, { emit }) {
    const book = reactive({});
    let ISBN = ref("");
    let title = ref("");
    let authors = ref("");
    let price = ref("");
    let description = ref("");
    let bookshelves = ref("");
    let newBook = reactive({});
    let saveStatus = ref(true);
    let resultStatus = ref(false);
    const clear = () => {
      ISBN.value = "";
      title.value = "";
      authors.value = "";
      price.value = "";
      description.value = "";
      bookshelves.value = "";
    };
    const save = async () => {
      saveStatus.value = false;
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
      try {
        await emit("addBooks", newBook);
        clear();
        setTimeout(() => (saveStatus.value = true), 500);
        setTimeout(() => (resultStatus.value = true), 510);
        setTimeout(() => (resultStatus.value = false), 1500);
      } catch (e) {
        console.error("Ошибка сохранения новой книги:", e);
      }
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
      saveStatus,
      resultStatus,
    };
  },
};
</script>

<style scoped>
.saved-process {
  z-index: 999;
  opacity: 0.4;
  background: #000;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
}

.saved-process div {
  margin-top: 20%;
}

.snackbar {
  padding: 20px;
  width: 200px;
  background: #acbec2;
  border-radius: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
