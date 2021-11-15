<template>
  <div>
    <h2>Авторы</h2>
    <table>
      <tr>
        <th>Автор</th>
        <th>Год рожения</th>
        <th>Пол</th>
        <th>Страна</th>
        <th>Книги</th>
      </tr>
      <tr v-for="author in dataList" :key="author.id">
        <td v-if="author.authors.length > 0">
          {{ author.authors[0].name }}
        </td>
        <td v-if="author.authors.length > 0">
          {{ author.authors[0].birth_year }}
        </td>
        <td v-if="author.authors.length > 0">
          {{ author.authors[0].gender }}
        </td>
        <td v-if="author.authors.length > 0">
          {{ author.authors[0].country }}
        </td>
        <td v-if="author.authors.length > 0">
          {{ author.title }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Authors",
  props: ["dataList"],
  setup(props) {
    return { props };
  },
};
</script>

<style scoped></style>
