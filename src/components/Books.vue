<template>
  <div>
    <h2>Литература</h2>
    <input type="text" v-model="searchBook" />
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
      </tr>
      <tr v-for="book in actualBooksList" :key="book.id">
        <template v-if="book.price">
          <td>{{ book.ISBN }}</td>
          <td>{{ book.title }}</td>
          <td>
            <span v-for="athor in book.authors" :key="athor.name">{{ athor.name }}</span>
          </td>
          <td>{{ book.year }}</td>
          <td>
            <img :src="book.poster" style="width: 200px" alt="Постер книги" />
          </td>
          <td>{{ book.description }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.bookshelves.join(", ") }}</td>
        </template>
      </tr>
    </table>
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
    return { props, searchBook, actualBooksList };
  },
};
</script>

<style scoped></style>
