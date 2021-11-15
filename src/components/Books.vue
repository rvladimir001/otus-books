<template>
  <div>
    <h2>Литература</h2>
    <pre>{{dataList[0]}}</pre>
    <table>
      <tr>
        <th>ISBN</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Постер</th>
        <th>Краткое описание</th>
        <th>Цена</th>
        <th>Категория</th>
      </tr>
      <tr v-for="book in dataList" :key="book.id">
        <td>{{ book.ISBN }}</td>
        <td>{{ book.title }}</td>
        <td>
          <span v-for="athor in book.authors" :key="athor.name">{{
            athor.name
          }}</span>
        </td>
        <td>
          <img :src="book.poster" style="width: 200px" alt="Постер книги" />
        </td>
        <td>
          {{ book.description }}
        </td>
        <td>
          {{ book.price }}
        </td>
        <td>
          <span v-for="bookshelv in book.bookshelves" :key="bookshelv">{{
            bookshelv
          }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
// import {ref} from "vue";
export default {
  name: "Books",
  props: ["dataList"],
  setup(props) {
    return { props };
  },
};
</script>

<style scoped></style>
