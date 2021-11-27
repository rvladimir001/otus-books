<template>
  <div>
    <div class="search-block">
      <input type="text" v-model="searchBook" placeholder="Поиск..." />
    </div>
    <div v-if="actualBooksList.length > 0">
      <table>
        <tr>
          <th>ISBN</th>
          <th>Название</th>
          <th>Автор</th>
          <th>Год выпуска</th>
          <th>Постер</th>
          <th>Краткое описание</th>
          <th>Цена</th>
          <th>Категория</th>
          <th>Действие</th>
        </tr>
        <tr v-for="book in actualBooksList" :key="book.id">
          <template v-if="book.price">
            <td>{{ book.ISBN }}</td>
            <td>{{ book.title }}</td>
            <td>
              <span v-for="athor in book.authors" :key="athor.name">{{
                athor.name
              }}</span>
            </td>
            <td>{{ book.year }}</td>
            <td>
              <img :src="book.poster" style="width: 200px" alt="Постер книги" />
            </td>
            <td>{{ book.description }}</td>
            <td>{{ book.price }}</td>
            <td>{{ book.bookshelves.join(" ") }}</td>
            <td>
              <div class="btn" @click="del(book.id)">Удалить</div>
            </td>
          </template>
        </tr>
      </table>
    </div>
    <div v-else>Книга не найдена.</div>
  </div>
</template>
<script>
import { ref, computed } from "vue";

export default {
  name: "Books",
  props: ["dataList"],
  setup(props) {
    const searchBook = ref("");
    const actualBooksList = computed(() => {
      if (searchBook.value !== "") {
        return props.dataList.filter((book) => {
          return (
            book.title.indexOf(searchBook.value) !== -1 ||
            book.year.indexOf(searchBook.value) !== -1 ||
            book.bookshelves.join("").indexOf(searchBook.value) !== -1 ||
            book.price.indexOf(searchBook.value) !== -1
          );
        });
      }
      return props.dataList;
    });
    const del = (id) => {
      const idx = props.dataList.indexOf(
        props.dataList.find((book) => book.id === id)
      );
      // eslint-disable-next-line vue/no-mutating-props
      props.dataList.splice(idx, 1);
    };
    return { props, searchBook, actualBooksList, del };
  },
};
</script>

<style scoped>
.search-block {
  text-align: left;
}
.search-block input {
  width: 300px;
  border: none;
  border-bottom: 1px solid #dae2e4;
  margin: 20px;
}
.search-block input:active,
.search-block input:hover,
.search-block input:focus {
  outline: 0;
  outline-offset: 0;
}
</style>
