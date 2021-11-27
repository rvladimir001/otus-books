<template>
  <header>
    <h1>OTUS-BOOKS-AAP</h1>
  </header>
  <div class="controls">
    <div
      v-for="link in linksNames"
      :key="link.id"
      class="controls-btn"
      :class="{ active: link.class }"
      @click="selectComponent(link.link)"
    >
      <router-link :to="{ path: `${link.link}` }">{{ link.name }}</router-link>
    </div>
  </div>
  <router-view
    :dataList="basicData"
    @addBooks="addNewBook"
    @addAuthors="addNewAuthors"
  />
</template>

<script>
import { addMockData, addMockPoster } from "./mock.js";
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  name: "App",
  setup() {
    const basicData = ref([]);
    let name = ref("Books");
    const linksNames = ref([
      {
        id: 1,
        link: "Books",
        name: "Книги",
        class: true,
      },
      {
        id: 2,
        link: "Authors",
        name: "Авторы",
        class: false,
      },
      {
        id: 3,
        link: "addbooks",
        name: "Добавить книгу",
        class: false,
      },
      {
        id: 4,
        link: "addauthors",
        name: "Добавить автора",
        class: false,
      },
    ]);
    onMounted(() => getBooks());
    const getBooks = () => {
      axios.get("https://gutendex.com/books/?page=1").then((response) => {
        const result = response.data.results;
        basicData.value = addMockData(result).map((book) =>
          Object.assign({}, book)
        );
      });
    };
    const addNewBook = (book) => {
      basicData.value.unshift(addMockPoster(book.value));
    };
    const addNewAuthors = (author) => {
      basicData.value.unshift(author.value);
    };
    const selectComponent = (link) => {
      for (const item of linksNames.value) {
        item.class = item.link === link;
      }
    };
    return {
      getBooks,
      basicData,
      name,
      linksNames,
      selectComponent,
      addNewBook,
      addNewAuthors,
    };
  },
};
</script>

<style>
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0 !important;
  height: 100%;
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

.controls-btn a {
  color: #000000;
  text-decoration: none;
}
.active {
  font-weight: bold;
}
header {
  background: linear-gradient(90deg, #a64fc5, #4f54e6);
  text-align: left;
  padding: 20px;
}
h1 {
  color: #fff;
}
table {
  width: 90%;
  margin: 0 auto;
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
ul li {
  margin: 10px;
  list-style-type: none;
}
ul {
  margin-left: 0;
  padding-left: 0;
}
ul li input,
ul li textarea {
  width: 350px;
  border: 1px solid #dae2e4;
  padding: 5px;
}
ul li textarea {
  max-width: 350px;
  min-width: 350px;
  min-height: 100px;
  max-height: 100px;
}
ul li input:active,
ul li input:hover,
ul li input:focus,
ul li textarea:active,
ul li textarea:hover,
ul li textarea:focus {
  outline: 0;
  outline-offset: 0;
}
.btn {
  width: 100px;
  height: 20px;
  background: #acbec2;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
}
.btn:hover {
  box-shadow: inset 0px 0px 16px 13px rgba(355, 355, 355, 0.3);
}
.btn:active {
  box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0.3);
}
.no-data {
  padding: 30px;
}
.control-panel {
  display: flex;
  justify-content: space-around;
  width: 350px;
  text-align: center;
  margin: auto;
}
</style>
