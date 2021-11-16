<template>
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
  <pre>{{basicData}}</pre>
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
        name: "Books",
        class: true,
      },
      {
        id: 2,
        component: "Authors",
        name: "Authors",
        class: false,
      },
      {
        id: 3,
        component: "BooksForm",
        name: "Add Books",
        class: false,
      },
      {
        id: 4,
        component: "AuthorsForm",
        name: "Add Authors",
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
        .then(() => {
          selectComponent(
            componentsNames.value[0].name,
          );
        });
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
  margin-top: 60px;
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
</style>
