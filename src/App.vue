<template>
  <header>
      <h1>OTUS-BOOKS-AAP</h1>
  </header>

  <div class="controls">
    <div
      v-for="component in componentsNames"
      :key="component.id"
      class="controls-btn"
      :class="{ active: component.class }"
      @click="selectComponent(component.component)"
    >
      {{ component.name }}
    </div>
  </div>
  <component
    :is="name"
    :dataList="basicData"
    @addBooks="addNewBook"
    @addAuthors="addNewAuthors"
  ></component>
</template>

<script>
import Books from "./components/Books.vue";
import Authors from "./components/Authors.vue";
import BooksForm from "./components/BooksForm.vue";
import AuthorsForm from "./components/AuthorsForm.vue";
import { addMockData, addMockPoster } from "./mock.js";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Books,
    Authors,
    AuthorsForm,
    BooksForm,
  },
  setup() {
    const basicData = ref([]);
    let name = ref("Books");
    const componentsNames = ref([
      {
        id: 1,
        component: "Books",
        name: "Книги",
        class: true,
      },
      {
        id: 2,
        component: "Authors",
        name: "Авторы",
        class: false,
      },
      {
        id: 3,
        component: "BooksForm",
        name: "Добавить книгу",
        class: false,
      },
      {
        id: 4,
        component: "AuthorsForm",
        name: "Добавить автора",
        class: false,
      },
    ]);
    onMounted(() => getBooks());
    const getBooks = () => {
      axios
        .get("https://gutendex.com/books/?page=1")
        .then((response) => {
          const result = response.data.results;
          basicData.value = addMockData(result).map((book) =>
            Object.assign({}, book)
          );
        })
        // .then(() => {
        //   selectComponent(
        //     componentsNames.value[0].name,
        //   );
        // });
    };
    const addNewBook = (book) => {
      basicData.value.unshift(addMockPoster(book.value));
    };
    const addNewAuthors = (author) => {
      basicData.value.unshift(author.value);
    };
    const selectComponent = (component) => {
      name.value = component;
      for (const item of componentsNames.value) {
        item.class = item.component === component;
      }
    };
    return {
      getBooks,
      basicData,
      name,
      componentsNames,
      selectComponent,
      addNewBook,
      addNewAuthors,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 !important;
}

.controls {
  display: flex;
  justify-content: space-around;
  background: #dae2e4;
  height: 40px;
  align-items: center;
}

.controls-btn {
  border-bottom: 1px solid #dae2e4;
}

.controls-btn:hover {
  border-bottom: 1px solid #000;
  cursor: pointer;
}

.active {
  font-weight: bold;
}

header {
  background: linear-gradient(90deg,#a64fc5,#4f54e6);
  text-align: left;
  padding: 20px;
}
h1 {
  color: #fff;
}

table {
font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
border-collapse: collapse;
color: #000;
}

th {
border-bottom: 2px solid #a9a9a9;
padding: 10px;
text-align: center;
}
td {
padding: 10px;
}
tr:nth-child(odd) {
background: white;
}
tr:nth-child(even) {
background: #dae2e4;
}

</style>
