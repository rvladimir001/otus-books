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
      <div class="control-panel">
        <div class="save-block">
          <div class="btn" @click="save">Сохранить</div>
          <div>
            <span class="alert" v-if="alertStatus"
              >Необходимо заполнить все поля!</span
            >
          </div>
        </div>
        <div class="btn" @click="clear">Очистить</div>
      </div>
    </div>
  </div>
  <div v-if="!saveStatus" class="saved-process">
    <div>Сохранение новый книги...</div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  name: "BooksForm",
  setup() {
    const store = useStore();
    const book = reactive({});
    let ISBN = ref("");
    let title = ref("");
    let authors = ref("");
    let price = ref("");
    let description = ref("");
    let bookshelves = ref("");
    let newBook = reactive({});
    let saveStatus = ref(true);
    let alertStatus = ref(false);
    const clear = () => {
      ISBN.value = "";
      title.value = "";
      authors.value = "";
      price.value = "";
      description.value = "";
      bookshelves.value = "";
    };
    const validator = () => {
      if (
        ISBN.value === "" ||
        title.value === "" ||
        authors.value === "" ||
        price.value === "" ||
        description.value === "" ||
        bookshelves.value === ""
      ) {
        alertStatus.value = true;
        setTimeout(() => (alertStatus.value = false), 1500);
        return false;
      }
      return true;
    };
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
      if (validator()) {
        saveStatus.value = false;
        store.commit("addBook", newBook);
        setTimeout(() => {
          saveStatus.value = true;
        }, 500);
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
      alertStatus,
      clear,
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

.alert {
  color: red;
  font-size: 11px;
}
</style>
